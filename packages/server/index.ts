import { ApolloServer } from 'apollo-server'
import schema from './schemas'

const server = new ApolloServer({
  schema,
  context: () => ({
    isAuth: true,
  }),
})
const PORT = 3001

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Apollo Server ready at ${url}`)
})
