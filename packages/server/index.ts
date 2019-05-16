import { ApolloServer, gql, IResolvers } from 'apollo-server'
import got from 'got'
import qs from './utils/qs'

const petsApi = got.extend({
  baseUrl: 'https://asms.coa.gov.tw/Asms/api/',
})

const resolvers: IResolvers = {
  Query: {
    pets: async (parent, args) => {
      console.log(args)
      debugger
      const res = await petsApi.get(`/ViewNowAnimal`, {
        query: qs({
          pageSize: '2',
          currentPage: '1',
          sortDirection: 'DESC',
          sortFields: 'AcceptDate',
        }),
      })

      return JSON.parse(res.body)
    },
    hello: () => 'Hello Server Apollo 333333!!!!!!!!!',
    books: () => [
      {
        title: 'Harry Potter and the Chamber of Secrets',
        // author: 'J.K. Rowling',
      },
      {
        title: 'Jurassic Park',
        // author: 'Michael Crichton',
      },
    ],
  },
}

const server = new ApolloServer({
  typeDefs: gql`
    type Book {
      title: String
      author: String
    }

    type Pet {
      AnimalId: ID!
      Sex: Int
      SexName: String
    }

    type Query {
      books: [Book]
      hello: String
      pets(id: ID!): [Pet]
    }
  `,

  resolvers,
})
const PORT = 3001
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Apollo Server ready at ${url}`)
})
