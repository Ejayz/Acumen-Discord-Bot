const path = require('path');
const { Collection } = require('discord.js');
const fs = require('fs');
const embed = require('../gui/embed');
const button = require('../gui/button');

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction) {
        interaction.commands = new Collection();
        const commandFiles = fs.readdirSync(path.join(__dirname, '../', 'commands')).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            interaction.commands.set(command.data.name, command);
        }
        if (!interaction.isCommand()) return;
        const command = interaction.commands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(interaction);
        } catch (err) {
            console.log(err);
            await interaction.reply({ content: ' ', ephemeral: true, embeds: [embed.errorEmbed("There was an error executing the command")] })
        }


    }
}