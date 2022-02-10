const { ApolloServer, gql } = require("apollo-server");

const { sequelize } = require("./models");

// The GraphQL schema
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const contextMiddleware = require("./utils/contextMiddleware");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: contextMiddleware, // to access the context objext like Authorization in header
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connected!!");
    })
    .catch((err) => console.log(err));
});
