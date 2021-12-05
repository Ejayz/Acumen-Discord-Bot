require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

function updateCommand() {
    const commands = [];
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON());
    }


    const rest = new REST({ version: '9' }).setToken(process.env.bot_token);

    rest.put(Routes.applicationCommands(process.env.client_id), { body: commands })
        .then(() => console.log("Successfully registered application commands"))
        .catch(console.error);
}

module.exports = {
    updateCommand
}