const Discord = require('discord.js');
const https = require('https');
 
module.exports = {
    name: 'starwarsmeme',
    description: 'Sends a star wars meme.',
    execute(message, args) {
            https.get('https://api.macedon.ga/reddit/random/subreddit?sub=starwarsmemes', (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    var res = JSON.parse(data);
                    const embed = new Discord.MessageEmbed()
                        .setTitle(res.title)
                        .setURL(res.permalink)
                        .setImage(res.image)
                        .setTimestamp()
                    message.channel.send(embed);
                });
            });
        aliases:[
            "swmeme"
        ]
    },
};