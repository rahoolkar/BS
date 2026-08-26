const jwt = require("jsonwebtoken");

function genToken(userId) {
  try {
    const token = jwt.sign({ _id: userId }, process.env.SECRET_STRING, {
      expiresIn: "1d",
    });
    return token;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = genToken;
