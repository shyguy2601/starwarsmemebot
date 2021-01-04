module.exports = {
    name: 'makebaby',
    description: "make babies",
    aliases: [`makebb`, 'mb'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      
      const member = message.member;
    const userToMakeBabyWith = message.mentions.members.first(); 
    if(!userToMakeBabyWith){
      message.channel.send('You need to mention a user to make a baby with!')
      return;
    }
  message.channel.send(`${message.author.username} made a baby with ${userToMakeBabyWith}`);
      if(message.channel.type == 'dm'){
        return message.channel.send('Sorry this command does not work in DMs');
      }
  }
}