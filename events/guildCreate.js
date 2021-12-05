const embed = require('../gui/embed');
const connection = require('../sql_connection/sql');
module.exports = {
    name: 'guildCreate',
    nonce: false,
    async execute(guild) {
        guild.fetchAuditLogs({ type: "BOT_ADD", limit: 1 })
            .then(audit =>
                audit.entries.first().executor.send(
                    {
                        content: ' ',
                        embeds: [embed.successEmbed("Hi! Thank you for adding me to your Guild/Server.")]
                    }
                )
            )
            .catch(console.error);


    }
}