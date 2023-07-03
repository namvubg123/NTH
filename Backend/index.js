const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const morgan = require("morgan");

//Routes
const authRoute = require("./route/auth");
const userRoute = require("./route/user");
const categoryRoute = require("./route/category");
const productRoute = require("./route/product");

mongoose.connect("mongodb://localhost:27017/shop", () => {
  console.log("Connected to Mongo DB");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("combined"));

//Route
app.use("/home", authRoute);
app.use("/home", userRoute);
app.use("/home", categoryRoute);
app.use("/home", productRoute);
app.use("/files", express.static("files"));

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});
