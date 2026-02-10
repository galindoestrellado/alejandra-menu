import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANTE:
// Si tu repo NO se llama "alejandra-menu", cambia este base por: "/NOMBRE-DEL-REPO/"
export default defineConfig({
  plugins: [react()],
  base: "/alejandra-menu/",
});
