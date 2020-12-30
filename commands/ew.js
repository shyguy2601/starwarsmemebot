module.exports = {
    name: 'ew',
    description: "this is an ew command",
    aliases: [`:(`],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      if(message.channel.type == "text"){
      message.channel.send(`EWWWWWWWWW gross`)

      }if(message.channel.type == "dm"){
      message.channel.send(`EWWWWWWWWW gross`)
      }
  
  }
}