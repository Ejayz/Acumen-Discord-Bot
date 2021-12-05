const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const embed = require('../gui/embed');
const button = require('../gui/button');

module.exports = {
    data: new SlashCommandBuilder().setName("ping")
        .setDescription("Reply with pong")
    , async execute(interaction) {

        await interaction.reply({ content: 'Result:', embeds: [embed.successEmbed("Pong")], components: [button.buttonGUI()] });
       
    }
}
