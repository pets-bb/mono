import { URLSearchParams } from 'url'

export const qs = <T extends { [key: string]: string }>(
  query: T,
  ...array: [string, string][]
) =>
  new URLSearchParams(
    array ? [...Object.entries(query), ...array] : Object.entries(query),
  )

export default qs
