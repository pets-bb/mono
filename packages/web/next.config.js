const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  webpack(config, options) {
    config.module.rules.forEach(rule => {
      rule.use.options.rootMode = 'upward'
      const ruleContainsTs = rule.test.toString().includes('ts|tsx')
      if (
        ruleContainsTs &&
        rule.use &&
        rule.use.loader === 'next-babel-loader'
      ) {
        rule.include = undefined
      }
    })

    return config
  },
})
