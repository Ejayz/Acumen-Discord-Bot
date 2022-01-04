const mysql = require('mysql');
const pool = require('../sql_connection/sql');
const Promise = require('promise');

module.exports = {
    async getUserLastChat(GUILD_ID, USER_ID) {
        const promise = new Promise((resolve, reject) => {
            const data = [GUILD_ID, USER_ID];
            const query = "SELECT LAST_LOG FROM ?? WHERE USERID=? AND IS_EXIST='true'";
            const sql = mysql.format(query, data);
            pool.query(sql, (err, result) => {
                if (err) reject("Result" + err);
                resolve(result);
                pool.getConnection((err, connection) => {
                    if ((err) => {
                        throw new Error("Pool" + err);
                    });
                    connection.release();
                });
            });

        });
        return promise;
    }
}