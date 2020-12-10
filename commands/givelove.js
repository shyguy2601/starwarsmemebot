module.exports = {
    name: 'givelove',
    description: "this is an ew command",
    aliases: [`kiss`, 'gl'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      const 
const userToLove = message.mentions.members.first() || message.guild.members.get(args[1]);
  message.channel.send(`${message.user.username} kissed ${userToLove}`);

  }
}