module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blueTwitter: {
        DEFAULT: '#1DA1F2',
        light: 'rgba(29, 161, 242, 0.5)',
        lighter: 'rgba(29, 161, 242, 0.2)'
      },
      grey: {
        DEFAULT: '#B0B0B0',
        light: 'rgba(176, 176, 176, 0.7)'
      },
      black: {
        DEFAULT: '#1A202C',
        light: '#4A5568'
      },
      greenTwitter: {
        DEFAULT: 'rgb(0, 186, 124)',
        light: 'rgba(0, 186, 124, 0.2)'
      },
      redTwitter: {
        DEFAULT: 'rgb(249, 24, 128)',
        light: 'rgba(249, 24, 128, 0.2)',
      },
      white: '#fff',
      transparent: 'transparent',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
