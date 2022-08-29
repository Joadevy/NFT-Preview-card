/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    fontSize: {
      'base': '18px'
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'soft-blue': {
          DEFAULT: 'hsl(215, 51%, 70%)',
        },
        'light-blue':{
          DEFAULT: 'hsl(178, 100%, 50%)'
        },
        'dark-blue' : {
          '50': 'hsl(215, 32%, 27%)',
          '100': 'hsl(216, 50%, 16%)',
          '200': 'hsl(217, 54%, 11%)'
        },
        'white' : {
          DEFAULT: 'hsl(0, 0%, 100%)'
        }
      }
    },
  },
  plugins: [],
}

// - Soft blue: hsl(215, 51%, 70%)
// - Cyan: hsl(178, 100%, 50%)
// - Very dark blue (main BG): hsl(217, 54%, 11%)
// - Very dark blue (card BG): hsl(216, 50%, 16%)
// - Very dark blue (line): hsl(215, 32%, 27%)
// - White: hsl(0, 0%, 100%)
