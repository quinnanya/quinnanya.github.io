#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { execSync } = require('child_process');

const cwd = path.resolve(__dirname, '..');
const dist = path.join(cwd, 'dist');
if (!fs.existsSync(dist)) {
  console.error('dist not found; run build');
  process.exit(1);
}

const files = glob.sync('**/*.html', { cwd: dist, absolute: true });
const results = [];
for (const f of files) {
  try {
    const url = 'file://' + f; // pa11y can read file:// URLs
    console.log('Running pa11y on', f);
    // Use npx pa11y to avoid adding it to package.json; set reporter to json
    const cmd = `npx pa11y --reporter json "${url}"`;
    const out = execSync(cmd, { cwd, stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 10 * 1024 * 1024});
    // pa11y JSON output is an array of issue objects
    const issues = JSON.parse(out.toString('utf8'));
    results.push({ filePath: f, issues });
  } catch (e) {
    // If pa11y finds accessibility issues it still exits zero and prints results; only fail on crashing
    let msg = String(e.message || e);
    console.error('pa11y failed on', f, msg.slice(0,200));
    results.push({ filePath: f, error: msg });
  }
}

const outPath = path.join(dist, 'pa11y-results.json');
fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
console.log('Wrote', outPath, 'with', results.length, 'files');
