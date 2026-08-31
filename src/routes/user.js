const { getProfile } = require("../controllers/user");
const isLoggedIn = require("../middlewares/isLoggedIn");
const express = require("express");

const userRouter = express.Router();

userRouter.get("/getProfile", isLoggedIn, getProfile);

module.exports = userRouter;
