const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
  mongoose
    .connect(config.mongoDB.url, config.mongoDB.options)
    .then(() => {
      console.log("Mondodb Database connection successfully");
    })
    .catch((error) => {
      console.log("Mondodb Database connection  error", error);
    });
};

module.exports = {
  connectDB,
};
