import { getProfile } from "../controllers/user";
import isLoggedIn from "../middlewares/isLoggedIn";

const express = require("express");

const userRouter = express.Router();

userRouter.get("/getProfile", isLoggedIn, getProfile);

export default userRouter;
