module.exports = {
    name: 'entermeme',
    description: "this is a meme contest command",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      



      if (message.guild.id != '396021514740301825') return message.channel.send(`Not in correct server for this command`);
else {
      
      
        const AskForImageEmbed = new Discord.MessageEmbed()
        .setColor(0x00F5FF)
        .setTitle('Meme Contest Entry')
        .setDescription('So, you wanna enter the meme contest?')
        .addField('\u200b', 'Send the meme in to the chat');
        
      
        message.channel.send(AskForImageEmbed);
      
        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 30000}).then(collected => {    
             
              let Attachment = (collected.first().attachments).array();
      
              console.log(collected.first());
              if (Attachment.length == 0) {
                message.channel.send("The message needs to have an attachment");
              } else {
                const userMemeEmbed = new Discord.MessageEmbed()
                .setTitle(`Meme Entry by ${message.author.username}`)
                .setImage(Attachment[0].url)
                .setDescription(`If you like the meme then react with 👍 or if you don't like it, react with 👎`)
                message.guild.channels.cache.find(i => i.name === `meme-entrys`).send(userMemeEmbed)
                .then(embed => {
                    embed.react('👍')
                    .then(() => embed.react('👎'));
                })
              }
              
                
            }) 


          }

   
    } 
  }