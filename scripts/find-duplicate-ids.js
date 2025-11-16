const fs = require('fs');
const path = require('path');

function walk(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fp = path.join(dir, file);
    const stat = fs.statSync(fp);
    if (stat && stat.isDirectory()) results.push(...walk(fp));
    else if (/\.html?$/.test(file)) results.push(fp);
  });
  return results;
}

const dir = path.resolve(__dirname, '..', 'dist');
if (!fs.existsSync(dir)) {
  console.error('dist folder not found. Run build first.');
  process.exit(1);
}

const files = walk(dir);
const out = {};
files.forEach(file => {
  const str = fs.readFileSync(file, 'utf8');
  // only match id attributes that occur inside a tag, not in text/code examples
  const rx = /<[^>]*\bid\s*=\s*(["'])(.*?)\1/gi;
  let m;
  const ids = {};
  while ((m = rx.exec(str))) {
    const id = m[2];
    ids[id] = (ids[id] || 0) + 1;
  }
  const duplicates = Object.entries(ids).filter(([k, v]) => v > 1);
  if (duplicates.length) {
    out[file] = duplicates.map(([id, count]) => ({ id, count }));
  }
});

fs.writeFileSync(path.join(dir, 'duplicate-ids.json'), JSON.stringify(out, null, 2));
console.log('Wrote dist/duplicate-ids.json with results for ' + Object.keys(out).length + ' files');
