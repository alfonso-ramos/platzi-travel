/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('/img/sanFrancisco.webp')",
        'sanFranciscoDesktop': "url('/img/sanFranciscoDesktop.webp')",
        'yosemite': "url('/img/yosemite.webp')",
        'LA': "url('/img/la.webp')",
        'seattle': "url('/img/seattle.webp')",
        'new_york': "url('/img/new-york.webp')",
        'norway': "url('/img/norway.webp')",
        'sydney': "url('/img/sydney.webp')",
        'miami': "url('/img/miami.webp')",
        'switerland': "url('/img/switzerland.webp')",
        'bali': "url('/img/bali.webp')",
        'chicago': "url('/img/chicago.webp')",
        'europe': "url('/img/europe.webp')",
        'iceland': "url('/img/iceland.webp')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':'#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor: {
        'primary':'#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily: {
        'Montserrat': ["Montserrat", "sans-serif"]
      }
    },
    variants: {
      width: ['responsive', 'hover', 'focus'],
      extends: {

      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide')
  ],
}
