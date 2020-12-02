module.exports = {
    name: 'dadjoke',
    description: "this is a dadjoke command",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";

      message.channel.send('Hi Impressed, im dad')
    }
}