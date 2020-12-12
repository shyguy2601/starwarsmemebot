const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'hmu',
    description: "this is a hmu command",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
    const ImLonely = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle(`${message.author.username} is sad and lonely and needs some love`)
    .setDescription(`Pls give ${message.author.username} daily dose of love and attention`)

  message.channel.send(ImLonely);
  }
}