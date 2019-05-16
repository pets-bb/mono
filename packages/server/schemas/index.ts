import { mergeSchemas } from 'graphql-tools'

import books, { resolvers as booksResolvers } from './books'
import pets, { resolvers as petsResolvers } from './pets'

export const schema = mergeSchemas({
  schemas: [books, pets],
  resolvers: {
    Query: {
      ...petsResolvers,
    },

    Book: {
      title: {
        fragment: '... on Booking { propertyId }',
        resolve(parent: any, args: any, context: any, info: any) {
          return info.mergeInfo.delegateToSchema({
            schema: books,
            operation: 'query',
            fieldName: 'propertyById',
            args: {
              id: parent.id,
              a: 1,
              b: 2,
            },
            context,
            info,
          })
        },
      },
    },
  },
})

export default schema
