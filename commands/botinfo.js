const Discord = require('discord.js');
const { MessageEmbed, version: djsversion } = require('discord.js');
const version = require('../package.json');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = {
    name: 'botinfo',
    description: "gets information about the bot",
    aliases: ['bi', 'botinfo'],
    execute: (message, args, client) => {
    const core = os.cpus()[0];
    const embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor || 'BLUE')
        .addField('General', [
            `**> Commands:** ${client.commands.size}`,
            `**> Servers:** ${client.guilds.cache.size}`,
            `**> Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`,
            `**> Channels:** ${client.channels.cache.size}`,
            `**> Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYYY HH:mm:ss')}`,
            `**> Node.js Version:** ${process.version}`,
            `**> Discord.js Version:** v${djsversion}`,
            `**> Bot Creator:** ShyGuy#5504`,
            '\u200B'
        ])
        .addField('System', [
            `**> Platform:** ${process.platform}`,
            `**> Uptime:** ${ms(os.uptime() * 1000, {long: true})}`,
            
        ])
        .setTimestamp()
        
        message.channel.send(embed);
    }
};