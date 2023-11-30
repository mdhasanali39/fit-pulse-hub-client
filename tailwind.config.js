/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "primary-bg": "#232324",
        "action-bg":"#E4B802"
      },
      colors:{
        "action-text":"#E4B802",
        "black-text":"#232324"
      }, 
      fontFamily:{
        "Roboto-condensed": "'Roboto Condensed', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

