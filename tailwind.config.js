module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blueTwitter: {
        DEFAULT: '#1DA1F2',
        light: 'rgba(29, 161, 242, 0.5)'
      },
      grey: {
        DEFAULT: '#B0B0B0',
        light: 'rgba(176, 176, 176, 0.7)'
      },
      white: '#fff',
      black: '#1A202C'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
