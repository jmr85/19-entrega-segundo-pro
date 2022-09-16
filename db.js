const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/coderfinal");

mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", () => {
  console.log("There was an error while trying to connect");
});
