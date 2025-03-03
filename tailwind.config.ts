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
        shadow: '#1C1917',
        textprimary: '#ffff'
      },
      fontFamily: {
        avantGarde: ["Avant Garde Book BT", "sans-serif"],
      },
      backgroundColor: {
        bgbrown: "#afa18f",
        shadow: '#1C1917',
        primary: '#ec4e39'
      },
      boxShadow: {
        customStack: '6px 6px 0 1px #1d1e30',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  corePlugins: {
    backdropFilter: true,
  },
} satisfies Config;
