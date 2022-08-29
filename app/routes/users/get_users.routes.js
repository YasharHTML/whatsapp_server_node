const { Router } = require('express');
const db = require('better-sqlite3')('db.sqlite3');
const getRouter = Router();
const _ = require("underscore")

db.prepare(
    `CREATE TABLE IF NOT EXISTS users (
        id INT,
        email VARCHAR(255),
        password VARCHAR(255),
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        avatar VARCHAR(255)
    );`
).run();

for (let i = 1; i < 13; i++) {
    db.prepare(
        `UPDATE users SET avatar=? WHERE id=?`
    ).run(`${i}-image.jpg`, i);
}

getRouter
    .get("/", (req, res) => {
        res.json(db.prepare("SELECT * FROM users;").all().map(value => {
            return _.omit(value, "password");
        }));
    })
    .get("/:id", (req, res) => {
        res.json(_.omit(db.prepare("SELECT * FROM users WHERE id=?;").get(req.params.id), "password"));
    })

module.exports = getRouter;