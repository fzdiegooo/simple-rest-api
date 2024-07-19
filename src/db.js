const mysql = require("mysql2/promise")
const { DB_USER,DB_DATABASE,DB_HOST,DB_PASSWORD,DB_PORT } = require("./config")

module.exports.pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})