const embed = require('../gui/embed');
const database_interaction = require('../database_interaction/setGuildInfo');
const createTable = require('../database_interaction/createGuildTable');
const { logg } = require('../logs/createLog');
module.exports = {
    name: 'guildCreate',
    nonce: false,
    async execute(guild) {

        database_interaction.setGuildInfo(guild.id, guild.name, guild.ownerId)
            .then(result => {
                if (result.affectedRows == 1) {
                    createTable.createGuildTable(guild.id).then(result => {
                        if (result) {
                            guild.fetchAuditLogs({ type: "BOT_ADD", limit: 1 })
                                .then(audit => {
                                    audit.entries.first().executor.send(
                                        {
                                            content: ' ',
                                            embeds: [embed.successEmbed("Hi! Thank you for adding me to your Guild/Server.")]
                                        }
                                    )
                                    logg("I was added to new guild .Guild Name:" + guild.name);
                                }
                                )
                                .catch(error => {
                                    logg(error);
                                });
                        }
                    }).catch(error => {
                        logg(error);
                    });
                }
            })
            .catch(error => {
                guild.fetchAuditLogs({ type: "BOT_ADD", limit: 1 })
                    .then(audit => {
                        audit.entries.first().executor.send(
                            {
                                content: ' ',
                                embeds: [embed.errorEmbed("Something went wrong while adding your guild to our record. Please contact support:```" + error + "```")]
                            }
                        )
                        logg("Added to a guild but there was an error occured while being added:" + guild.id + "," + guild.name + "," + guild.ownerId);
                    })
                    .catch(error => {
                        logg(error);
                    });
            });
    }
}