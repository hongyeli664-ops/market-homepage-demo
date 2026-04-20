import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "ios >= 11", "safari >= 11", "not IE 11"],
      renderLegacyChunks: true,
      modernPolyfills: true
    })
  ]
});
