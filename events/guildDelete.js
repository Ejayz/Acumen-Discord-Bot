const { execute } = require("./guildCreate");
const database_interaction = require('../database_interaction/removeGuildInfo');
const { logg } = require("../logs/createLog");
module.exports = {
    name: "guildDelete",
    nonce: false,
    async execute(guild) {
        database_interaction.removeGuildInfo(guild.id).then(result => {
            if (result.affectedRows == 1) {
                logg("I was removed guild .Guild Name:" + guild.name);
            }
        }).catch(err => {
            logg("I was removed to guild .Guild Name:" + guild.name);
        });
    }
}