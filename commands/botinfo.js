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
    async execute(message,args, client = new Discord.Client()){
        if(message.channel.type == "text"){
            let guilds = client.guilds.cache
            guilds = guilds.array()
    const core = os.cpus()[0];

            let days = Math.floor(client.uptime / 86400000);
            let hours = Math.floor(client.uptime / 3600000) % 24;
            let minutes = Math.floor(client.uptime / 60000) % 60;
            let seconds = Math.floor(client.uptime / 1000) % 60;    
            const embed = new Discord.MessageEmbed()
            .setColor(message.guild.me.displayHexColor || 'BLUE')
            .addField('General', [
            `**> Commands:** ${client.commands.size}`,
            `**> Server Count:** ${client.guilds.cache.size}`,
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
            `**> Uptime:** ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
            
        ])
        .setTimestamp()
        
        message.channel.send(embed);
    }if(message.channel.type == "dm"){
            let days = Math.floor(client.uptime / 86400000);
            let hours = Math.floor(client.uptime / 3600000) % 24;
            let minutes = Math.floor(client.uptime / 60000) % 60;
            let seconds = Math.floor(client.uptime / 1000) % 60;    
        const embed = new Discord.MessageEmbed()
        .setColor('#DC143C')
        .addField('General', [
        `**> Commands:** ${client.commands.size}`,
        `**> Server Count:** ${client.guilds.cache.size}`,
        `**> Users:** ${client.users.cache.array().length}`,
        `**> Channels:** ${client.channels.cache.size}`,
        `**> Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
        `**> Node.js Version:** ${process.version}`,
        `**> Discord.js Version:** v${djsversion}`,
        `**> Bot Creator:** ShyGuy#5504`,
        '\u200B'
    ])
    .addField('System', [
        `**> Platform:** ${process.platform}`,
        `**> Uptime:** ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
        
    ])
    .setTimestamp()
    
    message.channel.send(embed);






    }
    }
};