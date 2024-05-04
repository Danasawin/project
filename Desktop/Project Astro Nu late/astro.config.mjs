import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import db from "@astrojs/db";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), db(), mdx()],
  output: "server",
  module: {
    rules: [{
      test: /\.html$/i,
      loader: "html-loader"
    }]
  },
  adapter: vercel()
});