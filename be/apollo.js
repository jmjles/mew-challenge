const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const http = require("http");
const { WeatherApi } = require("./api/WeatherApi");
const { UserApi } = require("./api/UserApi");

exports.startApollo = async (types, resolvers) => {
  const app = express();
  const httpServer = http.createServer(app);

  //* Create Apollo Server
  const server = new ApolloServer({
    typeDefs: types,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    dataSources: () => {
      return {
        weather: new WeatherApi(),
        user: new UserApi(),
      };
    },
  });
  //* Launch Server
  await server.start();

  server.applyMiddleware({ app });

  //* Start on port 4000
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};
