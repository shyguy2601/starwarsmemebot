module.exports = {
  name: 'messageowner',
  description: "this is a message command",
  aliases:['message'],
  execute(message, args, client){
  
  const Discord = require('discord.js');
  
  
  const userwasmessagedembed = new Discord.MessageEmbed()
  .setColor(0x00F5FF)
  .setTitle('Success!')
  .setDescription(`The message was successfully sent to ShyGuy`)
  .setAuthor(`Server:- ${message.guild.name}`);
  

  const couldnotmessageuserembed = new Discord.MessageEmbed()
  .setColor(0x00F5FF)
  .setTitle('Error Occurred')
  .setDescription('I was unable to message shyguy, their DMs are off')

  
  let messagetosend = args.slice(1).join(" ");
    if(!messagetosend) return  message.channel.send("No message given to send to the user");

    const usermessageembed = new Discord.MessageEmbed()
      .setColor(0x00F5FF)
      .setDescription(`${message.author.username} from the server ***${message.guild.name}*** said ${messagetosend}`);
      
      message.client.users.fetch("704708159901663302").then(user=>{
        user.send(usermessageembed)
        .then(embed => {
          embed.react('✉️')
          message.channel.send(userwasmessagedembed);
        })
      })
      
  }
}    
    