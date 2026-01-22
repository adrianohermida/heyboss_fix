// copy-assets.js
// Script to copy static assets to docs/assets for Vite static hosting

const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(child => {
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const srcAssets = path.join(__dirname, 'assets');
const destAssets = path.join(__dirname, 'docs', 'assets');
copyRecursiveSync(srcAssets, destAssets);

console.log('Assets copied to docs/assets');
