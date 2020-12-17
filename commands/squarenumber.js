module.exports = {
    name: 'squarenumber',
    description: "get the square of a number",
    aliases: ['sn'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      let num = args.slice(1)
      let numToSquare = parseInt(num)
      const squaredNumber = numToSquare * numToSquare
      
      message.channel.send(squaredNumber)
      }
    

  
}