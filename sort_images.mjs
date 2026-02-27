import fs from 'fs';
import path from 'path';

const portfolioDir = '/Users/tdr/Documents/GitHub/hello/public/images/portfolio';

const files = fs.readdirSync(portfolioDir).filter(f => f.endsWith('.webp'));

for (const file of files) {
    // Extract base name
    const match = file.match(/^(.*)_(hero|cover|thumbnail)\.webp$/);
    if (match) {
        const baseName = match[1];
        const targetFolder = path.join(portfolioDir, baseName);

        // Check if there is an exact match for folder
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder, { recursive: true });
        }

        fs.renameSync(path.join(portfolioDir, file), path.join(targetFolder, file));
        console.log(`Moved ${file} to ${baseName}/`);
    }
}
