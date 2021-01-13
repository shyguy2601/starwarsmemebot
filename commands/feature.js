module.exports = {
    name: 'feature',
    description: "this is a feature request command",
    aliases: ['fr', 'featurerequest'],
    execute(message, args){
      const Discord = require('discord.js');
      const { MessageEmbed } = require('discord.js')
      
      const featurerequest = args.slice(1).join(" ")
    

    const UserRequestEmbed = new Discord.MessageEmbed()
    .setColor('#DC143C')
    .setTitle('Feature Request')
    .setDescription(`Feature Request from ${message.author} in server ${message.guild.name}. Their Request is \n
    ${featurerequest}`)
   
    
    const RequestWasSentEmbed = new Discord.MessageEmbed()
    .setColor('#DC143C')
    .setTitle('Success!')
    .setDescription(`Your bot feature request has successfully been sent to Shyguy!`)
    .addField(`\u200B`,`Your request:- ${featurerequest}`)
    .setFooter(`Feature request from ${message.author.username}`)

    if(!featurerequest){
        message.channel.send('You need to give a feature request!')
        return;
    }
    message.client.users.fetch("704708159901663302").then(user=>{
        user.send(UserRequestEmbed)
        .then(embed => {
          embed.react('✉️')
          message.channel.send(RequestWasSentEmbed);
        })
      })
    
  
    
  
    
            
        
    } 
  } 
  