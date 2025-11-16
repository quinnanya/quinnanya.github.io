#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) walk(res, cb);
    else cb(res);
  });
}

const dist = path.resolve(__dirname, '..', 'dist');
if (!fs.existsSync(dist)) {
  console.error('dist/ directory not found. Run build first.');
  process.exit(1);
}

let files = 0, changed = 0;
walk(dist, file => {
  if (!file.endsWith('.html')) return;
  files++;
  let src = fs.readFileSync(file, 'utf8');

  // Normalize CRLF -> LF
  let out = src.replace(/\r\n?/g, '\n');

  // Replace non-breaking spaces with normal spaces
  out = out.replace(/\u00A0/g, ' ');

  // Remove zero-width spaces and similar invisible characters
  out = out.replace(/[\u200B\u200C\u200D\uFEFF]/g, '');

  // Trim trailing spaces/tabs on each line
  out = out.split('\n').map(l => l.replace(/[ \t]+$/g, '')).join('\n');

  // Ensure file ends with a single trailing newline
  if (!out.endsWith('\n')) out = out + '\n';

  if (out !== src) {
    fs.writeFileSync(file, out, 'utf8');
    changed++;
  }
});
console.log(`Trimmed/normalized whitespace in ${changed}/${files} HTML files under dist/`);
