#!/usr/bin/env bash
# Benchmark harness: builds the Astro site and audits it with Lighthouse
# (all categories, mobile emulation, simulated throttling).
#
# Deterministic by construction:
#   - npm ci from the lockfile
#   - static build of fixed sources (sharp image transforms are deterministic)
#   - local preview server on a fixed port; no other network dependency
#   - third-party requests blocked so every run sees the same request graph
#   - Lantern (simulated) throttling, not live network shaping
#   - single pinned Chrome installation (newest in ~/.cache/puppeteer)
#
# Output: one "METRIC name=value" line per metric (see scripts/lh-metrics.mjs).
set -euo pipefail
cd "$(dirname "$0")"

export PATH="$HOME/.local/opt/node-v24.21.0-linux-x64/bin:$PATH"

PORT=4323
BASE="http://127.0.0.1:${PORT}"
OUT="lighthouse"
CHROME_GLOB="$HOME/.cache/puppeteer/chrome/linux-*/chrome-linux64/chrome"
CHROME_FLAGS=(--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage --host-resolver-rules=MAP\ cloud.umami.is\ ~NOTFOUND,MAP\ gateway.umami.is\ ~NOTFOUND)

# 1. Dependencies straight from the lockfile.
npm ci --no-audit --no-fund >/dev/null 2>&1

# 2. Static build.
npm run build >/dev/null

# 3. Locate the pinned Chrome.
CHROME="$(ls -1d $CHROME_GLOB 2>/dev/null | sort -V | tail -1 || true)"
if [ -z "$CHROME" ]; then
  echo "error: Chrome not found; install with: npx @puppeteer/browsers install chrome@stable --path ~/.cache/puppeteer" >&2
  exit 1
fi
export CHROME_PATH="$CHROME"

# 4. Pages to audit (it locale, one per route — same content across locales).
PAGES=(
  /it/
  /it/piazzole/
  /it/prezzi/
  /it/risto-market/
  /it/eventi/
  /it/case-mobili/
  /it/territorio/
  /it/contatti/
)

# 5. Static preview server for dist/.
TMP_CHROME_DIR="$(mktemp -d)"
SERVER_LOG="$(mktemp)"
cleanup() {
  [ -n "${SERVER_PID:-}" ] && kill "$SERVER_PID" 2>/dev/null || true
  rm -rf "$TMP_CHROME_DIR" "$SERVER_LOG"
}
trap cleanup EXIT

npx astro preview --host 127.0.0.1 --port "$PORT" >"$SERVER_LOG" 2>&1 &
SERVER_PID=$!

ready=0
for _ in $(seq 1 60); do
  code="$(curl -s -o /dev/null -w '%{http_code}' "$BASE${PAGES[0]}" || true)"
  if [ "$code" = "200" ]; then ready=1; break; fi
  sleep 1
done
if [ "$ready" != "1" ]; then
  echo "error: preview server did not become ready on port $PORT" >&2
  cat "$SERVER_LOG" >&2
  exit 1
fi

# 6. Lighthouse, all categories, one run per page.
rm -rf "$OUT"
mkdir -p "$OUT"
for i in "${!PAGES[@]}"; do
  page="${PAGES[$i]}"
  npx lighthouse "$BASE$page" \
    --quiet \
    --output=json \
    --output-path="$OUT/page-$i.json" \
    --only-categories=performance,accessibility,best-practices,seo \
    --chrome-flags="${CHROME_FLAGS[*]} --user-data-dir=$TMP_CHROME_DIR" \
    >/dev/null
done

# 7. Aggregate -> METRIC lines.
node scripts/lh-metrics.mjs "$OUT"
