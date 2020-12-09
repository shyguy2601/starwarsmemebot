/*const Discord = require('discord.js');
const { MessageEmbed, version: djsversion } = require('discord.js');
const version = require('../package.json');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

function formatBytes(bytes){
    if (bytes === 0) return '0 Bytes';
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(math.log(bytes) / Math.log(1024));
    return `${parseFloat((bytes / math.pow(1024, i)).toFixed(2))} ${sizes[i]}` }


module.exports = {
    name: 'botinfo',
    description: "gets information about the bot",
    aliases: ['bi', 'info'],
    execute: (message, args) => {
    const core = os.cpus()[0];
    const embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor || 'BLUE')
        .addField('General', [
            `**> Client:** ${this.client.user.tag} (${this.client.user.id})`,
            `**> Commands:** ${this.client.commands.size}`,
            `**> Servers:** ${this.client.guilds.cache.size.toLocalString()}`,
            `**> Users:** ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocalString()}`,
            `**> Channels:** ${this.client.channels.cache.size.toLocalString()}`,
            `**> Creation Date:** ${utc(this.client.user.createdTimestamp).format('Do MMMM YYYYY HH:mm:ss')}`,
            `**> Node.js Version:** ${process.version}`,
            `**> Version:** v${version}`,
            `**> Discord.js Version:** v${djsversion}`,
            '\u200B'
        ])
        addField('System', [
            `**> Platform:** ${process.platform}`,
            `**> Uptime:** ${ms(os.uptime() * 1000, {long: true})}`,
            `**> CPU:** `,
            `\u3000 Cores: ${os.cpus().length}`,
            `\u3000 Model: ${core.model}`,
            `\u3000 Speed: ${core.speed}MHz`,
            `**> Memory:** `,
            `\u3000 Total: ${this.client.utils.formatBytes(process.memoryUsage().heapTotal)}`,
            `\u3000 Used: ${this.client.utils.formatBytes(process.memoryUsage().heapUsed)}`,
        ])
        .setTimestamp()
        
        message.channel.send(embed);
    }
};*/