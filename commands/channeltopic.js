module.exports = {
    name: 'channeltopic',
    description: "sets the channel topic",
    aliases: ['ct'],
    execute(message, args){
      const Discord = require('discord.js');
      const { MessageEmbed } = require('discord.js')
      const TopicForChannel = args.slice(1).join(" ")
      if(message.author.id != '704708159901663302'){
          console.log(`${message.author.username} tried to change channel topic to ${TopicForChannel}`)
          return;
      }
      
      if(!message.guild.me.hasPermission("MANAGE_CHANNELS")){
          console.log(`Bot doesn't have the right permission`)
          return;
      }
     
        const channel = message.channel;
      channel.setTopic(`${TopicForChannel}`)
  .then(TopicForChannel => console.log(`Channel's new topic is ${TopicForChannel.topic}`))
  .catch(console.error);
    
  message.delete();
            
        
    } 
  } 