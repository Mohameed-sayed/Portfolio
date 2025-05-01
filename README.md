# Portfolio Website

A personal portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Dark/light mode
- Interactive components
- Project showcase
- Image gallery for IEEE volunteer section

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Setting Up the IEEE Gallery

To set up the IEEE gallery with your own images:

### Method 1: Using the Setup Script (Recommended)

1. Manually copy your IEEE images to:

   ```
   public/images/ieee/
   ```

2. Run the setup script:

   ```bash
   node scripts/setup-ieee-gallery.js
   ```

3. The script will automatically update the gallery to use your images.

### Method 2: Manual Copy

1. Run the PowerShell script to copy your images:

   ```bash
   .\copy-images.ps1
   ```

   This will copy images from `C:\Users\COMPUMARTS\Downloads\pic` to `public/images/ieee/`.

2. Then run the setup script:
   ```bash
   node scripts/setup-ieee-gallery.js
   ```

### Troubleshooting

If you're having issues with the images:

1. Make sure your images are valid image files (JPG, PNG, etc.)
2. Check that they're in the correct directory: `public/images/ieee/`
3. Restart the development server after adding images

## Technologies Used

- Next.js
- React
- Tailwind CSS
- TypeScript

## Configuration Files

This project includes several configuration files to ensure code quality and consistent formatting:

- `.eslintrc.js` - ESLint configuration for code linting
- `.prettierrc` - Prettier configuration for code formatting
- `.babelrc` - Babel configuration for JavaScript transpilation
- `next.config.js` - Next.js configuration with optimized settings
- `postcss.config.js` - PostCSS configuration for Tailwind CSS
- `tsconfig.json` - TypeScript compiler options
- `vercel.json` - Vercel deployment configuration
- `.npmrc` - NPM configuration for handling dependencies

## Development Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues
- `npm run format` - Run Prettier to format code

## Troubleshooting

If you encounter any issues running the project:

1. **Dependency Issues**: Use the `--legacy-peer-deps` flag when installing dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

2. **Build Errors**: Clear the Next.js cache and node_modules:

   ```bash
   rm -rf .next
   rm -rf node_modules
   npm install --legacy-peer-deps
   ```

3. **Font Loading Issues**: The project uses system fonts to avoid SWC/Babel conflicts.

4. **CSS Optimization**: CSS optimization is disabled to prevent issues with the Critters module.
