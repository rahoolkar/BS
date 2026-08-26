const mongoose = require("mongoose");

const blackListSchema = new mongoose.Schema({
  token: {
    type: "String",
    required: [true, "Token is always required"],
  },
});

const BlackList = mongoose.model("BlackList", blackListSchema);

module.exports = BlackList;
