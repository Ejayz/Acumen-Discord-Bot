const fs = require('fs');

module.exports = {
    async logg(data) {
        const promise = new Promise((resolve, reject) => {
            const log = "\r\n" + new Date().toISOString() + " - " + data;
            fs.appendFile('./logs/log.txt', log, (err) => {
                if (err) reject(err);
                console.log(log);
                resolve(true);
            });
        });
        return promise;
    }

}