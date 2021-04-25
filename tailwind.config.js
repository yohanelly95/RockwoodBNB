module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
      },
      zIndex: {
        '-10': '-10',
      },
      width: {
        '96': '24rem',
        '128': '32rem',
      },
      backgroundImage: theme => ({
        'homepage-hero': "url('../public/assets/img/bg.jpg')"
      })
    }
  },
  variants: {},
  plugins: [],
};
