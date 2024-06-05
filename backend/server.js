const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes")

var corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// env config
dotenv.config();

// mongodb databse connection
connectDatabase();
// app object
const app = express();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("this is response")
})
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter)

// listen
app.listen(process.env.PORT, () => {
  console.log("listening port on 3000");
});
