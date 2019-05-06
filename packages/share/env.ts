import is from './is'

const Global = (1, eval)('this') // eslint-disable-line no-eval

const isBrowser = is.document(Global.document)
const isNode = is.process(Global.process)

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'
const isProd = env === 'production'

export default env

export { isDev, isProd, isBrowser, isNode }
