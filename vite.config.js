// Importing the defineConfig function from Vite to define the configuration
import { defineConfig } from 'vite';

// Importing the React plugin for Vite
import react from '@vitejs/plugin-react';

// Exporting the Vite configuration
export default defineConfig({
  // Adding the React plugin to the Vite configuration
  plugins: [react()],
});
