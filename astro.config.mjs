import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://shiroe-gestor-contenidos-tarea2.netlify.app/',
  output: 'hybrid',
  integrations: [tailwind()]
});