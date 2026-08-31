const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const main = require("./utils/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
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
