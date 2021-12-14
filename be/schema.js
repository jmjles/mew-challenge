const { gql } = require("apollo-server-core");

//* Export schema

exports.types = gql`
  type Main {
    temp: Float
    feels_like: Float
  }

  type Weather {
    main: String
    description: String
  }
  type Data {
    main: Main
    weather: [Weather]
    icon: String
    name: String
  }

  type Query {
    getWeather(city: String): Data
  }
`;
