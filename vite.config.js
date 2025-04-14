import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct path resolution for Vercel deployment
  build: {
    outDir: "dist", // Default output directory, explicit for clarity
    assetsDir: "assets", // Optional: Organizes static assets
    sourcemap: false, // Disable sourcemaps in production to reduce size (optional)
  },
});