// Importing the defineConfig function from Vitest to define the configuration
import { defineConfig } from 'vitest/config';

// Importing the React plugin for Vite
import react from '@vitejs/plugin-react';

// Exporting the Vitest configuration
export default defineConfig({
  // Adding the React plugin to the Vite configuration
  plugins: [react()],
  test: {
    // Setting the test environment to 'jsdom' for DOM-related testing
    environment: 'jsdom',
    // Specifying a setup file to configure the testing environment
    setupFiles: './vitest.setup.js',
    // Enabling global variables for tests
    globals: true
  }
});
