// const rootBabelConf = require('../../babel.config')

const { PAGE } = process.env

module.exports = {
  compileNamespace: 'es',
  sourceLocale: 'en',
  srcPathDirs: PAGE ? [`./pages/${PAGE}`] : ['./pages/'],
  localeDir: PAGE ? `<rootDir>/pages/${PAGE}/locale` : 'locale',
  extractBabelOptions: {
    rootMode: 'upward',
  },
}
