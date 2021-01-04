/*module.exports = {
    name: 'feature',
    description: "this is a feature request command",
    aliases: ['fr', 'featurerequest'],
    execute(message, args){
      const Discord = require('discord.js');
      
      const featurerequest = 
    

    const AskForRecommendationEmbed = new Discord.MessageEmbed()
    .setColor('#DC143C')
    .setTitle('Feature Request')
    .setDescription(`Feature Request from ${}:-`)
    .addField('\u200b', 'Send the recommendation in the chat')
    .setFooter(`Requested by: ${message.author.username}`)
    
    
  
    
  
    message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 30000}).then(collected => {    
         
          //let UserRecommendation = (collected.first().attachments).array();
          let UserRecommendation = collected.first().content
  
          console.log(collected.first());
          const sendRecommendationEmbed = new Discord.MessageEmbed()
            .setTitle(`Recommendation by ${message.author.username}`)
            .setDescription(UserRecommendation)
            .setFooter(`There are two different commands for recommendations ;), >recommend and >addrec`)
            
            message.guild.channels.cache.find(i => i.name === `recommendations`).send(sendRecommendationEmbed)
            
          })
            
        
    } 
  } 
  */