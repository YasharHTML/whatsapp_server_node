const { Router } = require("express");
const getUserRoutes = require("./users/get_users.routes");
const getFilesRoutes = require("./files/get_files.routes");

const getRoutes = Router();
getRoutes.use("/users", getUserRoutes);
getRoutes.use("/img", getFilesRoutes);

module.exports = getRoutes;
