import is from './is'

const isBrowser = is.document(globalThis.document)
const isNode = is.process(globalThis.process)

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'
const isProd = env === 'production'

export default env

export { isDev, isProd, isBrowser, isNode }
