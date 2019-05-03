import * as env from '../.env'

const exportEnv = Object.entries(env).reduce(
  (s, [ENV, value]) => `${s}export ${ENV}=${value}\n`,
  '',
)

console.log(exportEnv)
