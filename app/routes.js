const { Router } = require("express");
const getRoutes = require("./routes/get.routes");

const allRoutes = Router();

allRoutes.use("/api", getRoutes)

module.exports = allRoutes