const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'nobodyasked',
    description: "Nobody fucking asked",
    aliases:['na'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      

    const NobodyAsked = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setImage("https://media1.tenor.com/images/b37b0875f1bcf126dca8ba07c4eed4d8/tenor.gif");
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
    .catch(console.error);
          return message.channel.send(NobodyAsked);
  }
}