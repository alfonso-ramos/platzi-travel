/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('/img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('/img/yosemite.jpg')",
        'LA': "url('/img/LA.jpg')",
        'seattle': "url('/img/seattle.jpg')",
        'new_york': "url('/img/new_york.jpg')",
        'norway': "url('/img/norway.jpg')",
        'sydney': "url('/img/sydney.jpg')",
        'miami': "url('/img/miami.jpg')",
        'switerland': "url('/img/switzerland.jpg')",
        'bali': "url('/img/bali.jpg')",
        'chicago': "url('/img/chicago.jpg')",
        'europe': "url('/img/europe.jpg')",
        'iceland': "url('/img/iceland.jpg')",
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
