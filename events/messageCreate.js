const { getTimeDifference } = require('../class/getTimeDifference');
const { getUserLastChat } = require('../database_interaction/getUserLastChat');
module.exports = {
    name: "messageCreate",
    nonce: false,
    execute(message) {
        if (message.content !== null && message.guild !== null) {
            if (!message.author.bot) {
                getUserLastChat(message.guildID, message.author.id)
            }
        }
    }
}