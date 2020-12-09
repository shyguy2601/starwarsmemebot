module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args){
        const Discord = require('discord.js');
        const prefix = ">";
        const { MessageEmbed } = require('discord.js');
        const NextToCommand = "[] next to the command name is a mandatory thing for the command to work"
          const insultExample = ">insult [ping the user you want to insult]"
        
        if(message.guild.id = '784015462303399958'){
        
          const GoodVibeHelpEmbed = new Discord.MessageEmbed()
          .setTitle(`Help - \`\`${NextToCommand}\`\`` )
          .addFields(
                {name:'__Available Commands:-__', value: '\u200B'},
                { name: `__Meme Related Commands__`, value: '\u200B' },
                { name: '>meme / >m', value: 'Get a random meme from reddit', inline: true },
                { name: '>starwarsmeme / >swmeme / >swm', value: 'Get a starwars meme from reddit', inline: true },
                { name: '>harrypottermeme / >hpmeme / >hpm', value: 'Get a harry potter meme from reddit', inline: true },
                { name: '>entermeme', value: 'Enter a meme into meme-entrys to try win the meme competition', inline: true},
                //{ name: '\u200B', value: '\u200B' },
                { name: '__Fun Related Commands__', value: '\u200B' },
                { name: `${insultExample}` , value: `Insults the mentioned user`, inline: true},
            
          )
          .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`);
           
            message.channel.send(GoodVibeHelpEmbed);
    
    
      }if(message.guild.id != '784015462303399958'){
          const helpEmbed = new Discord.MessageEmbed()
          .setTitle(`Help - \`\`${NextToCommand}\`\`` )
          .addFields(
                {name:'__Available Commands:-__', value: '\u200B'},
                { name: `__Meme Related Commands__`, value: '\u200B' },
                { name: '>meme / >m', value: 'Get a random meme from reddit', inline: true },
                { name: '>starwarsmeme / >swmeme / >swm', value: 'Get a starwars meme from reddit', inline: true },
                { name: '>harrypottermeme / >hpmeme / >hpm', value: 'Get a harry potter meme from reddit', inline: true },
                //{ name: '\u200B', value: '\u200B' },
                { name: '__Fun Related Commands__', value: '\u200B' },
                { name: `${insultExample}` , value: `Insults the mentioned user`, inline: true},
            
          )
          .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`);
           
            message.channel.send(helpEmbed);
    
    
      }
          
        }
          
          

        }
           
