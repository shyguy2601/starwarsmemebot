const https = require('https');
const Discord = require('discord.js');
module.exports = {
    name: 'insult',
    description: 'A command for users to insult eachother',
    execute(message, args) {


    const warningEmbed = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle(`You didn't tell me who to insult!`)
    .setDescription('Correct usage of this command is `>insult [ping the user you want to insult]`, For example:-')
    .addField('`>insult @discorduser`')
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
                    message.channel.send(taggedUser.username + " " + data.toLowerCase() + ".");
                });
            }).on("error", (err) => {
                message.channel.send(createError("Error!\n" + err.message));
            });
        }
    },
};