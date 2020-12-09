const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'userinfo',
    description: 'Gets user information',
    aliases: ['ui', 'whois'],
    execute(message, args){

let user = message.mentions.users.first() || message.author;

const member = message.guild.member(user);

const UserInfoEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("In Server", message.guild.name, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField('Roles:', user.roles ? user.roles.map(r => `${r}`).join(' | ') : "", true)
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send(UserInfoEmbed);
    }
}