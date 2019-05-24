const path = require('path')

const { NODE_ENV } = process.env
const isDev = !NODE_ENV || NODE_ENV === 'development'

module.exports = api => {
  api.cache(true)

  // adapt this to your setup
  const presets = ['next/babel', '@zeit/next-typescript/babel']

  return {
    presets,
    plugins: [['styled-components', { ssr: isDev }], 'macros', 'ts-optchain'],
  }
}
