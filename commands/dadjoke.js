module.exports = {
    name: 'dadjoke',
    description: "this is an on the spot dadjoke command, made just to make a joke to someone smh",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";

      message.channel.send('Hi Impressed, im dad')
    }
}