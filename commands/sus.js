module.exports = {
    name: 'sus',
    description: "sus someone",
    aliases: ['sus'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      
    const sussedMember = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!sussedMember){
      message.channel.send('You need to mention a user to call out for being sus!')
      return;
    }
    message.channel.send(` ${sussedmemeber} looking kinda sus tho`);

  }
}