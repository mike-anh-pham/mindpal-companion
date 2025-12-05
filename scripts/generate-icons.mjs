import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const iconsDir = join(rootDir, 'public', 'icons');

// Icon sizes to generate
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// SVG source for the icon
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6b9b7a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5b8a72;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#grad)"/>
  <g transform="translate(256, 256)">
    <path d="M-60,-80 C-90,-80 -110,-50 -110,-20 C-110,10 -90,35 -60,40 C-60,60 -40,80 -10,80 C20,80 40,60 40,35 C70,35 90,15 90,-15 C90,-45 70,-65 40,-70 C40,-95 20,-110 -10,-110 C-40,-110 -60,-95 -60,-80"
          fill="none" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0,30 C-15,15 -30,0 -30,-15 C-30,-30 -20,-40 -5,-40 C5,-40 10,-35 15,-25 C20,-35 25,-40 35,-40 C50,-40 60,-30 60,-15 C60,0 45,15 30,30 L15,45 Z"
          transform="translate(-15, 10) scale(0.6)"
          fill="white" opacity="0.9"/>
  </g>
</svg>`;

// Maskable icon SVG (with safe zone padding)
const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6b9b7a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5b8a72;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#grad)"/>
  <g transform="translate(256, 256) scale(0.7)">
    <path d="M-60,-80 C-90,-80 -110,-50 -110,-20 C-110,10 -90,35 -60,40 C-60,60 -40,80 -10,80 C20,80 40,60 40,35 C70,35 90,15 90,-15 C90,-45 70,-65 40,-70 C40,-95 20,-110 -10,-110 C-40,-110 -60,-95 -60,-80"
          fill="none" stroke="white" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0,30 C-15,15 -30,0 -30,-15 C-30,-30 -20,-40 -5,-40 C5,-40 10,-35 15,-25 C20,-35 25,-40 35,-40 C50,-40 60,-30 60,-15 C60,0 45,15 30,30 L15,45 Z"
          transform="translate(-15, 10) scale(0.6)"
          fill="white" opacity="0.9"/>
  </g>
</svg>`;

async function generateIcons() {
  console.log('Generating PWA icons...');

  await mkdir(iconsDir, { recursive: true });

  // Generate regular icons
  for (const size of sizes) {
    const buffer = Buffer.from(iconSvg);
    await sharp(buffer)
      .resize(size, size)
      .png()
      .toFile(join(iconsDir, `icon-${size}x${size}.png`));
    console.log(`Generated icon-${size}x${size}.png`);
  }

  // Generate maskable icons
  for (const size of [192, 512]) {
    const buffer = Buffer.from(maskableSvg);
    await sharp(buffer)
      .resize(size, size)
      .png()
      .toFile(join(iconsDir, `icon-maskable-${size}x${size}.png`));
    console.log(`Generated icon-maskable-${size}x${size}.png`);
  }

  // Generate Apple touch icon (180x180)
  const appleBuffer = Buffer.from(iconSvg);
  await sharp(appleBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(iconsDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // Generate favicon sizes
  const faviconBuffer = Buffer.from(iconSvg);
  await sharp(faviconBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(iconsDir, 'favicon-32x32.png'));
  console.log('Generated favicon-32x32.png');

  await sharp(faviconBuffer)
    .resize(16, 16)
    .png()
    .toFile(join(iconsDir, 'favicon-16x16.png'));
  console.log('Generated favicon-16x16.png');

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
