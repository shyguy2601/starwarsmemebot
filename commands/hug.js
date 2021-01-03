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
          'https://tenor.com/view/milk-and-mocha-bear-couple-line-hug-cant-breathe-gif-12687187',
          'https://tenor.com/view/milk-and-mocha-hug-cute-kawaii-love-gif-12535134',
          'https://tenor.com/view/peach-cat-hug-hug-up-love-mochi-mochi-peach-cat-gif-16334628',
          'https://tenor.com/view/hug-love-hi-bye-cat-gif-15999080'
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