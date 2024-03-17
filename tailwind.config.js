const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f4f4f4',
          200: '#eee',
          300: '#ccc',
          400: '#999',
          500: '#666',
          600: '#333',
        }
      }

    },
    container: {
      center: true,
    },
    fontSize: {
      sm: ['0.875rem', '1.3125rem' ],
      base: ['1rem', '1.5rem'],
      xl: ['1.25rem', '1.875rem'],
      '2xl':  ['1.5rem', '2.25rem'],
      '3xl':  ['1.75rem', '2.625rem'],
      '4xl': ['2rem', '3rem'],
      '5xl': ['2.25rem', '3.375rem']
    }
  },
  plugins: [],
}

