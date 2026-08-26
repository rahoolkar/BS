const jwt = require("jsonwebtoken");

async function isLoggedIn(req, res, next) {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new Error("You are not valid user");
    }

    const decoded = jwt.verify(token, process.env.SECRET_STRING);

    if (!decoded) {
      throw new Error("User does not have a valid token");
    }

    const user = await User.findById(decoded._id);

    if (!user) {
      throw new Error("Token is not valid. Please try again.");
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = isLoggedIn;
