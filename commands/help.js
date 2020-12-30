const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
let help = require('../data/help.json');
module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args) {
        if(message.channel.type == "text"){
        const member = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.member;
        

        const embed = new Discord.MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
            .addField('\u200B',`Join the support server if you are confused:- (https://discord.gg/hcpK8kvjPc)`)
            .setColor(message.member.displayColor)
            .setTitle('Help')
            .addField('`Fun Commands `', '😂', true)
            .addField('`More Fun Commands `', '😭', true)
            .addField('`Information Commands `', '💻', true)
            .addField('`Utilities`', '🔨', true)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`)
            //.setAuthor("Original help command made by macedonga#5797", "https://cdn.macedon.ga/p.n.g.r.png");

        message.channel.send(embed).then((msg) => {
            msg.react('🏠').then(() => msg.react('😂')).then(() => msg.react('😭')).then(() => msg.react('💻')).then(() => msg.react('🔨')).then(() => {
                const filter = (reaction, user) => {
                    return ['🏠', '😂','😭', '💻', '🔨'].includes(reaction.emoji.name) && user.id === message.author.id;
                };
                const collector = msg.createReactionCollector(filter, { time: 30000 });
                collector.on('collect', (reaction, user) => {
                    
                    const embed = new Discord.MessageEmbed()
                        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
                        .setColor(message.member.displayColor)
                        .setTimestamp()
                        .setFooter(`Requested by ${message.author.username} `)
                        //.setAuthor("Original help command made by macedonga#5797", "https://cdn.macedon.ga/p.n.g.r.png");

                    if (reaction.emoji.name === '🏠') {
                        embed.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
                        embed.addField('\u200B',`Join the support server if you are confused:- (https://discord.gg/hcpK8kvjPc)`)
                        embed.setColor(message.member.displayColor)
                        embed.setTitle('Help')
                        embed.addField('`Fun Commands `', '😂', true)
                        .addField('`More Fun Commands `', '😭', true)
                        embed.addField('`Information Commands `', '💻', true)
                        embed.addField('`Utilities`', '🔨', true)
                    } else if (reaction.emoji.name === '😂') {
                        help["fun"].forEach(command => {
                            embed.addField(command.name, command.description)
                        });
                    }else if(reaction.emoji.name === '😭') {
                     help["extra"].forEach(command =>{
                         embed.addField(command.name, command.description)
                     })   
                    }else if (reaction.emoji.name === '💻') {
                        help["information"].forEach(command => {
                            embed.addField(command.name, command.description)
                        });
                    } else if(reaction.emoji.name === '🔨'){
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
        }if(message.channel.type == "dm"){

            const member = message.author;
        

            const embed = new Discord.MessageEmbed()
                .addField('\u200B',`Join the support server if you are confused:- (https://discord.gg/hcpK8kvjPc)`)
                .setColor('#008000')
                .setTitle('Help')
                .addField('`Fun Commands `', '😂', true)
                .addField('`More Fun Commands `', '😭', true)
                .addField('`Information Commands `', '💻', true)
                .addField('`Utilities`', '🔨', true)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`)
                //.setAuthor("Original help command made by macedonga#5797", "https://cdn.macedon.ga/p.n.g.r.png");
    
            message.channel.send(embed).then((msg) => {
                msg.react('🏠').then(() => msg.react('😂')).then(() => msg.react('😭')).then(() => msg.react('💻')).then(() => msg.react('🔨')).then(() => {
                    const filter = (reaction, user) => {
                        return ['🏠', '😂','😭', '💻', '🔨'].includes(reaction.emoji.name) && user.id === message.author.id;
                    };
                    const collector = msg.createReactionCollector(filter, { time: 30000 });
                    collector.on('collect', (reaction, user) => {
                        
                        const embed = new Discord.MessageEmbed()
                            .setColor('#008000')
                            .setTimestamp()
                            .setFooter(`Requested by ${message.author.username} `)
                            //.setAuthor("Original help command made by macedonga#5797", "https://cdn.macedon.ga/p.n.g.r.png");
    
                        if (reaction.emoji.name === '🏠') {
                            embed.addField('\u200B',`Join the support server if you are confused:- (https://discord.gg/hcpK8kvjPc)`)
                            .setColor('#008000')
                            embed.setTitle('Help')
                            embed.addField('`Fun Commands `', '😂', true)
                            .addField('`More Fun Commands `', '😭', true)
                            embed.addField('`Information Commands `', '💻', true)
                            embed.addField('`Utilities`', '🔨', true)
                        } else if (reaction.emoji.name === '😂') {
                            help["fun"].forEach(command => {
                                embed.addField(command.name, command.description)
                            });
                        }else if(reaction.emoji.name === '😭') {
                         help["extra"].forEach(command =>{
                             embed.addField(command.name, command.description)
                         })   
                        }else if (reaction.emoji.name === '💻') {
                            help["information"].forEach(command => {
                                embed.addField(command.name, command.description)
                            });
                        } else if(reaction.emoji.name === '🔨'){
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
}