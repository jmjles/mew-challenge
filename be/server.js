const { startApollo } = require("./apollo");
const { resolvers } = require("./resolvers");
const { types } = require("./schema");

//* Starts apollo at Port 4000

startApollo(types, resolvers);
