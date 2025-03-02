import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: "#afa18f",
        textprimary: '#ffff'
      },
      fontFamily: {
        avantGarde: ["Avant Garde Book BT", "sans-serif"],
      },
      backgroundColor: {
        bgbrown: "#afa18f",
        primary: '#ec4e39'
      }
    },
  },
  plugins: [],
  corePlugins: {
    backdropFilter: true,
  },
} satisfies Config;
