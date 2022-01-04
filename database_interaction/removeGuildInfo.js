const mysql = require('mysql');
const pool = require('../sql_connection/sql');
const Promise = require('promise');

module.exports = {
    removeGuildInfo(GUILD_ID) {
        const promise = new Promise((resolve, reject) => {
            const data = [GUILD_ID]
            const query = "UPDATE `guild_data` SET `IS_EXIST` = 'false' WHERE `GUILD_ID` =? AND IS_EXIST='true'; ";
            const sql = mysql.format(query, data);
            pool.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(result);
                pool.getConnection((err, connection) => {
                    if (err) throw err;
                    connection.release();
                });
            });
        });
        return promise;
    }

}