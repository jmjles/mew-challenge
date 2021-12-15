const { RESTDataSource } = require("apollo-datasource-rest");
const { getLogs, addLog, addUser } = require("../database/query/userLogs");

exports.UserApi = class UserApi extends RESTDataSource {
  //* Get logs from a user
  async getUserLogs(username) {
    return await getLogs(username);
  }
  async addUserLog(username, log) {
    return await addLog(username, log);
  }
  async addUSER(username) {
    return await addUser(username);
  }
};
