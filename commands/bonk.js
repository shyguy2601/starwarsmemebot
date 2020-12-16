const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'bonk',
    description: "bonk someone",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      
    const BonkedUser = message.mentions.members.first() || message.guild.members.get(args[1]);
    const BonkEmbed = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle(`${message.author.username} Bonked ${BonkedUser}!`)
    .setImage("https://tenor.com/view/yoshi-hammer-idiot-bonk-gif-17119858");
    message.channel.send(BonkEmbed);

  }
}