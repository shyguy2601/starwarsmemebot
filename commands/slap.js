module.exports = {
    name: 'slap',
    description: "slap someone",
    aliases: [`s`,],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      const member = message.member;
    const userToSlap = message.mentions.members.first() || message.guild.members.get(args[1]);
    message.channel.send(`${message.author.username} Slapped ${userToSlap} hard across the face and ${userToSlap} cried`);

  }
}