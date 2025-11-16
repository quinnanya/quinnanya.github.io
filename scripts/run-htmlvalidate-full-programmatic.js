#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { HtmlValidate } = require('html-validate');

const cwd = path.resolve(__dirname, '..');
const dist = path.join(cwd, 'dist');
if (!fs.existsSync(dist)) {
  console.error('dist/ not found, run build first');
  process.exit(1);
}

(async function(){
  try {
    const htmlvalidate = new HtmlValidate({
      // leave defaults so it finds .htmlvalidate.json in project
    });
    const pattern = path.join(dist, '**/*.html');
    const report = await htmlvalidate.executeOnFiles([pattern]);
    // report has results: array
    const out = path.join(dist, 'htmlvalidate-site-after3-full.json');
    fs.writeFileSync(out, JSON.stringify(report.results, null, 2), 'utf8');
    console.log('Wrote', out, 'with', report.results.length, 'file results');
  } catch (e) {
    console.error('Error running html-validate programmatically:', e);
    process.exit(1);
  }
})();
