import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/password-generator-/", // Make sure this exactly matches your repo name
});
