module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    zIndex: {
      '-10': '-10',
    },
    extend: {
      colors: {
        'accent-1': '#333',
      },
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
    }
    },
  },
  variants: {},
  plugins: [],
}