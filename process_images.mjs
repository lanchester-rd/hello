import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = '/Users/tdr/Documents/GitHub/hello/public/images/highres';
const outputDir = '/Users/tdr/Documents/GitHub/hello/public/images/portfolio';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

async function processImages() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    
    // Extract base name, removing any existing _hero suffix
    let baseName = path.parse(file).name;
    baseName = baseName.replace(/_(hero|thumbnail|cover)$/, '');

    console.log(`Processing ${baseName}...`);

    // We use WebP for high quality and fast loading
    const formatOpts = { quality: 80, effort: 6 };

    try {
      // _hero variant (1920px width)
      await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp(formatOpts)
        .toFile(path.join(outputDir, `${baseName}_hero.webp`));

      // _cover variant (800px width)
      await sharp(inputPath)
        .resize({ width: 800, withoutEnlargement: true })
        .webp(formatOpts)
        .toFile(path.join(outputDir, `${baseName}_cover.webp`));

      // _thumbnail variant (400px width)
      await sharp(inputPath)
        .resize({ width: 400, withoutEnlargement: true })
        .webp(formatOpts)
        .toFile(path.join(outputDir, `${baseName}_thumbnail.webp`));
    } catch (e) {
      console.error(`Failed to process ${file}:`, e);
    }
  }
  console.log('All images processed successfully.');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
