const User = require("../models/user");
const getToken = require("../utils/token");

const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("Please provide valid credentials");
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email });
    }

    const token = getToken(user._id);

    res.cookie("token", token, {
      http: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "LoggedIn successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logOut = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new Error("You are already logged out.");
    }

    const blackListToken = new BlackList({ token });

    await blackListToken.save();

    res.clearCookie("token");

    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { googleAuth, logOut };
