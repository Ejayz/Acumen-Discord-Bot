const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Setup the bot (What you want to send to )"),
    async execute(interaction) {

    }
}