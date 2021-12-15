const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  logs: [LogSchema],
});

module.exports = userSchema = new mongoose.model("UserLogs", UserSchema);
