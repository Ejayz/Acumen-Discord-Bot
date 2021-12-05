require('dotenv').config();
const { Client, Collection, Intents } = require('discord.js');
const token = process.env.bot_token;
const fs = require('fs');
const rest = require('./rest');

//rest.updateCommand();

const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.DIRECT_MESSAGES],partials:['CHANNEL','MESSAGE','USER'] });

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
console.log(eventFiles);
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}
client.login(token);