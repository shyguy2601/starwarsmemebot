const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

function createWarning(warning) {
    const embed = new Discord.MessageEmbed()
        .setColor(message.member.displayColor)
        .setDescription(warning)
        .setTimestamp()
        return embed;
}