import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const repoName = 'Yamini_Portifolio';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});


