#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const cwd = path.resolve(__dirname, '..');
const dist = path.join(cwd, 'dist');
if (!fs.existsSync(dist)) {
  console.error('dist/ not found, run build first');
  process.exit(1);
}

try {
  // Run the installed CLI and capture stdout
  const cmd = 'npx html-validate -c .htmlvalidate.json -f json dist/**/*.html';
  const out = execSync(cmd, { cwd, stdio: ['ignore', 'pipe', 'pipe'] });
  fs.writeFileSync(path.join(dist, 'htmlvalidate-site-after3-cli.json'), out);
  console.log('Wrote', path.join(dist, 'htmlvalidate-site-after3-cli.json'));
} catch (e) {
  console.error('html-validate CLI failed:', e.message);
  if (e.stdout) {
    fs.writeFileSync(path.join(dist, 'htmlvalidate-site-after3-cli.json'), e.stdout);
    console.log('Partial output written to htmlvalidate-site-after3-cli.json');
  }
  process.exit(0);
}
