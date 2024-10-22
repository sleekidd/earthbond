/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
      boxShadow: {
        'custom': '0 8px 20px 0 rgba(0, 0, 0, 0.05)', // Custom shadow definition
      },
      fontFamily: {
        'monasans': ['Mona-Sans', 'sans-serif'], // Local or web-hosted font
        'onest': ['Onest', 'sans-serif'],
      },
    },
  },
  plugins: [],
}