const mysql = require('mysql');
require('dotenv').config();


const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.database_host,
    user: process.env.database_username,
    password: process.env.database_password,
    database: process.env.database_name
});

module.exports = pool;