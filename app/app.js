const express = require("express");
const getRoutes = require("./routes/get.routes");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", getRoutes);

module.exports = app;