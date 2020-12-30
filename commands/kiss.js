module.exports = {
    name: 'givelove',
    description: "this is an ew command",
    aliases: [`kiss`, 'gl'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      if(message.channel.type == 'text'){
        const member = message.member;
    const userToLove = message.mentions.members.first() || message.guild.members.get(args[1]);
  message.channel.send(`${message.author.username} kissed ${userToLove}`);
      }if(message.channel.type == 'dm'){
        return message.channel.send('Sorry this command does not work in DMs');
      }
      

  }
}