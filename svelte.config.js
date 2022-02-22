import adapter from "@sveltejs/adapter-auto";
import { algoliaConfig } from "./src/lib/algoliaConfig.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
};

if (process.env.NODE_ENV === `production`) {
  const { indexAlgolia } = await import(`svelte-algolia/server-side`);
  await indexAlgolia(algoliaConfig);
}

export default config;
