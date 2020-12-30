module.exports = {
    name: 'message',
    description: "this is a message command",
    execute(message, args){
    
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

const usertomessage = message.mentions.members.first() || message.guild.members.cache.find(user => user.displayName == args[1]) || message.guild.members.cache.find(user => user.id == '704708159901663302');
if(usertomessage.id != '704708159901663302') {
    message.channel.send('You can only message the bot owner @ShyGuy')
    return;
}
let messagetosend = args.slice(2).join(" ");
      if(!messagetosend) return  message.channel.send("No message given to send to the user");

      const usermessageembed = new Discord.MessageEmbed()
        .setColor(0x00F5FF)
        .setDescription(`${message.author.username} from the server ***${message.guild.name}*** said ${messagetosend}`);
        usertomessage.send(usermessageembed)
        .then(embed => {
          embed.react('✉️')
       
        
        
        message.channel.send(userwasmessagedembed);
      }) 
      .catch(() => message.channel.send(couldnotmessageuserembed))
        
    }
  }    
      