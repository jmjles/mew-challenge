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
  },
};
