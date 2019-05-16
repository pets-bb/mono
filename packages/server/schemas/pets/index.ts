import { gql, makeExecutableSchema, createResolvers } from '../../utils'

export default makeExecutableSchema({
  typeDefs: gql`
    type Pet {
      AnimalId: ID!
      Sex: Int
      SexName: String
    }

    type Query {
      pets: [Pet]
      pet(id: ID!): Pet
    }
  `,
})

export const resolvers = createResolvers({
  pets: () => [
    {
      AnimalId: 1,
      Sex: 2,
      SexName: 'Timi',
    },

    {
      AnimalId: 2,
      Sex: 3,
      SexName: 'Timi2',
    },
  ],
  pet: ({ args }) => {
    const { id } = args as { id: number }
    return {
      AnimalId: id,
      Sex: 2,
      SexName: 'Timi',
    }
  },
})
