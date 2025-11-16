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

// Let html-validate discover the project config itself (avoid passing configFile
// which may not be supported by the installed library schema).
const htmlvalidate = new HtmlValidate();

const files = glob.sync('**/*.html', { cwd: dist, absolute: true });
const results = [];
for (const file of files) {
  try {
    const report = htmlvalidate.validateFile(file);
    // html-validate returns a report with results array; first item corresponds to this file
    let messages = [];
    if (report && Array.isArray(report.results) && report.results[0]) {
      messages = report.results[0].messages || [];
    }
    results.push({ filePath: file, errorCount: report.errorCount, warningCount: report.warningCount, messages });
  } catch (e) {
    results.push({ filePath: file, error: String(e) });
  }
}

const out = path.join(dist, 'htmlvalidate-site-after3.json');
fs.writeFileSync(out, JSON.stringify(results, null, 2), 'utf8');
console.log('Wrote', out, 'with', results.length, 'file results');
