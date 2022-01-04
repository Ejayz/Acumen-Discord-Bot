const moment = require('moment');
module.exports = {
    async getTimeDifference(startDate, endDate) {
        const promise = new Promise((resolve, reject) => {
            const end = moment(startDate);
            const start = moment(endDate);
            const diff = start.diff(end, 'second');
            if (diff === "NaN") reject('Something went wrong NaN');
            resolve(diff);
        });
        return promise;
    }

}