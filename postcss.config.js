import tailwindcss from '@tailwindcss/postcss'; // Import the new package
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss, // Use the new package
    autoprefixer,
  ],
};