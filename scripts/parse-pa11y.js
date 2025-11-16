#!/usr/bin/env node
const fs=require('fs');
const path=require('path');
const p=path.join(__dirname,'..','dist','pa11y-results.json');
if(!fs.existsSync(p)){console.error('no pa11y results at',p);process.exit(1);}const data=JSON.parse(fs.readFileSync(p,'utf8'));
const counts={};const filesByRule={};let totalIssues=0;const problemRulesRegex=/^(WCAG2|WCAG)/i; // pa11y issue.code e.g., WCAG2:1.1.1
for(const entry of data){if(entry.issues){for(const iss of entry.issues){const code=iss.code || iss.type || 'unknown';counts[code]=(counts[code]||0)+1;filesByRule[code]=filesByRule[code]||new Set();filesByRule[code].add(entry.filePath);totalIssues++;}}}
const top=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([rule,count])=>({rule,count,examples:Array.from(filesByRule[rule]).slice(0,5)}));
fs.writeFileSync(path.join(__dirname,'..','dist','pa11y-summary.json'),JSON.stringify({totalFiles:data.length,totalIssues,top},null,2),'utf8');
console.log('Wrote dist/pa11y-summary.json', 'files',data.length,'issues',totalIssues);console.log(JSON.stringify(top.slice(0,8),null,2));