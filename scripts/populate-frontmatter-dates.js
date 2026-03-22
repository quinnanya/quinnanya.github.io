#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const targetRoot = path.join(repoRoot, "src");

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getLastCommitDate(filePath) {
  try {
    const relPath = path.relative(repoRoot, filePath);
    const timestamp = execSync(`git log -1 --format=%ai -- "${relPath}"`, {
      cwd: repoRoot,
      encoding: "utf8"
    }).trim();
    
    if (!timestamp) {
      return null;
    }
    
    // Parse ISO 8601 timestamp (e.g., "2026-03-22 14:30:45 -0500")
    const dateStr = timestamp.split(" ")[0];
    const date = new Date(dateStr);
    return formatLocalDate(date);
  } catch (error) {
    return null;
  }
}

function hasExcludedSegment(filePath) {
  const normalized = filePath.split(path.sep).map((part) => part.toLowerCase());
  return normalized.includes("posts") || normalized.includes("project-bamboo");
}

function collectMarkdownFiles(dirPath, files = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "dist" || entry.name.startsWith(".")) {
        continue;
      }
      collectMarkdownFiles(fullPath, files);
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md") && !hasExcludedSegment(fullPath)) {
      files.push(fullPath);
    }
  }

  return files;
}

function updateDateInFrontMatter(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  if (!content.startsWith("---\n") && !content.startsWith("---\r\n")) {
    return { changed: false, reason: "no-front-matter" };
  }

  const frontMatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);
  if (!frontMatterMatch) {
    return { changed: false, reason: "invalid-front-matter" };
  }

  const fullFrontMatter = frontMatterMatch[0];
  const frontMatterBody = frontMatterMatch[1];
  const eol = fullFrontMatter.includes("\r\n") ? "\r\n" : "\n";

  const nextDate = getLastCommitDate(filePath);
  if (!nextDate) {
    return { changed: false, reason: "no-git-history" };
  }

  const lines = frontMatterBody.split(/\r?\n/);
  const dateLineIndex = lines.findIndex((line) => /^date\s*:/.test(line));

  if (dateLineIndex >= 0) {
    lines[dateLineIndex] = `date: ${nextDate}`;
  } else {
    lines.push(`date: ${nextDate}`);
  }

  const updatedFrontMatter = `---${eol}${lines.join(eol)}${eol}---${frontMatterMatch[2]}`;

  if (updatedFrontMatter === fullFrontMatter) {
    return { changed: false, reason: "already-current" };
  }

  const updatedContent = content.replace(fullFrontMatter, updatedFrontMatter);
  fs.writeFileSync(filePath, updatedContent, "utf8");

  return { changed: true, date: nextDate };
}

function main() {
  const markdownFiles = collectMarkdownFiles(targetRoot);
  let updatedCount = 0;
  let skippedCount = 0;

  for (const filePath of markdownFiles) {
    const result = updateDateInFrontMatter(filePath);
    if (result.changed) {
      updatedCount += 1;
      console.log(`updated: ${path.relative(repoRoot, filePath)} -> ${result.date}`);
    } else {
      skippedCount += 1;
    }
  }

  console.log(`\nDone. Updated ${updatedCount} file(s), skipped ${skippedCount} file(s).`);
}

main();
