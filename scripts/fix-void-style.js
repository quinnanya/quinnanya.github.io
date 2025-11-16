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
  console.error('dist/ not found, run build first');
  process.exit(1);
}

const voidTags = ['br','hr','img','input','link','meta','area','base','col','embed','param','source','track','wbr'];
let touched = 0, files = 0;
walk(dist, file => {
  if (!file.endsWith('.html')) return;
  files++;
  let s = fs.readFileSync(file, 'utf8');
  const before = s;

  // Replace XML-style self-closing void tags like <img ... /> with <img ...>
  // Use a regex that matches a tag name, attributes, optional whitespace, then '/>'
  // only for known voidTags. Use a function to preserve spacing.
  s = s.replace(new RegExp(`<(${voidTags.join('|')})(\\b[^>]*)/\\s*>`, 'gi'), (m, tag, attrs) => {
    return `<${tag}${attrs}>`;
  });

  if (s !== before) {
    fs.writeFileSync(file, s, 'utf8');
    touched++;
  }
});
console.log(`Normalized void tags in ${touched}/${files} HTML files under dist/`);
