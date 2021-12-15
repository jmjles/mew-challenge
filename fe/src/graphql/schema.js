const { gql } = require("@apollo/client");

exports.loginMutation = gql`
  mutation AddUser($username: String!) {
    addUser(username: $username) {
      username
    }
  }
`;

exports.logMutation = gql`
  mutation AddLog($username: String!, $log: checkLog!) {
    addLog(username: $username, log: $log) {
      logs {
        location
        time
      }
    }
  }
`;

exports.userQuery = gql`
  query getLogs($username: String) {
    getLogs(username: $username) {
      logs {
        location
        time
      }
    }
  }
`;

exports.weatherQuery = gql`
  query getWeather($city: String) {
    getWeather(city: $city) {
      icon
      name
      main {
        feels_like
        temp
      }
      weather {
        description
        main
      }
    }
  }
`;
