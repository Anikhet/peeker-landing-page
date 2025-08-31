const fs = require('fs');
const path = require('path');

// Function to optimize SVG content
function optimizeSVG(content) {
  // Remove comments
  content = content.replace(/<!--[\s\S]*?-->/g, '');
  
  // Remove unnecessary whitespace
  content = content.replace(/\s+/g, ' ');
  content = content.replace(/>\s+</g, '><');
  
  // Remove empty lines
  content = content.replace(/\n\s*\n/g, '\n');
  
  // Remove trailing whitespace
  content = content.trim();
  
  return content;
}

// Function to process SVG files
function processSVGFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const originalSize = Buffer.byteLength(content, 'utf8');
    
    const optimized = optimizeSVG(content);
    const optimizedSize = Buffer.byteLength(optimized, 'utf8');
    
    // Only write if we actually reduced size
    if (optimizedSize < originalSize) {
      fs.writeFileSync(filePath, optimized, 'utf8');
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      console.log(`✅ ${path.basename(filePath)}: ${originalSize}B → ${optimizedSize}B (${savings}% saved)`);
    } else {
      console.log(`⏭️  ${path.basename(filePath)}: Already optimized (${originalSize}B)`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Function to find all SVG files recursively
function findSVGFiles(dir) {
  const files = [];
  
  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (item.endsWith('.svg')) {
        files.push(fullPath);
      }
    }
  }
  
  scan(dir);
  return files;
}

// Main execution
console.log('🚀 Starting SVG optimization...\n');

const publicDir = path.join(__dirname, '..', 'public');
const svgFiles = findSVGFiles(publicDir);

console.log(`Found ${svgFiles.length} SVG files to process:\n`);

let totalOriginalSize = 0;
let totalOptimizedSize = 0;

for (const filePath of svgFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const originalSize = Buffer.byteLength(content, 'utf8');
  
  processSVGFile(filePath);
  
  const optimizedContent = fs.readFileSync(filePath, 'utf8');
  const optimizedSize = Buffer.byteLength(optimizedContent, 'utf8');
  
  totalOriginalSize += originalSize;
  totalOptimizedSize += optimizedSize;
}

const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);

console.log(`\n🎯 Optimization complete!`);
console.log(`📊 Total size: ${(totalOriginalSize / 1024).toFixed(1)}KB → ${(totalOptimizedSize / 1024).toFixed(1)}KB`);
console.log(`💾 Total savings: ${totalSavings}% (${(totalOriginalSize - totalOptimizedSize).toFixed(0)}B)`);
