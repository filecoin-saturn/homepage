module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-logo': "url('/nav-logo.svg')",
        'nav-menu': "url('/nav-open-menu.svg')",
        'menu-cross': "url('/menu-cross.svg')",
        'filecoin-logo': "url('/filecoin-logo.svg')",
        'protocol-labs-logo': "url('/protocol-labs.svg')",



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
