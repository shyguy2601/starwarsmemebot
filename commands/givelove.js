module.exports = {
    name: 'givelove',
    description: "this is an ew command",
    aliases: [`kiss`, 'gl'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      const member = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.member;
    const userToLove = message.mentions.members.first() || message.guild.members.get(args[1]);
  message.channel.send(`${member.user.username} kissed ${userToLove}`);

  }
}