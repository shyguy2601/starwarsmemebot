module.exports = {
    name: 'recommendation',
    description: "this is a recommendation command",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      
    

    const AskForRecommendationEmbed = new Discord.MessageEmbed()
    .setColor(message.guild.me.displayColor)
    .setTitle('Recommendation')
    .setDescription('What is your recommendation')
    .addField('\u200b', 'Send the recommendation in the chat')
    .setFooter(`Requested by: ${message.author.username}`)
    
    
  
    message.channel.send(AskForRecommendationEmbed);
  
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