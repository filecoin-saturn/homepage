const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '485px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        "inter": ['"Inter"', 'Arial', 'sans-serif'],
        "source-serif-pro": ['"Source Serif Pro"', 'Arial', 'sans-serif'],
        "source-code-pro": ['"Source Code Pro"', 'Arial', 'sans-serif'],

      },
      colors: {
        'sat-blue-1': '#0090FF',
        'sat-blue-1-60-fallback-1': '#0A67BB',
        'sat-blue-2': '#162653',
        'sat-blue-3': '#0E67FF',
        'sat-blue-3-30-fallback-1': '#143679',
        'sat-blue-4': '#001324', //bg-star-image overlay blue colour
        'sat-blue-5': '#06213A',
        'sat-gray-1': '#CCD0DF',
        'sat-gray-2': '#8B93A9',
        'sat-green-1': '#39C1CB',
        'sat-white-5-fallback-1': '#25335E',
        'sat-white-10-fallback-1': '#323E68',
        'sat-white-20-fallback-1': '#465175',
        'sat-white-30-fallback-1': '#5D6785',
        'sat-white-10-fallback-2': '#232B3E',
        'sat-white-20-fallback-2': '#3B4153',
        'sat-white-30-fallback-2': '#535866',
      },
      backgroundImage: {
        // gradient colours 
        'unset': "unset;",
        'sat-grad-blue-green-1': "linear-gradient(90deg, #39C1CB 0%, #0090FF 100%);",
        'sat-grad-blue-green-1-10': "linear-gradient(90deg, rgba(57, 193, 203, 0.1) 0%, rgba(7, 143, 255, 0.1) 100%);",
        'sat-grad-blue-green-1-10-fallback-1': "linear-gradient(90deg, rgb(6, 37, 53) 0%, rgb(1, 32, 58) 100%);",
        'sat-grad-blue-green-1-10-fallback-2': "linear-gradient(90deg, rgb(6, 37, 53, 0.6) 0%, rgb(1, 32, 58, 0.6) 100%);",



        'sat-grad-blue-green-1-20': "linear-gradient(90deg, rgba(57, 193, 203, 0.2) 0%, rgba(7, 143, 255, 0.2) 100%)",
        'sat-grad-blue-green-1-30': "linear-gradient(90deg, rgba(57, 193, 203, 0.3) 0%, rgba(7, 143, 255, 0.3) 100%)",
        'sat-grad-blue-green-1-40': "linear-gradient(90deg, rgba(57, 193, 203, 0.4) 0%, rgba(7, 143, 255, 0.4) 100%)",
        'sat-grad-blue-green-1-20-fallback-1': "linear-gradient(90deg, #1D4469 0%, #143B74 100%)",
        'sat-grad-blue-green-1-20-fallback-2': "linear-gradient(90deg, #0C3646 0%, #022D50 100%)",
        'sat-grad-blue-green-1-30-fallback-2': "linear-gradient(90deg, #114656 0%, #023865 100%)",
        'sat-grad-blue-green-1-30-fallback-1': "linear-gradient(90deg, #114656 0%, #023865 100%)",
        'sat-grad-blue-green-1-40-fallback-1': "linear-gradient(90deg, #175969 0%, #05477D 100%)",
        'sat-grad-blue-green-2': "radial-gradient(63.44% 63.44% at 29.7% 70.3%, #0090FF 0%, #39C1CB 100%)",
        'sat-grad-blue-green-3': "radial-gradient(76.79% 76.79% at 89.29% 16.07%, #0090FF 0%, #39C1CB 100%)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'sat-grad-black-1': "linear-gradient( rgb(0, 19, 36, 1) 0%, rgb(0, 19, 36, 1) 30%, rgb(0, 19, 36, 0.1) 85%,  rgb(0, 19, 36, 0.1) 100%);",


        'saturn-logo': "url('/saturn-logo.svg')",
        'inner-menu-button': "url('/inner-menu-button.svg')",
        'outer-menu-button': "url('/outer-menu-button.svg')",
        'inner-menu-button-hover': "url('/inner-menu-button-hover.svg')",
        'outer-menu-button-hover': "url('/outer-menu-button-hover.svg')",
        'outer-menu-button-focus': "url('/outer-menu-button-focus.svg')",
        'notion-logo': "url('/notion-logo.svg')",
        'github-logo': "url('/github-logo.svg')",
        'slack-logo': "url('/slack-logo.svg')",
        'twitter-logo': "url('/twitter-logo.svg')",
        'heart-logo': "url('/heart-logo.svg')",
        'lightning-logo': "url('/lightning-logo.svg')",
        'multi-peer-logo': "url('/multi-peer-logo.svg')",
        'deduplication-logo': "url('/deduplication-logo.svg')",
        'serve-content-logo': "url('/serve-content-logo.svg')",
        'arrow-right': "url('/arrow-right.svg')",
        'backdropblur-ellipsis': "url('/backdropblur-ellipsis.svg')",
        'copy-button': "url('/copy-button.svg')",
        'check-icon': "url('/check-icon.svg')",
        'dummy-image': "url('/dummy-image.png')",
        'wide-arrow-icon-white': "url('/wide-arrow-icon-white.svg')",
        'wide-arrow-icon-green': "url('/wide-arrow-icon-green.svg')",
        'filecoin-bg-logo': "url('/filecoin-bg-logo.png')",


// 

      }, 
      boxShadow: {
        'colored': '0 0 40px #0090FF',
        'ellipse': '0 0 70px #0E67FF'
      },
      outlineStyle: {
        'auto': 'auto'
      },
      borderRadius: {
        '2.5xl': '20px'
      }
    },
  },

  plugins: [
    plugin(function({ addVariant })
     {
      addVariant('supports-blur', '@supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) and (not ( -moz-appearance:none ))')
    }),
    require('@tailwindcss/typography'),
  ]
}


