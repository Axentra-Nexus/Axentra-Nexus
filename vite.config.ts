import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — changes rarely, cached aggressively by browsers
          "vendor-react": ["react", "react-dom"],

          // Router — separate so page chunks don't bust the router cache
          "vendor-router": ["@tanstack/react-router"],

          // Icons — lucide is large; isolate it so app code changes don't re-download it
          "vendor-icons": ["lucide-react"],
        },
      },
    },
  },
});
