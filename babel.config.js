const path = require('path')

const { NODE_ENV } = process.env
const isDev = !NODE_ENV || NODE_ENV === 'development'

module.exports = {
  exclude: [/node_modules/],
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [['styled-components', { ssr: isDev }], 'macros'],
}
