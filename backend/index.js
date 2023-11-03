const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database is connected!");
  } catch (err) {
    console.log(err);
  }
};

//middlewares 
dotenv.config();

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("App is running on port " + process.env.PORT);
});
