const { MessageEmbed } = require("discord.js");

function errorEmbed(description) {
    const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Error')
        .setDescription(description)
        .setFooter("Acument Bot");

    return embed;
}

function successEmbed(description) {
    const embed = new MessageEmbed()
        .setColor('#37fd12')
        .setTitle('Success')
        .setAuthor('Acumen one of the bots')
        .setDescription(description)
        .setFooter("Acument Bot");

    return embed;
}

function warningEmbed(description) {
    const embed = new MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Warning')
        .setAuthor('Acumen one of the bots')
        .setDescription(description)
        .setFooter("Acument Bot");
    return embed;

}

module.exports = {
    errorEmbed,
    successEmbed,
    warningEmbed
}