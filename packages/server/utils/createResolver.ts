type GQLContext = {
  isAuth: boolean
}

type CreateResolver = <
  Args extends { [key: string]: string | number | boolean } = {}
>(
  func: (args: { args: Args; obj: any; ctx: GQLContext }) => any,
) => (obj: any, args: Args, ctx: GQLContext) => any

export const createResolver: CreateResolver = func => (obj, args, ctx) =>
  func({ obj, args, ctx })

export const createResolvers = (resolves: {
  [key: string]: (args: { args: any; obj: any; ctx: GQLContext }) => any
}) =>
  Object.entries(resolves).reduce((newResolves, [key, resolve]) => {
    return {
      ...newResolves,
      [key]: createResolver(resolve),
    }
  }, {})
