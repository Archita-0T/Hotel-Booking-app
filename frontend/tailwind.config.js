/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing:{
        wider:'0.05rem',
        widest:'0.1rem'
      }
    },
    container:{
      padding : {
        md:"10rem",
      }
    }
  },
  plugins: [],
}

