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
    .setDescription(`Pls give ${message.author.username} their daily dose of love and attention`)
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
    .catch(console.error);
  message.channel.send(ImLonely);
  }
}