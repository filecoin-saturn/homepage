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
        'card-logo-gateway': "url('/card-logo-gateway.png')",
        'card-logo-station': "url('/card-logo-station.png')",
        'gradient-background-learn': "url('/learn-more-button.svg')",
        'learn-more-button': "url('/learn-more-button.svg')",
        'filecoin-saturn-border': "url('/filecoin-saturn-border.svg')",
        'icon-border': "url('/icon-border.svg')",
        'nav-link-background': "url('/nav-link-background.svg')",





      },

      colors: {
        'gradient-turqouise': '#39C0CC',
        'gradient-blue': '#078FFF',
        'regular-blue': '#0E67FF',
        'dark-blue': '#194FCA',
        'light-blue': '#0090FF',

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
