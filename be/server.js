const { startApollo } = require("./apollo");
const db = require("./database/db");
const { resolvers } = require("./resolvers");
const { types } = require("./schema");

//* Starts apollo at Port 4000
db();
startApollo(types, resolvers);
