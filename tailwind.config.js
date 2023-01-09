/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main.handlebars"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080',
      xl: '1440'
    },
    extend: {
      colors:{ 
        royalPurple: "#3730a3"
       
        darkRed:"#aa2f2f"

      }
    },
  },
  plugins: [],
}
