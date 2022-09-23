/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    borderWidth: {
      1: '1px',
      2: '2px',
      3: '3px',
    },
    extend: {
      colors: {
        primary: '#176db7',
      },
    },
  },
  plugins: [],
};
