/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./public/img/sanFrancisco.jpg)",
        'sanFranciscoDesktop': "url('./public/img/sanFranciscoDesktop.jpg)",
        'yosemite': "url('./public/img/yosemite.jpg.jpg)",
        'LA': "url('./public/img/LA.jpg)",
        'seattle': "url('./public/img/seattle.jpg.jpg)",
        'new_york': "url('./public/img/new_york.jpg.jpg.jpg)",
        'norway': "url('./public/img/norway.jpg.jpg.jpg)",
        'sydney': "url('./public/img/sydney.jpg.jpg.jpg)",
        'miami': "url('./public/img/miami.jpg.jpg)",
        'switerland': "url('./public/img/switzerland.jpg.jpg.jpg)",
        'bali': "url('./public/img/bali.jpg.jpg)",
        'chicago': "url('./public/img/chicago.jpg.jpg)",
        'europe': "url('./public/img/europe.jpg.jpg)",
        'iceland': "url('./public/img/iceland.jpg.jpg)",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':'#CC2D4A',
        'secundary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor: {
        'primary':'#CC2D4A',
        'secundary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
