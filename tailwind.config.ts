import { FaLinesLeaning } from "react-icons/fa6";
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
        textprimary: '#ffff',
        // primary: '#4E5340',
        // primary: '#6B4E71',
        primary: '#9bf3f0',
        // primary: '#0081A7',
        // primary: '#ec4e39',
        // primary: '#ec4e39',
        // primary: '#ec4e39',
      },
      fontFamily: {
        avantGarde: ["Avant Garde Book BT", "sans-serif"],
      },
      backgroundColor: {
        bgbrown: "#afa18f",
        shadow: '#1C1917',
        primary: '#5efc8d'
      },
      boxShadow: {
        customStack: '6px 6px 0 1px #1d1e30',
      },
      scrollBehavior: ['smooth'],
      screens: {
        'xxs': '240px',
        'xs': '350px',
        's': '380px',
        'ss': '450px',
        'sss': '550px'
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  variants: {
    extend: {
      scrollBehavior: ['responsive'],
    },
  },
  corePlugins: {
    backdropFilter: true,
  },
} satisfies Config;
