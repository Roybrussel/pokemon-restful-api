require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

/// DATABASE CONNECTION ///

const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO_DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
