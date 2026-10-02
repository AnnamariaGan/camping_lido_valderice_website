#!/usr/bin/env node
// Aggregates Lighthouse JSON reports into METRIC lines for the autoresearch harness.
// Usage: node scripts/lh-metrics.mjs <dir-with-lighthouse-json>
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2] ?? 'lighthouse';
const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
if (files.length === 0) {
  console.error(`no Lighthouse JSON reports in ${dir}`);
  process.exit(1);
}

const SCORED_CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];
const NUMERIC_METRICS = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'total-blocking-time',
  'cumulative-layout-shift',
  'speed-index',
  'interactive',
];

/** @type {Record<string, number[]>} */
const buckets = {};
const push = (key, value) => {
  (buckets[key] ??= []).push(value);
};

for (const file of files) {
  const report = JSON.parse(readFileSync(join(dir, file), 'utf8'));
  if (report.runtimeError) {
    console.error(`report ${file} has runtimeError: ${report.runtimeError.message}`);
    process.exit(1);
  }
  for (const cat of SCORED_CATEGORIES) {
    const c = report.categories[cat];
    if (!c || c.score == null) {
      console.error(`report ${file} missing category ${cat}`);
      process.exit(1);
    }
    push(cat, c.score);
  }
  for (const m of NUMERIC_METRICS) {
    const audit = report.audits[m];
    if (!audit || audit.numericValue == null) {
      console.error(`report ${file} missing metric ${m}`);
      process.exit(1);
    }
    push(m, audit.numericValue);
  }
}

const avg = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
const score = (xs) => Math.round(avg(xs) * 100);

const metricName = {
  performance: 'lighthouse-performance',
  accessibility: 'lighthouse-accessibility',
  'best-practices': 'lighthouse-best-practices',
  seo: 'lighthouse-seo',
  'first-contentful-paint': 'perf-fcp-ms',
  'largest-contentful-paint': 'perf-lcp-ms',
  'total-blocking-time': 'perf-tbt-ms',
  'cumulative-layout-shift': 'perf-cls',
  'speed-index': 'perf-si-ms',
  interactive: 'perf-tti-ms',
};

console.log(`audited ${files.length} pages`);
for (const key of [...SCORED_CATEGORIES, ...NUMERIC_METRICS]) {
  const isScore = SCORED_CATEGORIES.includes(key);
  const value = isScore
    ? score(buckets[key])
    : key === 'cumulative-layout-shift'
      ? Number(avg(buckets[key]).toFixed(4))
      : Math.round(avg(buckets[key]));
  console.log(`METRIC ${metricName[key]}=${value}`);
}
