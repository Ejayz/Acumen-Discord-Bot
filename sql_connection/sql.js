const mysql = require('mysql');
require('dotenv').config();

function connection() {
    const connection = mysql.createConnection({
        host: process.env.database_host,
        user: process.env.database_username,
        password: process.env.database_password
    });
    connection.connect(() => {
        if (err) throw err;
        console.log("Connected");
    });
    return connection;
}

module.exports = {
    connection
}