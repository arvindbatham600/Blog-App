const express = require("express");
const cors = require('cors');

// app object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req,res) => {
    res.send("working");
})

// listen
app.listen(3000, () => {
    console.log("listening port on 3000")
})