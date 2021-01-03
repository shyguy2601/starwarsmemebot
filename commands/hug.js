const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')
const Client = require('discord.js')
const Attachment = require('discord.js');
 //--------------------------------------------------
module.exports = {
    name: 'hug',
    description: "hug another user",
      execute: async(message, args) => {
        const hug_gifs = [
          'https://tenor.com/1oGd.gif',
          'https://tenor.com/0K7K.gif',
          'https://tenor.com/bgHxU.gif',
          'https://tenor.com/bfifQ.gif'
        ]
     if (!message.author.bot) {
let hugged = message.mentions.users.first();
if(!hugged) {
 
message.channel.send(`Mention a user to hug!`)
return;
  
} else {
  
      const author = message.author.username;
      
          const Embed = new MessageEmbed()
          .setTitle(`${message.author.username} hugged ${hugged.username}`) //hug msg
          .setImage(`${hug_gifs[Math.floor(Math.random() * hug_gifs.length)]}`)
          
          message.channel.send(Embed)
    
 
   
       }
}
}
  }