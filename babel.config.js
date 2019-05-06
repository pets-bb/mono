module.exports = {
  // babelrcRoots: ['.', 'packages/*'],
  exclude: [/node_modules/],
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [['styled-components', { ssr: true }]],
}
