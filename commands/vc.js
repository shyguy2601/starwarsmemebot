module.exports = {
    name: 'vc',
    description: "this is a viginity check command",
    aliases: ['virginitycheck'],
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      




      
      
        const vcheck = new Discord.MessageEmbed()
        .setColor(0x00F5FF)
        .setTitle('Viginity Check')
        .setDescription('React with ✅ if you are a virgin')
        message.channel.send(vcheck)
        .then(embed => {
            embed.react('✅');
        })
      
       
              
                
           


          

   
    } 
  }