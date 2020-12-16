const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
let help = require('../data/help.json');
module.exports = {
  name: 'help',
  description: "this is a help command",
  execute(message, args) {
      const Discord = require('discord.js');
      const prefix = ">";
      const { MessageEmbed } = require('discord.js');
      const NextToCommand = "[] next to the command name is a mandatory thing for the command to work"
      const insultExample = ">insult [ping the user you want to insult]"

      const embed = new Discord.MessageEmbed()
          .addField('`Fun Commands`', '😂', true)
          .addField('`Information Commands`', '💻', true)
          .setTimestamp()
          .setFooter(`Requested by ${message.author.username}`);
message.channel.send(embed).then((message) => {
  message.react('🏠').then(() => message.react('😂')).then(() => message.react('💻')).then(()=> {
    const filter = (reaction, user) => {
      return ['🏠', '😂', '💻'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    const collector = message.createReactionCollector(filter, { time: 30000 });
    collector.on('collect', (reaction, user) => {
      const embed = new Discord.MessageEmbed()
      .addField('`Fun Commands`', '😂', true)
      .addField('`Information Commands`', '💻', true)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`);

      if(reaction.emoji.name === '🏠'){
      embed.addField('`Fun Commands`', '😂', true)
      embed.addField('`Information Commands`', '💻', true)
      }else if(reaction.emoji.name === '😂'){
        help["fun"].forEach(command =>{
          embed.addField(command.name, command.description)
        });
      }else if(reaction.emoji.name === '💻'){
        help["information"].forEach(command =>{
          embed.addField(command.name, command.description)
        });
        message.edit(embed);
        try { reaction.users.remove(message.author.id); } catch {}
      }
    })
    collector.on('end', collected => {
      try{
        message.delete();
        message.react('👌');
      } catch {}
    })
  })
})
  }
} 