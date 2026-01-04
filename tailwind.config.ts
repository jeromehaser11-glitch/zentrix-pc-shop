import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}"],
  theme: { extend: { colors: { bg:"#020617", card:"#020617", accent:"#06b6d4" }}},
  plugins: []
};
export default config;