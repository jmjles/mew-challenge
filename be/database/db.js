const client = require("mongoose");
//Should be hidden in a .env file
const uri =
  "mongodb+srv://admin:246894699Jj@cluster0.9r7lc.mongodb.net/MainDatabase?retryWrites=true&w=majority";

module.exports = async () => {
  try {
    await client.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (er) {
    console.log(er);
  }
};
