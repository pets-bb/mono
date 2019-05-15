const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.tsx?$/,
        include: undefined,
        use: [options.defaultLoaders.babel],
      },
      {
        test: /(\.po|messages\.json)$/,
        use: '@lingui/loader',
      },
    )

    config.module.rules.forEach(rule => {
      if (rule.use.options) {
        rule.use.options.rootMode = 'upward'
      }
    })

    return config
  },
})
