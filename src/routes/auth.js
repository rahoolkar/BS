const express = require("express");
const { googleAuth, logOut } = require("../controllers/auth");
const authRouter = express.Router();

authRouter.post("/google", googleAuth);

authRouter.post("/logout", logOut);

module.exports = authRouter;
