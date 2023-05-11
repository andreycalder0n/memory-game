/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const CardAnimation = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)'
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d'
    },
    '.perspective': {
      perspective: '1000px'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    }
  })
})

const NavActive = plugin(function ({ addUtilities }) {
  addUtilities({
    '.active': {
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: '#000',
      textDecorationThickness: '2px',
      '&:hover': {
        textDecorationColor: '#ffff'
      },
      textUnderlineOffset: '4px'
    }
  })
})

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        Edu: ['Edu NSW ACT Foundation', 'cursive']
      },
      colors: {
        primary: '#090030',
        secondary: '#ffff'
      },
      textColor: {
        primary: '#090030',
        secondary: '#ffff'
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
        'secondary-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
        'modal-gradient': 'linear-gradient(to top, #ffa366 0%, #f4cda5 100%)',
        'card-gradient': 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)'
      }
    }
  },
  plugins: [
    CardAnimation, NavActive
  ]
}
