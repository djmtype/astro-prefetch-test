import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-prefetch-test.netlify.app',
	// prefetch: true,
	trailingSlash: 'always',
	prefetch: true,
	integrations: [mdx(), sitemap()],
});
