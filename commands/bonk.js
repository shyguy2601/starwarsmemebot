const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'bonk',
    description: "bonk someone",
    execute(message, args){
      
      const prefix = ">";
      
    const BonkedUser = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!BonkedUser){
      message.channel.send('You need to mention a user to bonk!')
      return;
    }
    const BonkEmbed = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle(`${message.author.username} Bonked ${BonkedUser.user.username}!`)
    .setImage("https://media.tenor.com/images/fcece71708fa38d267c857f44562a82d/tenor.gif");
    message.channel.send(BonkEmbed);
      if(message.channel.type == "dm"){

       return message.channel.send(`Sorry this command doesn't work in DMs`);
      }
  }
}