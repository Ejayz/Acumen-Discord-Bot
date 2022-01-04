const pool = require('../sql_connection/sql');
const Promise = require('promise');
module.exports = {
    async getGuildInfo(GUILD_ID) {
        const promise = new Promise((resolve, reject) => {
            const sql = "SELECT * FROM guild_data WHERE IS_EXIST='true';";
            pool.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(result);
                pool.getConnection((err, connection) => {
                    connection.release();
                });
            });
        });
        return promise;
    }
}