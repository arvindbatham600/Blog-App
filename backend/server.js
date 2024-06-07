const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

// const allowedOrigins = [
//   "https://arvind-dailyblog.netlify.app/", // Replace with your frontend's deployed domain
//   "http://localhost:5173", // For local development
// ];

var whitelist = [
  "http://localhost:5173/",
  "https://arvind-dailyblog.netlify.app/",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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
  res.send("this is response");
});
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);

// listen
app.listen(process.env.PORT, () => {
  console.log("listening port on 3000");
});
