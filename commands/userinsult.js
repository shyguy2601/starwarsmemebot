const { createError } = require('./userinsult.js');
const https = require('https');

module.exports = {
    name: 'insult',
    description: 'A command for users to insult eachother',
    execute(message, args) {

        function createWarning(warning) {
            const warningEmbed = new Discord.MessageEmbed()
                .setColor(message.member.displayColor)
                .setDescription(warning)
                .setTimestamp()
                return warningEmbed;
        }

        if (!message.mentions.users.size) {
            return message.channel.send(createWarning("You didn't tell me who to insult!"));
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