require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./helpers/errorHandler");
const router = require("./routes/searchRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/search", router);

app.use(errorHandler);

module.exports = app;
