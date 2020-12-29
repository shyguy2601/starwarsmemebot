module.exports = {
    name: 'hug',
    description: "hug another user",
    aliases: [`kiss`, 'gl'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      const member = message.member;
    const userToHug = message.mentions.members.first() || message.guild.members.get(args[1]);
  message.channel.send(`${message.author.username} hugged ${userToHug}`);

  }
}