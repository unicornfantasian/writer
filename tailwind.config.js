/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Overused Grotesk', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

