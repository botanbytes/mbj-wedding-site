#!/bin/bash

# Create React app
npx create-react-app frontend
cd frontend

# Install Tailwind CSS and PostCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Configure Tailwind to remove unused styles in production
echo "module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}" > tailwind.config.js

# Add Tailwind directives to the main CSS file
echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > src/index.css

echo "React and Tailwind CSS setup complete."
