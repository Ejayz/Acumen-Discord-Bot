const mysql = require('mysql');
const pool = require('../sql_connection/sql');

module.exports = {
    async createGuildTable(GUILD_ID) {
        const promise = new Promise((resolve, reject) => {
            const data = [GUILD_ID];
            const query = "CREATE TABLE ?? ( `ID` INT NOT NULL AUTO_INCREMENT, `USERID` VARCHAR(250), `LVL` VARCHAR(250), `CURRENT_EXP` VARCHAR(250), `WALLET_ADDRESS` VARCHAR(250), `BALANCE` FLOAT,`LAST_LOG` VARCHAR(250), `IS_EXIST` VARCHAR(250), PRIMARY KEY (`ID`) ); ";

            const sql = mysql.format(query, data);
            pool.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(true);
                pool.getConnection((err, connection) => {
                    if (err) throw new Error(err);
                    connection.release();
                });
            });
        });
        return promise;
    }
}