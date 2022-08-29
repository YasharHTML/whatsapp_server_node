const express = require("express");
const allRoutes = require("./routes");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(allRoutes);

module.exports = app;