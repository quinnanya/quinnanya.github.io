#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { HtmlValidate } = require('html-validate');

const cwd = path.resolve(__dirname, '..');
const dist = path.join(cwd, 'dist');
if (!fs.existsSync(dist)) {
  console.error('dist/ not found, run build first');
  process.exit(1);
}

(async function(){
  try {
    const htmlvalidate = new HtmlValidate();
    const files = glob.sync('dist/**/*.html', { cwd, absolute: false });
    const results = [];
    for (const file of files) {
      try {
        const report = htmlvalidate.validateFile(path.join(cwd, file));
        results.push({ filePath: file, errorCount: report.errorCount, warningCount: report.warningCount, messages: report.messages });
      } catch (e) {
        results.push({ filePath: file, error: String(e) });
      }
    }
    const out = path.join(dist, 'htmlvalidate-site-after3-full2.json');
    fs.writeFileSync(out, JSON.stringify(results, null, 2), 'utf8');
    console.log('Wrote', out, 'with', results.length, 'file results');
  } catch (e) {
    console.error('Error running html-validate programmatically:', e);
    process.exit(1);
  }
})();
