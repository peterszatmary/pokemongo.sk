/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        poke: {
          red: '#EE1515',
          'red-dark': '#C00D0D',
          yellow: '#FFCB05',
          'yellow-dark': '#C7A008',
          blue: '#2A75BB',
          'blue-dark': '#1C4B82',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
