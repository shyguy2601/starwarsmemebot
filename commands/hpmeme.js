const Discord = require('discord.js');
const https = require('https');
 
module.exports = {
    name: 'hpmeme',
    description: 'Sends harry potter meme.',
    aliases:['harrypottermeme'],
    execute(message, args) {
            https.get('https://api.macedon.ga/reddit/random/subreddit?sub=harrypottermemes', (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    var res = JSON.parse(data);
                    const embed = new Discord.MessageEmbed()
                        .setColor(message.member.displayColor)
                        .setTitle(res.title)
                        .setURL(res.permalink)
                        .setImage(res.image)
                        .setTimestamp()
                        .setFooter(`Requested by ${message.author.username}`)
                    message.channel.send(embed);
                });
            });
       
    },
};