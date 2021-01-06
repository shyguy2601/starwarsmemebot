module.exports = {
    name: 'ineedhelp',
    description: "Gets Mental Health support links",
    aliases: ['helpme'],
    
    execute(message, args){
      const Discord = require('discord.js');
      const { MessageEmbed } = require('discord.js');
     
      const mentalhealthhelpembed = new Discord.MessageEmbed()
      .setTitle(`You don't have to struggle through this alone`)
      .addField(`\u200b`,`https://www.depressioncenter.org/toolkit/im-looking-more-resources-1/helpful-mental-health-resources-0`)

      message.channel.send(mentalhealthhelpembed)

  }
}