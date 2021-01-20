module.exports = {
  name: 'channeltopic',
  description: "sets the channel topic",
  aliases: ['ct'],
  execute(message, args){
    const Discord = require('discord.js');
    const { MessageEmbed } = require('discord.js')
    
    const noTopicEmbed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Error')
      .setDescription('You need to give a channel topic for me to change the topic to');

      const missingPermEmbed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Error')
      .setDescription(`You are lacking the MANAGE_CHANNELS permission to use this command`)

        if(!message.member.hasPermission("MANAGE_CHANNELS")){
         
          message.channel.send(missingPermEmbed)
          return;
      }
  

    
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")){
        message.channel.send('Error')
        console.log(`Bot doesn't have the right permission`)
        return;
    }
    const TopicForChannel = args.slice(1).join(" ")
   if(!TopicForChannel){
      
      message.channel.send(noTopicEmbed)
      return;

   }
      const channel = message.channel;
    channel.setTopic(`${TopicForChannel}`)
.then(TopicForChannel => console.log(`${message.channel.name}'s new topic is "${TopicForChannel.topic}" in the server ${message.guild.name}`))
.catch(console.error);
  
message.delete();
const embed = new Discord.MessageEmbed()
.setColor('#00FF00')
.setTitle(`Success!`)
.setDescription(`The channel topic was changed`)
.addField(`New Channel Topic:-`,`${TopicForChannel}`)
.setFooter(`Changed by ${message.author.username}`)
.setTimestamp()

message.channel.send(embed)
      
  } 
} 