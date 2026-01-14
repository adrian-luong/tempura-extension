import { defineConfig } from 'wxt';
import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path"

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  srcDir: 'src',
  entrypointsDir: "entries",
  vite: () => ({
    plugins: [tailwindcss(), tsconfigPaths()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
});