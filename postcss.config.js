module.exports = {
  pulgins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore', 'tab-bar'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/node_modules/, /TabBar/]
    }
  }
}
