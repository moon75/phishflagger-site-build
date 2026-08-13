import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.docx"],
  server: {
    port: 5173,
    open: false,
    watch: {
      // Large video assets can get locked by other processes (OneDrive,
      // media players, AV scans) on Windows, which crashes Vite's watcher.
      ignored: ["**/public/assets/video1/**"],
    },
  },
});
