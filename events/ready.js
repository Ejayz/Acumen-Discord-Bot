const { logg } = require('../logs/createLog')
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log('Ready to rank you all!');
        logg("Client is ready").catch(err => {
            console.log(err);
        });
    }
}