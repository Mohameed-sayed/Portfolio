/**
 * This script helps set up the IEEE gallery by:
 * 1. Creating the necessary directory structure
 * 2. Updating the page.tsx file to use the actual images
 * 
 * To use this script:
 * 1. First, manually copy your IEEE images to public/images/ieee/
 * 2. Run: node scripts/setup-ieee-gallery.js
 */

const fs = require('fs');
const path = require('path');

// Directory where IEEE images should be placed
const ieeeImagesDir = path.join(process.cwd(), 'public', 'images', 'ieee');

// Create the directory if it doesn't exist
if (!fs.existsSync(ieeeImagesDir)) {
  console.log(`Creating directory: ${ieeeImagesDir}`);
  fs.mkdirSync(ieeeImagesDir, { recursive: true });
  console.log('Directory created successfully.');
} else {
  console.log(`Directory already exists: ${ieeeImagesDir}`);
}

// Check if there are any images in the directory
const imageFiles = fs.readdirSync(ieeeImagesDir)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
  });

if (imageFiles.length === 0) {
  console.log('No image files found in the IEEE images directory.');
  console.log(`Please copy your IEEE images to: ${ieeeImagesDir}`);
  console.log('Then run this script again.');
  process.exit(0);
}

// Generate the image paths for the gallery
const imagePaths = imageFiles.map(file => `/images/ieee/${file}`);

// Update the page.tsx file to use the actual images
const pagePath = path.join(process.cwd(), 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Find the IEEE gallery section and update it
const galleryPattern = /<ImageGallery\s+title="IEEE Gallery"\s+placeholderCount=\{6\}\s+\/>/;
const updatedGallery = `<ImageGallery 
                  title="IEEE Gallery"
                  images={[
                    ${imagePaths.map(path => `'${path}'`).join(',\n                    ')}
                  ]}
                />`;

pageContent = pageContent.replace(galleryPattern, updatedGallery);

// Write the updated content back to the file
fs.writeFileSync(pagePath, pageContent);

console.log(`Found ${imageFiles.length} images and updated the gallery in page.tsx.`);
console.log('IEEE gallery setup complete!');
