import { ApolloClient, HttpLink, InMemoryCache, gql } from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { isBrowser } from '@pets-bb/share'

export * from 'apollo-boost'

const create = (initState = {}) =>
  new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: true,
    link: new HttpLink({
      uri: 'http://localhost:3001', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch,
    }),
    cache: new InMemoryCache().restore(initState),

    typeDefs: gql`
      extend type Query {
        isLogin: Boolean
      }
    `,

    resolvers: {
      Mutation: {
        switchLogin: (_, args, { cache }) => {},
      },
    },
  })

let apolloClient: ReturnType<typeof create>

const init = (initState = {}) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initState)
  }

  if (!apolloClient) {
    apolloClient = create(initState)
  }

  // Reuse client on the client-side
  return apolloClient
}

export default init
