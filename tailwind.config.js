/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#222222',
        'secondary': '#161513',
        'secondary-text': '#c5c5c5'
      }
    },
  },
  plugins: [],
}