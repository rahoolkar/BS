const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
  try {
    console.log("COOKIES:", req.cookies);

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }
    
    const decoded = jwt.verify(token, process.env.SECRET_STRING);

    console.log("DECODED TOKEN:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.error("AUTH ERROR:", error);

    return res.status(401).json({
      message: error.message,
    });
  }
};

module.exports = isLoggedIn;
