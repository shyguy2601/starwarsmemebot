const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const flags = {
    DISCORD_EMPLOYEE: 'Discord Employee',
    DISCORD_PARTNER: 'Discord Partner',
    BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
    BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
    HYPESQUAD_EVENTS: 'HypeSquad Events',
    HOUSE_BRAVERY: 'House of Bravery',
    HOUSE_BRILLIANCE: 'House of Brilliance',
    HOUSE_BALANCE: 'House of Balance',
    EARLY_SUPPORTER: 'Early Supporter',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: 'Verified Bot',
    VERIFIED_DEVELOPER: 'Verified Bot Developer'
};
module.exports = {
    name: 'userinfo',
    description: "gets information of a user",
    aliases: ['ui', 'whois'],
    execute: (message, args) => {
        let options = message.content.split(/ +/);
        let member = message.mentions.members.first() || message.guild.members.cache.find(user => user.displayName == args[1]) || message.guild.members.cache.find(user => user.id == args[1]);
     
        if (!member) {
            
                return message.reply("Please mention a user!.")
            
           
        }
    const roles = member.roles.cache    
        .sort((a, b) => b.position - a.position)
        .map(role => role.toString())
        .slice(0, -1);
    const userFlags = member.user.flags.toArray();
    const embed = new MessageEmbed()
    .setFooter(`Requested by ${message.author.username}`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
    .setColor(message.member.displayColor)
    .addField('User', [
        `**> Username:** ${member.user.username}`,
        `**> Discriminator:** ${member.user.discriminator}`,
        `**> UserID:** ${member.id}`,
        `**> Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
        `**> Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
        `**> Time Account Was Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
        //`**> Status:** ${member.user.presence.status}`,
        //`**> Game:** ${member.user.presence.game || 'Not playing a game.'}`,
        `\u200b`
    ])
    .addField('Member', [
        `**> Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
        `**> Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
        `**> Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
        `**> Roles [${roles.length}]:** ${roles.length > 0 ? roles.join(', '): 'None'}`,
       `\u200b`
    ]);
    message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
        return message.channel.send(embed);

    }
};
