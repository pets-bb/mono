const rootBabelConf = require('../../babel.config')

module.exports = {
  sourceLocale: 'en',
  srcPathDirs: ['./pages/', './components/'],

  extractBabelOptions: {
    rootMode: 'upward',
  },
  format: 'po',
}
