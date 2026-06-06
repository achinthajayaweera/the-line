import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

function fixFile(filePath) {
  let content = readFileSync(filePath, "utf8");
  const original = content;
  content = content.replaceAll('src="/assets/videos/', 'src="/the-line/assets/videos/');
  if (content !== original) {
    writeFileSync(filePath, content, "utf8");
    console.log("Fixed:", filePath);
  }
}

function walkDir(dir) {
  for (const file of readdirSync(dir)) {
    const full = join(dir, file);
    if (statSync(full).isDirectory()) walkDir(full);
    else if (file.endsWith(".html") || file.endsWith(".txt")) fixFile(full);
  }
}

// Fix out/ folder
walkDir("./out");

// Also fix root HTML files
fixFile("./index.html");

console.log("Done fixing video paths.");