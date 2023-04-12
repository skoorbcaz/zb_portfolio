// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'
const theme = {
  colors: {
    brand: {
      500: '#DCFF7D',
    },
  },
  fonts: {
    heading: `Raleway, sans-serif`,
    body: `'Avenir', sans-serif`,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
}

export default extendTheme(theme)
