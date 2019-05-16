import { gql, makeExecutableSchema, createResolvers } from '../../utils'

export default makeExecutableSchema({
  typeDefs: gql`
    type Book {
      id: ID!
      title: String
      author: String
    }

    type Query {
      books: [Book]
      book(id: ID!): Book
    }
  `,
})

export const resolvers = createResolvers({
  title: () => 'Book Title',
})
