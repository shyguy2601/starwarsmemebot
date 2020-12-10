module.exports = {
    name: 'ew',
    description: "this is an ew command",
    aliases: [`:(`],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";

  message.channel.send(`EWWWWWWWWW gross`)
  }
}