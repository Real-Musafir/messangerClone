const { ApolloServer, gql } = require("apollo-server");

module.exports = gql`
  type User {
    userName: String!
    email: String!
  }

  type Query {
    getUsers: [User]!
  }
`;
