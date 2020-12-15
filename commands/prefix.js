module.exports = {
    name: 'prefix',
    description: "this is a command to remind users of prefix",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      if (message.content == `<@!783629275546648577> prefix`){
  message.channel.send(`My prefix is ${prefix}`)
      }
  }
}