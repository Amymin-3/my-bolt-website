/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFD700', // Example yellow, adjust as needed
        'brand-beige': '#F5F5DC', // Example beige
        'brand-brown': '#D2B48C', // Example light brown
        'brand-text': '#333333', // Dark text for readability
        'brand-bg': '#FFFFFF', // White background
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'], // Keep system fonts for broad compatibility
      },
    },
  },
  plugins: [],
}
