module.exports = {
    name: 'sus',
    description: "sus someone",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      const member = message.member;
    const sussedmemeber = message.mentions.members.first() || message.guild.members.get(args[1]);
    message.channel.send(` ${sussedmemeber} looking kinda sus tho`);

  }
}