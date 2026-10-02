// Post-build: Astro genera i redirect statici come <path>.html/index.html
// (directory), ma gli host statici come GitHub Pages servono i .html come file.
// Questo script appiattisce ogni dist/pages/<name>.html/index.html in
// dist/pages/<name>.html, così i vecchi link continuano a funzionare.
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'dist/pages';
if (!existsSync(dir)) {
  process.exit(0);
}

let fixed = 0;
for (const entry of readdirSync(dir)) {
  if (!entry.endsWith('.html')) continue;
  const nested = join(dir, entry, 'index.html');
  const flat = join(dir, entry);
  if (existsSync(nested)) {
    const content = readFileSync(nested);
    rmSync(join(dir, entry), { recursive: true });
    writeFileSync(flat, content);
    fixed++;
  }
}
console.log(`fix-redirects: ${fixed} redirect appiattiti`);
