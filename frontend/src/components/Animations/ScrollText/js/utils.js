// Preload images
const preloadFonts = (id) => {
  const WebFont = require('webfontloader')
  return new Promise((resolve) => {
    WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    })
  })
}

export { preloadFonts }
