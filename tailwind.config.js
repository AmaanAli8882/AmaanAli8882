/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],   
  theme: {
    extend: {
      container:{
        center:true,
      },
      screens:{
      }
    },
  },
  plugins: [],
}