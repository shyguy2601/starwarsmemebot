const https = require('https');
const Discord = require('discord.js');
module.exports = {
    name: 'insult',
    description: 'A command for users to insult eachother',
    execute(message, args) {

        const insultUsage = ">insult [ping the user you want to insult]"
        const UsageExample = ">insult @discorduser"
    const warningEmbed = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle(`You didn't tell me who to insult!`)
    .setDescription(`Correct usage of this command is `, "```" + ` ${insultUsage} `+"```" + ', For example:-')
    .addField('\u200B',"```" + ` ${UsageExample} `+"```")
    .setTimestamp();
                
        

        if (!message.mentions.users.size) {
            return message.channel.send((warningEmbed));
        } else {
            https.get('https://insult.mattbas.org/api/insult', (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    const taggedUser = message.mentions.users.first();
                    if(taggedUser.id == "704708159901663302") {
                        message.channel.send("Sorry but i cant slap my owner") 
                        return;
                    }else if(!taggedUser.id != "704708159901663302")
                    message.channel.send(taggedUser.username + " " + data.toLowerCase() + ".");
                });
            }).on("error", (err) => {
                message.channel.send(createError("Error!\n" + err.message));
            });
        }
    },
};