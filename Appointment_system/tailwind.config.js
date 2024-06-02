/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"0067F",
        yellowColor:"#FEB60D",
        purpleColor:"#9771FF",
        IrisBlue:"#01B5C5",
        headingColor:"#181A1E",
        textColor:"#4E545F"
      }
    },
  },
  plugins: [],
}

