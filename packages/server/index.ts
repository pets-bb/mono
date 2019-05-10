import { ApolloServer, gql } from 'apollo-server'

const server = new ApolloServer({
  typeDefs: gql`
    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
      hello: String
    }
  `,

  resolvers: {
    Query: {
      hello: () => 'Hello Server Apollo 333333!!!!!!!!!',
      books: () => [
        {
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'J.K. Rowling',
        },
        {
          title: 'Jurassic Park',
          author: 'Michael Crichton',
        },
      ],
    },
  },
})
const PORT = 3001
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Apollo Server ready at ${url}`)
})
