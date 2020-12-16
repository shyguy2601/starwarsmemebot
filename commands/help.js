const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
let help = require('../data/help.json');
module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args) {

        const prefix = ">";

        const embed = new Discord.MessageEmbed()
            .addField('`Fun Commands `', '😂', true)
            .addField('`Information Commands `', '💻', true)
            .addField('`Utilities`', '🧰', true)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`)
            //.setAuthor("Original help command made by macedonga#5797", "https://cdn.macedon.ga/p.n.g.r.png");

        message.channel.send(embed).then((msg) => {
            msg.react('🏠').then(() => msg.react('😂')).then(() => msg.react('💻')).then(() => msg.react('🧰)')).then(() => {
                const filter = (reaction, user) => {
                    return ['🏠', '😂', '💻', '🧰)'].includes(reaction.emoji.name) && user.id === message.author.id;
                };
                const collector = msg.createReactionCollector(filter, { time: 30000 });
                collector.on('collect', (reaction, user) => {
                    console.log("here")
                    const embed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setFooter(`Requested by ${message.author.username}`)
                        //.setAuthor("Original help command made by macedonga#5797", "https://cdn.macedon.ga/p.n.g.r.png");

                    if (reaction.emoji.name === '🏠') {
                        embed.addField('`Fun Commands `', '😂', true)
                        embed.addField('`Information Commands `', '💻', true)
                        embed.addField('`Utilities`', '🧰)', true)
                    } else if (reaction.emoji.name === '😂') {
                        help["fun"].forEach(command => {
                            embed.addField(command.name, command.description)
                        });
                    } else if (reaction.emoji.name === '💻') {
                        help["information"].forEach(command => {
                            embed.addField(command.name, command.description)
                        });
                    } else if(reaction.emoji.name === '🧰'){
                      help["utilities"].forEach(command =>{
                        embed.addField(command.name, command.description)
                      }
                        )
                    }
                    msg.edit(embed);
                    try { reaction.users.remove(message.author.id); } catch {}
                });
              
            })
        })
    }
}