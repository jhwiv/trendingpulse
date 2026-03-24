import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Static build config for GitHub Pages deployment (no backend)
export default defineConfig({
  plugins: [react()],
  base: "/trendingpulse/",
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "gh-pages"),
    emptyDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/static-index.html"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
});
