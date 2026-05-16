import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F1ECE0",
          50: "#F8F4E8",
          100: "#F1ECE0",
          200: "#E6DEC8",
          300: "#D5C8A4",
        },
        forest: {
          DEFAULT: "#1F3D2B",
          900: "#142819",
          800: "#1F3D2B",
          700: "#2A4A30",
          500: "#3D6240",
        },
        terra: {
          DEFAULT: "#A65A3F",
          800: "#7E4128",
          700: "#8E4D33",
          500: "#A65A3F",
          300: "#C68A6F",
        },
        umber: {
          DEFAULT: "#3A2A1F",
          900: "#241710",
          700: "#3A2A1F",
          500: "#5C4736",
          300: "#8C7765",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Source Serif Pro"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.24em",
      },
    },
  },
  plugins: [],
};

export default config;
