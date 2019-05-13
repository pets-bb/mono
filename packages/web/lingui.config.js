const rootBabelConf = require('../../babel.config')

module.exports = {
  compileNamespace: 'es',
  sourceLocale: 'en',
  srcPathDirs: ['./pages/', './components/'],

  extractBabelOptions: {
    rootMode: 'upward',
  },
}
