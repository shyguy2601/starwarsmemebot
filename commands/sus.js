module.exports = {
    name: 'sus',
    description: "sus someone",
      execute(message, args){
      const Discord = require('discord.js');
      
      
      const sussedMember = message.mentions.members.first(); 
    if(!sussedMember){
      message.channel.send('You need to mention a user to call out for being sus!')
      return;
    }
    message.channel.send(` ${sussedMember} looking kinda sus tho`);

  }
}