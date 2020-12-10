module.exports = {
  name: 'help',
  description: "this is a help command",
  execute(message, args) {
      const Discord = require('discord.js');
      const prefix = ">";
      const { MessageEmbed } = require('discord.js');
      const NextToCommand = "[] next to the command name is a mandatory thing for the command to work"
      const insultExample = ">insult [ping the user you want to insult]"

      const helpEmbed = new Discord.MessageEmbed()
          .setTitle(`Help - \`\`${NextToCommand}\`\``)
          .addFields(
          { name: '__Available Commands:-__', value: '\u200B' }, 
          { name: '__Information:-__', value: '\u200B'},
          { name: '>userinfo / >whois / >ui', value: 'Shows the information of a member', inline: true},
          //{ name: '>serverinfo / >si', value: 'Shows the information of the server', inline: true},
          //{ name: '>botinfo / >bi / >info', value: 'Shows the information of the bot', inline: true},
          { name: `__Meme Related Commands__`, value: '\u200B' }, 
          { name: '>meme / >m', value: 'Get a random meme from reddit', inline: true }, 
          { name: '>rickandmortymeme / >ramm', value: 'Get a random rick and morty meme from reddit', inline: true }, 
          { name: '>starwarsmeme / >swmeme / >swm', value: 'Get a starwars meme from reddit', inline: true }, 
          { name: '>harrypottermeme / >hpmeme / >hpm', value: 'Get a harry potter meme from reddit', inline: true })
          .setTimestamp()
          .setFooter(`Requested by ${message.author.username}`);

          if (message.guild.id == '396021514740301825')
          helpEmbed.addFields({ name: '>entermeme', value: 'Enter a meme into meme-entrys to try win the meme competition', inline: true })

      helpEmbed.addFields({ name: '__Fun Related Commands__', value: '\u200B' }, { name: `${insultExample}`, value: `Insults the mentioned user`, inline: true });

      message.channel.send(helpEmbed);
  }
} 