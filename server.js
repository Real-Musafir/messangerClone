const { ApolloServer, gql } = require("apollo-server");

// The GraphQL schema
const typeDefs = gql`
  type User {
    userName: String!
    email: String!
  }

  type Query {
    getUsers: [User]!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    getUsers: () => {
      const users = [
        {
          userName: "john",
          email: "john@gmail.com",
        },
        {
          userName: "jen",
          email: "jen@gmail.com",
        },
      ];
      return users;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
