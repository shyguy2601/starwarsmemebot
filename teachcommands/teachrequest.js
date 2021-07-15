module.exports = {
    name: 'request',
    description: "this is a request command",
    aliases: ['r', 'rqst'],
    execute(message, args, client){
      const Discord = require('discord.js');
      const { MessageEmbed } = require('discord.js')
      
      const featurerequest = args.slice(1).join(" ")
    

    const UserRequestEmbed = new Discord.MessageEmbed()
    .setColor('#DC143C')
    .setTitle('Request')
    .setDescription(`Request from ${message.author}. Their Request is \n
    ${featurerequest}`)
    .setTimestamp()
   
    
    const RequestWasSentEmbed = new Discord.MessageEmbed()
    .setColor('#DC143C')
    .setTitle('Success!')
    .setDescription(`Your request has successfully been submitted!`)
    .addField(`\u200B`,`Your request:- ${featurerequest}`)
    .setFooter(`Request from ${message.author.username}`)
    .setTimestamp()

    if(!featurerequest){
        message.channel.send('You need to give a request!')
        return;
    }
       client.channels.get(`865066844661481504`).send(UserRequestEmbed)
    message.client.users.fetch("704708159901663302").then(user=>{
        user.send(UserRequestEmbed)
        .then(embed => {
          embed.react('✉️')
          message.channel.send(RequestWasSentEmbed);
        })
      })
    
  
    
  
    
            
        
    } 
  } 
  
