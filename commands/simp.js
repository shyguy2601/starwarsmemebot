const Me
module.exports = {
    name: 'simp',
    description: "this is a simp command",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
    const SimpEmbed = new Discord.MessageEmbed()
    .setTitle('Simp Alert')
    .setDescription('Extreme simping detected')

  message.channel.send(SimpEmbed);
  }
}