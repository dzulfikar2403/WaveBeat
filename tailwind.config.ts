import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'infinite-scroll': {
          "0%": {transform: 'translateX(0%)'},
          "100%": {transform: 'translateX(-200%)'},
        },
        'fade-top': {
          "0%": {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          "100%": {
            opacity: '1',
            transform: 'translateY(0%)'
          },
        }
      },
      animation:{
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'fade-top': 'fade-top 1s ease-in-out forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

