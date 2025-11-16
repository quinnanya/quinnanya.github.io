#!/usr/bin/env node
const { spawn, execSync } = require('child_process');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const cwd = path.resolve(__dirname, '..');
const dist = path.join(cwd, 'dist');
if (!fs.existsSync(dist)) { console.error('dist missing'); process.exit(1); }

// Start a simple static server with http-server via npx
console.log('Starting http-server via npx on port 8080');
const serverProc = spawn('npx', ['http-server', 'dist', '-p', '8080', '-s'], { cwd, stdio: 'ignore' });

// Wait for server to boot (very naive wait)
function sleep(ms) { return new Promise(resolve=>setTimeout(resolve, ms)); }
(async ()=>{
  await sleep(1000);
  const files = glob.sync('**/*.html', { cwd: dist });
  const results = [];
  for (const f of files) {
    const url = `http://localhost:8080/${f}`;
    console.log('pa11y:', url);
    try {
      const cmd = `npx pa11y --reporter json "${url}"`;
      const out = execSync(cmd, { cwd, stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 10*1024*1024 });
      const issues = JSON.parse(out.toString('utf8'));
      results.push({ file: f, url, issues });
    } catch (e) {
      // capture any errors
      results.push({ file: f, url, error: String(e.message).slice(0,500) });
    }
  }
  const outPath = path.join(dist, 'pa11y-local-results.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log('Wrote', outPath);
  serverProc.kill();
  process.exit(0);
})();
