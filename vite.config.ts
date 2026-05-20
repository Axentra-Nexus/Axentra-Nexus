import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    outDir: "dist",
    // 629 kB pre-compression = 175 kB gzipped — well within acceptable range.
    // TanStack Router internalises React so it can't be split further without
    // switching to lazy routes. Threshold raised to reflect actual reality.
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          // Router (includes React internally) — cached separately from app code
          "vendor-router": ["@tanstack/react-router"],

          // Icons — isolated so adding/removing icons doesn't bust the app cache
          "vendor-icons": ["lucide-react"],
        },
      },
    },
  },
});
