/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html,js'],
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
        royalGrey:   ""

      }
    },
  },
  plugins: [],
}
