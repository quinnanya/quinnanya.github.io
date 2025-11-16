#!/usr/bin/env node
const fs=require('fs');const path=require('path');
const p=path.join(__dirname,'..','dist','pa11y-local-results.json');
if(!fs.existsSync(p)){console.error('missing',p);process.exit(1);}const data=JSON.parse(fs.readFileSync(p,'utf8'));
const counts={};const filesByCode={};let total=0;let errorsCount=0;const errorsSamples=[];
for(const r of data){if(r.error){errorsCount++; if(errorsSamples.length<10) errorsSamples.push({file:r.file,error:r.error});}
 if(r.issues && r.issues.length){for(const iss of r.issues){const code=iss.code||iss.type||iss.message;counts[code]=(counts[code]||0)+1;filesByCode[code]=filesByCode[code]||new Set();filesByCode[code].add(r.file);total++;}}}
const top=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([code,count])=>({code,count,examples:Array.from(filesByCode[code]).slice(0,5)}));
const outFile=path.join(__dirname,'..','dist','pa11y-local-summary.json');
fs.writeFileSync(outFile,JSON.stringify({totalIssues:total,errorsCount,errorsSamples,top},null,2),'utf8');
console.log('Wrote',outFile,'issues',total);console.log(top.slice(0,10));