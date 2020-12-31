module.exports = {
    name: 'hug',
    description: "hug another user",
      execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      if(message.channel.type == 'text'){
        const member = message.member;
    const userToHug = message.mentions.members.first() || message.guild.members.get(args[1]);
  message.channel.send(`${message.author.username} hugged ${userToHug}`);
      }if(message.channel.type == 'dm'){
        return message.channel.send(`Sorry this command doesn't work in DMs`);
      }
      

  }
}