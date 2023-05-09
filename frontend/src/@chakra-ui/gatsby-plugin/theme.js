// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'
const theme = {
  colors: {
    brand: {
      200: '#d8e0ba',
      500: '#DCFF7D',
    },
    gray: {
      100: '#F7FAFC',
      200: '#EDF2F7',
      300: '#E2E8F0',
      400: '#CBD5E0',
      500: '#A0AEC0',
      600: '#718096',
      700: '#3f3f40',
      800: '#1e1e1e',
      900: '#141414',
    },
  },
  fonts: {
    heading: `Raleway, sans-serif`,
    body: `'Avenir Next', sans-serif`,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
}

export default extendTheme(theme)
