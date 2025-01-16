import { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    darkMode: ["class", '[data-mode="light"]'], // darkMode configuration
    extend: {},
  },
  plugins: [],
};

export default config;
