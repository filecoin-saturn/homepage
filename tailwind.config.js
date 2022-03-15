module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-logo': "url('/nav-logo.svg')",
        'nav-menu': "url('/nav-menu.svg')",
      },
    fontFamily: {
      "roboto": ['"Roboto"', 'Arial', 'sans-serif'],
      "inter": ['"Inter"', 'Arial', 'sans-serif'],
      "source-serif-pro": ['"Source Serif Pro"', 'Arial', 'sans-serif'],



    },


    },
  },
  plugins: [],
}
