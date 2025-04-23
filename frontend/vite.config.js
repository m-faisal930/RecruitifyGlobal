import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        work: ['"Work Sans"', 'sans-serif'],
      },

    },
  },
  plugins: [react(), tailwindcss()],
});
