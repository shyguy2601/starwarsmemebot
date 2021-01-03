const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')
const Client = require('discord.js')
const Attachment = require('discord.js');
 //--------------------------------------------------
module.exports = {
    name: 'hug',
    description: "hug another user",
      execute: async(message, args) => {
     if (!message.author.bot) {
let hugged = message.mentions.users.first();
if(!hugged) {
 
message.channel.send(`Mention a user to hug!`)
return;
  
} else {
  
      const author = message.author.username;
      const data = await fetch('https://nekos.life/api/v2/img/hug');
      if (!(data || data.url)) return message.sendError('NO_DATA');
          const Embed = new MessageEmbed()
          .setImage(data.url)
          .setTitle(`${message.author.username} hugged ${hugged.username}`) //hug msg
          message.channel.send(Embed)
    
 
   
       }
}
}
  }