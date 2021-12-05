const { MessageButton, MessageActionRow } = require("discord.js");

function buttonGUI() {
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('Close')
                .setLabel("Close")
                .setStyle('PRIMARY')
        );

    return row;
}

module.exports = {
    buttonGUI
}