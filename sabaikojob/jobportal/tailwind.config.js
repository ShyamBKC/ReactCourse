import PreviousMap from 'postcss/lib/previous-map';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "red"
      },

      screens: {
        xs: "480px"
      },
      fontSize: {
        xs: "10px"
      }
    },
  },
  plugins: [],
}