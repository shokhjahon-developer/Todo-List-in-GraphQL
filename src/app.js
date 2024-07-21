const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const { port } = require("../config");
const typeDefs = require("./schemas/schema");
const resolvers = require("./resolvers/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const bootstrap = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: {
      port: 5000,
    },
  });

  console.log("Server is ready at: ", url);
};

bootstrap();
