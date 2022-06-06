module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['"Inter"', 'Arial', 'sans-serif'],
        "source-serif-pro": ['"Source Serif Pro"', 'Arial', 'sans-serif'],
      },
      colors: {
        'sat-blue-1': '#0090FF',
        'sat-gradient-blue-1': ' rgb(0, 144, 255, 0.3)',
        'sat-blue-2': '#162653',
        'sat-blue-3': '#253460',
        'sat-blue-4': '#153A73',
        'sat-green-1': '#39C1CB',
        'sat-gradient-green-1': ' rgb(57, 193, 203, 0.3)',
        'sat-red-1': '#FF0000',
        'sat-grey-1': '#CCD0DF',
        'sat-grey-2': '#8B93A9',
      },
      backgroundImage: {
        'saturn-logo': "url('/saturn-logo.svg')",
        'star-background-plain': "url('/star-background-plain.png')",
        'mobile-background': "url('/mobile-background.png')",
        'desktop-background': "url('/desktop-background.png')",
        'inner-menu-button': "url('/inner-menu-button.svg')",
        'outer-menu-button': "url('/outer-menu-button.svg')",
        'inner-menu-button-hover': "url('/inner-menu-button-hover.svg')",
        'outer-menu-button-hover': "url('/outer-menu-button-hover.svg')",
        'outer-menu-button-focus': "url('/outer-menu-button-focus.svg')",
        'notion-logo': "url('/notion-logo.svg')",
        'github-logo': "url('/github-logo.svg')",
        'slack-logo': "url('/slack-logo.svg')",
        'heart-logo': "url('/heart-logo.svg')",
        'lightning-logo': "url('/lightning-logo.svg')",
        'multi-peer-logo': "url('/multi-peer-logo.svg')",
        'permissionless-logo': "url('/permissionless-logo.svg')",
        'deduplication-logo': "url('/deduplication-logo.svg')",
        'data-logo': "url('/data-logo.svg')",
        'crypto-logo': "url('/crypto-logo.svg')",
        'content-addressed-logo': "url('/content-addressed-logo.svg')",




      }, 
      boxShadow: {
        'colored': '0 0 40px #0090FF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}