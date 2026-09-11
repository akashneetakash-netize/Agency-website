const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // Orange -> Blue Hex Colors
  { regex: /#FF5A00/gi, replace: '#2563EB' },
  { regex: /#FF3D00/gi, replace: '#1D4ED8' },
  { regex: /#FFB300/gi, replace: '#60A5FA' },
  { regex: /#FFA500/gi, replace: '#3B82F6' },
  { regex: /#FFA000/gi, replace: '#3B82F6' },
  { regex: /#FF7D00/gi, replace: '#3B82F6' },
  { regex: /#FF8F00/gi, replace: '#3B82F6' },
  { regex: /#f97316/gi, replace: '#2563EB' },
  
  // rgba replacements
  { regex: /rgba\(\s*255\s*,\s*90\s*,\s*0\s*,\s*([0-9.]+)\s*\)/g, replace: 'rgba(37, 99, 235, $1)' },
  { regex: /rgba\(\s*249\s*,\s*115\s*,\s*22\s*,\s*([0-9.]+)\s*\)/g, replace: 'rgba(37, 99, 235, $1)' },

  // Black backgrounds -> Light backgrounds
  { regex: /background:\s*#000000/gi, replace: 'background: #FFFFFF' },
  { regex: /background:\s*#050505/gi, replace: 'background: #F8FAFC' },
  { regex: /background-color:\s*#000000/gi, replace: 'background-color: #FFFFFF' },
  { regex: /background-color:\s*#050505/gi, replace: 'background-color: #F8FAFC' },
  { regex: /background:\s*#000;/gi, replace: 'background: #FFFFFF;' },
  { regex: /background:\s*#0a0a0a;/gi, replace: 'background: #F1F5F9;' },

  // White text -> Dark text
  { regex: /color:\s*#ffffff/gi, replace: 'color: #0F172A' },
  { regex: /color:\s*#fff;/gi, replace: 'color: #0F172A;' },
  
  // Muted text
  { regex: /color:\s*#94a3b8/gi, replace: 'color: #475569' },
  { regex: /color:\s*#a1a1aa/gi, replace: 'color: #475569' },
  { regex: /color:\s*#e2e8f0/gi, replace: 'color: #334155' },

  // SVG specific replacements for HeroVisual
  { regex: /fill="#ffffff"/gi, replace: 'fill="#0F172A"' },
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(srcDir);
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // We should NOT replace color: #ffffff to dark text in Button.module.css for the primary button
  if (file.includes('Button.module.css') || file.includes('Toast.module.css') || file.includes('TestimonialCard.module.css')) {
    // Only replace orange and backgrounds in Button, Toast, TestimonialCard (as they usually require white text for contrast on colored bg)
    let tempReplacements = replacements.filter(r => !r.regex.toString().includes('color:\\s*#ffffff') && !r.regex.toString().includes('color:\\s*#fff'));
    tempReplacements.forEach(r => {
      content = content.replace(r.regex, r.replace);
    });
  } else {
    replacements.forEach(r => {
      content = content.replace(r.regex, r.replace);
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
    changedFiles++;
  }
});

console.log(`\nSuccessfully updated ${changedFiles} files.`);
