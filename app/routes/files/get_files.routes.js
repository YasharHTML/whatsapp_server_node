const { Router } = require('express');
const db = require('better-sqlite3')('db.sqlite3');
const getRouter = Router();
const _ = require("underscore")
// https://reqres.in/img/faces/2-image.jpg
getRouter.use("/faces", require("express").static("app/static/images"))

module.exports = getRouter;