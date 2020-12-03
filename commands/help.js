module.exports = {
    name: 'prefix',
    description: "this is a command to remind users of prefix",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";

  message.channel.send(`My prefix is ${prefix}`)
  }
}