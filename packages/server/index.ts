import { ApolloServer, gql } from 'apollo-server'
import got from 'got'
import cheerio from 'cheerio'

import xml from 'xml'

const server = new ApolloServer({
  typeDefs: gql`
    type Book {
      title: String
      author: String
    }

    type Pet {
      id: ID!
      age: Int
      sex: String
    }

    type Query {
      books: [Book]
      hello: String
      pets: [Pet]
    }
  `,

  resolvers: {
    Query: {
      pets: async () => {
        const res = await got(
          'https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate',
        )

        const $ = cheerio.load(res.body, {
          normalizeWhitespace: true,
          xmlMode: true,
        })

        $.xml()

        debugger
      },
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
