const user = require("../model/userLogs");

// Add log to specific user
exports.addLog = async (username, log) => {
  return await user.findOneAndUpdate({ username }, { $push: { logs: log } });
};

// Gets logs from specific user
exports.getLogs = async (username) => {
  return await user.findOne({ username });
};

// Checks if user exists, if not, create user
exports.addUser = async (username) => {
  const userFound = await user.findOne({ username });
  if (!userFound) return await user.create({ username });
  return userFound;
};
