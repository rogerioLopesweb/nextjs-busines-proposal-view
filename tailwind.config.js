/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple" : "#081A51",
        'light-white' : 'rgba(255,255,255,0.18)'
      }
    },
  },
  plugins: [],
}