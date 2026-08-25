const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const main = require("./utils/database");

const port = 8000;

main()
  .then(() => {
    console.log("connection to database established");
    app.listen(port, () => {
      console.log("app is running on port : " + port);
    });
  })
  .catch(() => {
    console.log("Something went wrong while connecting to the database");
  });
