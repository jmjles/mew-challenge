const { gql } = require("apollo-server-core");

//* Export schema

exports.types = gql`
  type Query {
    getWeather(city: String): Data
    getLogs(username: String): User
  }
  type Mutation {
    addLog(username: String!, log: checkLog!): User
    addUser(username: String!): User
  }
  type Data {
    main: Main
    weather: [Weather]
    icon: String
    name: String
  }

  type Main {
    temp: Float
    feels_like: Float
  }

  type Weather {
    main: String
    description: String
  }

  type User {
    username: String
    logs: [Log]
  }

  input checkLog {
    location: String
    time: String
  }
  type Log {
    location: String
    time: String
  }
`;
