module.exports = {
    name: 'slowmode',
    description: "Put on Slowmode",
    aliases: ['sm'],
    execute(message, args){
        const { channel } = message
      const Discord = require('discord.js');
      const { MessageEmbed } = require('discord.js');
      const prefix = ">";
      

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't use this")
      let duration = args[1].toLowerCase()
      if (duration === 'off'){
        duration = 0
      }
    if(isNaN(duration)){
        message.reply(`Please provide a number of seconds or the word "off"`)
        return;
    }
    channel.setRateLimitPerUser(duration)

    const slowmodeEmbed = new Discord.MessageEmbed()
    .setTitle('Success!')
    .setDescription(`The slowmode for this channel has been set to ${duration} seconds.`)
    .setFooter(`Set by ${message.author.username}`)
    message.channel.send(slowmodeEmbed);
  }
}