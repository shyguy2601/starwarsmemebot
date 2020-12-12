const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'claim',
    description: "this is a troll command",
    
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
    const TrolledEmbed = new Discord.MessageEmbed()
    .setTitle(`You've been trolled`)
    .setDescription(`You really thought i'd have that kind of money?`)

  message.channel.send(TrolledEmbed);
  }
}