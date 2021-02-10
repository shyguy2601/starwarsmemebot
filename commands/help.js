const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
let help = require('../data/help.json');
module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args) {
        if(message.channel.type == "text"){
        
            const member = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.member;
            if(args[1] == 'information' || args[1] == 'Information'){
                const InformationHelpEmbed = new Discord.MessageEmbed()
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
                .setColor(message.member.displayColor)
                .setTitle('Information Commands')
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`)
                    help["information"].forEach(command =>{
                        InformationHelpEmbed.addField(command.name, command.description)
                })   
                    message.channel.send(InformationHelpEmbed)
                return;
            
            }else if(args[1] == 'fun2' || args[1] == 'Fun2'){
                const ExtraHelpEmbed = new Discord.MessageEmbed()
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
                .setColor(message.member.displayColor)
                .setTitle('More Fun Commands')
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`)
                    help["fun2"].forEach(command =>{
                        ExtraHelpEmbed.addField(command.name, command.description)
                })   
                    message.channel.send(ExtraHelpEmbed)
                return;
            
            }else if(args[1] == 'utilities' || args[1] == 'Utilities' || args[1] == 'Utils' || args[1] == 'utils'){
                const UtilsHelpEmbed = new Discord.MessageEmbed()
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
                .setColor(message.member.displayColor)
                .setTitle('Utility Commands')
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`)
                    help["utilities"].forEach(command =>{
                        UtilsHelpEmbed.addField(command.name, command.description)
                })   
                    message.channel.send(UtilsHelpEmbed)
                return;
            
            }else if(args[1] == 'fun' || args[1] == 'Fun'){
                const FunHelpEmbed = new Discord.MessageEmbed()
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
                .setColor(message.member.displayColor)
                .setTitle('Fun Commands')
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`)
                    help["fun"].forEach(command =>{
                        FunHelpEmbed.addField(command.name, command.description)
                })   
                    message.channel.send(FunHelpEmbed)
                return;
            
            }if(args[1] == 'slowmode' || args[1] == 'Slowmode'){
            const SlowmodeExample = ">slowmode 1m"
            const SlowmodeHelpEmbed = new Discord.MessageEmbed()
            .setColor(message.member.displayColor)
            .setTitle('Slowmode Help')
            .setDescription('This command is used to set a custom slowmode')
            .addField('Usage example:-', `\`\`${SlowmodeExample}\`\``)
            message.channel.send(SlowmodeHelpEmbed);
            return;

        }else if(args[1] == '8ball'){
            const EightBallExample = ">8ball Am I cool?"
            const EightBallHelpEmbed = new Discord.MessageEmbed()
            .setColor(message.member.displayColor)
            .setTitle('8Ball help')
            .setDescription(`Why is it saying "That doesn't seem to be a question, please try again!" ?\n
            This is because a question ends in a question mark, don't forget to end your question with a question mark!`)
            .addField('Usage example:-', `\`\`${EightBallExample}\`\``)
            message.channel.send(EightBallHelpEmbed);
            return;
}else if(args[1] == 'bonk' || args[1] == 'Bonk'){
    const BonkExample = ">bonk @Shyguy"
    const BonkHelpEmbed = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle('Bonk Help')
    .setDescription('This command is used to bonk another user')
    .addField('Usage Example:-',`${BonkExample}`)
    message.channel.send(BonkHelpEmbed)
    return;
}else if(args[1] == 'botinfo'){
    const BIcommandExample = ">botinfo"
    const BIhelpEmbed = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle('Botinfo help')
    .setDescription('This command gets the information of the bot')
    .addField('Usage Example:-', `${BIcommandExample}`)
    message.channel.send(BIhelpEmbed)
    return;
}else if(args[1] == 'botusers'){
    const BotUsersExample = ">botusers / >bu "
    const BotUsersHelpEmbed = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle('Botusers help')
    .setDescription('This command gets the amount of bot users')
    .addField('Usage Example:-', `${BotUsersExample}`)
    message.channel.send(BotUsersHelpEmbed)
    return;
}else if(args[1] == 'feature'){
    const FeatureCommandExample = ">feature / >featurerequest / >fr"
    const FeatureHelpEmbed = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle('Feature Request help')
    .setDescription('If you have any bot feature requests (commands) use this command, it will send the request to ShyGuy')
    .addField('Usage Example:-', `${FeatureCommandExample}`)
    message.channel.send(FeatureHelpEmbed) //i'm so exhausted
    return;
}
    const AlternativeHelp = "An alternative to using this is to do >help [Field Name]\nFor Example:- >help information"
        const embed = new Discord.MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
            .addField('\u200B',`Join the support server if you are confused:- (https://discord.gg/hcpK8kvjPc)`)
            .addField('\u200B',`All you VScode devs out there, you should totally use my VScode color theme extension:- (https://marketplace.visualstudio.com/items?itemName=HaydenTravers.color-theme#review-details)`)
            .addField('\u200B',`\`\`\`${AlternativeHelp}\`\`\``)
            .addField('Bot Invite',`Invite me to your own servers:- (https://top.gg/bot/783629275546648577)`)
            .setColor(message.member.displayColor)
            .setTitle('Help')
            .addField('`Fun Commands `', '😂', true)
            .addField('`Fun2`', '😭', true)
            .addField('`Information Commands `', '💻', true)
            .addField('`Utilities`', '🔨', true)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`)
           
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
                        

                    if (reaction.emoji.name === '🏠') {
                        embed.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
                        embed.addField('\u200B',`Join the support server if you are confused:- (https://discord.gg/hcpK8kvjPc)`)
                        .addField('\u200B',`All you VScode devs out there, you should totally use my VScode color theme extension:- (https://marketplace.visualstudio.com/items?itemName=HaydenTravers.color-theme#review-details)`)
                        embed.setColor(message.member.displayColor)
                        embed.setTitle('Help')
                        embed.addField('`Fun Commands `', '😂', true)
                        embed.addField('`Fun2`', '😭', true)
                        embed.addField('`Information Commands `', '💻', true)
                        embed.addField('`Utilities`', '🔨', true)
                    } else if (reaction.emoji.name === '😂') {
                        help["fun"].forEach(command => {
                            embed.addField(command.name, command.description)
                        });
                    }else if(reaction.emoji.name === '😭') {
                     help["fun2"].forEach(command =>{
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
          return message.channel.send(`Sorry this command doesn't work in DMs`);
        }

    }
}