//* Call weather api with city

exports.resolvers = {
  Query: {
    getWeather: async (_, { city }, { dataSources }) => {
      try {
        return dataSources.weather.getWeather(city);
      } catch (er) {
        console.log(er);
      }
    },
    getLogs: async (_, { username }, { dataSources }) => {
      try {
        return dataSources.user.getUserLogs(username);
      } catch (er) {
        console.log(er);
      }
    },
  },
  Mutation: {
    addLog: async (_, { username, log }, { dataSources }) => {
      try {
        return dataSources.user.addUserLog(username, log);
      } catch (er) {
        console.log(er);
      }
    },
    addUser: async (_, { username }, { dataSources }) => {
      try {
        return dataSources.user.addUSER(username);
      } catch (er) {
        console.log(er);
      }
    },
  },
};
