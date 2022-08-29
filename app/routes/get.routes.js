const { Router } = require("express");
const getUserRoutes = require("./users/get_users.routes");

const getRoutes = Router();
getRoutes.use("/users", getUserRoutes);

module.exports = getRoutes;
