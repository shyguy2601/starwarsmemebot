const Discord = require('discord.js');
const https = require('https');
 
module.exports = {
    name: 'rickandmortymeme',
    description: 'Sends a Rick and Morty meme.',
    aliases: [`ramm`],
    execute(message, args) {
        if(message.channel.type == "text"){
            https.get('https://api.macedon.ga/reddit/random/subreddit?sub=MortyMemes', (resp) => {
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
        }if(message.channel.type == "dm"){
            https.get('https://api.macedon.ga/reddit/random/subreddit?sub=MortyMemes', (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    var res = JSON.parse(data);
                    const embed = new Discord.MessageEmbed()
                        .setColor('#DC143C')
                        .setTitle(res.title)
                        .setURL(res.permalink)
                        .setImage(res.image)
                        .setTimestamp()
                        .setFooter(`Requested by ${message.author.username}. Please note that some of these memes will keep loading, this due to an issue with the api, which i cannot fix, so just do >ramm or >rickandmortymeme again :)`)
                    message.channel.send(embed);
                });
            });
        }
    },
};