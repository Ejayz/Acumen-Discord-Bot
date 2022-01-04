const Promise = require('promise');
const pool = require('../sql_connection/sql');
const mysql = require('mysql');
async function setGuildInfo(GUILD_ID, GUILD_NAME, GUILD_OWNER_ID) {
    const promise = new Promise(function (resolve, reject) {
        let data = [GUILD_ID, GUILD_NAME, GUILD_OWNER_ID];
        const query = "INSERT INTO `guild_data` (`GUILD_ID`, `GUILD_NAME`, `GUILD_OWNER_ID`, `IS_EXIST`) VALUES (?,?,?,'true'); ";
        const sql = mysql.format(query, data);
        pool.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
            pool.getConnection((err, connection) => {
                if(err) throw err;
                connection.release();
            });
        });

    })
    return promise;
}
module.exports = {
    setGuildInfo
}