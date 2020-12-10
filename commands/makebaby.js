module.exports = {
    name: 'makebaby',
    description: "make babies",
    aliases: [`makebb`, 'mb'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      const member = message.member;
    const userToMakeBabyWith = message.mentions.members.first() || message.guild.members.get(args[1]);
  message.channel.send(`${message.author.username} made a baby with ${userToMakeBabyWith}`);

  }
}