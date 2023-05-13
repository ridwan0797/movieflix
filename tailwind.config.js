// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '300': '300px',
        '700': '700px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}