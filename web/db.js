const {connect} = require("mongoose");

const connectString = process.env.DB || "mongodb://localhost:27017/test";
console.log(connectString);

const conn = async () => {
  try {
    await connect(connectString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log(`Successfully connected to db at: ${connectString}`);
  }
  catch (err) {
    console.log(err.msg)
  }
}

module.exports = {conn};