#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { JSDOM } = require('jsdom');
// axe-core must be required after a global window/document is created for jsdom.
// We'll require it inside the loop after setting global.window so it initializes
// with the DOM context and doesn't error on import.

const cwd = path.resolve(__dirname, '..');
const dist = path.join(cwd, 'dist');
if (!fs.existsSync(dist)) { console.error('dist missing'); process.exit(1); }

const files = glob.sync('**/*.html', { cwd: dist, absolute: true });
const results = [];
(async function(){
  for (const file of files) {
    try {
      const source = fs.readFileSync(file, 'utf8');
      const dom = new JSDOM(source);
      const { window } = dom;
      // Provide axe with the window
      global.window = window;
      global.document = window.document;
      global.Node = window.Node;
      // require axe-core after window/global created so axe sees window
      const axeCoreLocal = require('axe-core');
      // axeCore.run on the document
      const res = await axeCoreLocal.run(window.document);
      results.push({ file, violations: res.violations });
    } catch (e) {
      results.push({ file, error: String(e.message||e) });
    }
  }
  const outPath = path.join(dist, 'axe-results.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log('Wrote', outPath, 'with', results.length, 'files');
})();
