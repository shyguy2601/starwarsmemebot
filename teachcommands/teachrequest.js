module.exports = {
    name: 'request',
    description: "this is a request command",
    aliases: ['r', 'rqst'],
    execute(message, args){
      const Discord = require('discord.js');
      const { MessageEmbed } = require('discord.js')
      
      const featurerequest = args.slice(1).join(" ")
    

    const UserRequestEmbed = new Discord.MessageEmbed()
    .setColor('#DC143C')
    .setTitle('Request')
    .setDescription(`Request from ${message.author} in server ${message.guild.name}. Their Request is \n
    ${featurerequest}`)
   
    
    const RequestWasSentEmbed = new Discord.MessageEmbed()
    .setColor('#DC143C')
    .setTitle('Success!')
    .setDescription(`Your request has successfully been submitted!`)
    .addField(`\u200B`,`Your request:- ${featurerequest}`)
    .setFooter(`Request from ${message.author.username}`)

    if(!featurerequest){
        message.channel.send('You need to give a request!')
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
  
