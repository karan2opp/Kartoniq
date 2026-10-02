import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Generate Master SVG Icon (Matching top-left logo: #291D11 rounded container with #D4BEA1 package icon)
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="112" fill="#291D11" />
  <g transform="translate(96, 96) scale(13.333)" stroke="#D4BEA1" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="m7.5 4.27 9 5.15"/>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
console.log('Saved favicon.svg');

// 2. Generate PNG sizes for Google Search, browsers, and mobile devices
async function generatePngs() {
  const svgBuffer = Buffer.from(svgContent);

  // Google Search requirement: multiple of 48px square
  await sharp(svgBuffer).resize(48, 48).png().toFile(path.join(publicDir, 'favicon-48x48.png'));
  await sharp(svgBuffer).resize(96, 96).png().toFile(path.join(publicDir, 'favicon-96x96.png'));
  await sharp(svgBuffer).resize(144, 144).png().toFile(path.join(publicDir, 'favicon-144x144.png'));
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(svgBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  
  // Also write favicon.ico from 32x32 png
  fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));

  console.log('Generated all favicon PNGs');

  // 3. Generate High-Fidelity OpenGraph Image (1200x630)
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FAF7F2" />
        <stop offset="100%" stop-color="#EEDFCD" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)" />
    
    <!-- Top-left style logo mark container -->
    <rect x="100" y="90" width="100" height="100" rx="24" fill="#291D11" />
    <g transform="translate(118, 108) scale(2.666)" stroke="#D4BEA1" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="m7.5 4.27 9 5.15"/>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </g>

    <text x="225" y="150" font-family="Plus Jakarta Sans, sans-serif" font-weight="900" font-size="52" fill="#291D11" letter-spacing="-1">KARTONIQ</text>
    <text x="228" y="180" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="16" fill="#7F613D" letter-spacing="3">NOIDA &amp; GREATER NOIDA</text>

    <!-- Main Headline -->
    <text x="100" y="285" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="44" fill="#291D11">Moving House in Noida?</text>
    <text x="100" y="340" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="44" fill="#25D366">Heavy-Duty Moving Cartons &amp; Packing Supplies</text>

    <text x="100" y="410" font-family="Plus Jakarta Sans, sans-serif" font-weight="500" font-size="24" fill="#61482D">Delivered to your doorstep next day. Clean, fresh, 3-ply &amp; 5-ply cartons.</text>
    <text x="100" y="445" font-family="Plus Jakarta Sans, sans-serif" font-weight="500" font-size="24" fill="#61482D">Cartons from ₹69 • Sealing Tape ₹69 • Bubble Wrap ₹19/meter</text>

    <!-- Badges -->
    <rect x="100" y="495" width="270" height="52" rx="14" fill="#291D11" />
    <text x="130" y="528" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="19" fill="#FAF7F2">Free Delivery (₹999+)</text>

    <rect x="390" y="495" width="310" height="52" rx="14" fill="#25D366" />
    <text x="415" y="528" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="19" fill="#FFFFFF">WhatsApp: +91 98381 10645</text>
  </svg>`;

  await sharp(Buffer.from(ogSvg)).png().toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png');
}

generatePngs().catch(console.error);
