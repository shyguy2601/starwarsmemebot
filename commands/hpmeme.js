const Discord = require('discord.js');
const https = require('https');
 
module.exports = {
    name: 'hpmeme',
    description: 'Sends harry potter meme.',
    aliases:['harrypottermeme', 'hpm'],
    execute(message, args) {
        if (message.channel.type == "text") {
            function getMeme() {
                return new Promise((resolve, reject) => {
                    https.get('https://api.macedon.ga/reddit/random/subreddit?sub=harrypottermemes', (resp) => {
                        let data = '';
                        resp.on('data', (chunk) => {
                            data += chunk;
                        });
                        resp.on('end', () => {
                            var data = JSON.parse(data);
                            if (data.image.includes("https://i.redd.it/"))
                                resolve(data);
                            else
                                getMeme().then(data => resolve);
                        });
                    });
                });
            }
        
            getMeme().then(data => {
                const embed = new Discord.MessageEmbed()
                    .setColor(message.member.displayColor)
                    .setTitle(data.title)
                    .setURL(data.permalink)
                    .setImage(data.image)
                    .setTimestamp()
                    .setFooter(`Requested by ${message.author.username}`)
                message.channel.send(embed);
            });
        }if (message.channel.type == "text") {
            function getMeme() {
                return new Promise((resolve, reject) => {
                    https.get('https://api.macedon.ga/reddit/random/subreddit?sub=harrypottermemes', (resp) => {
                        let data = '';
                        resp.on('data', (chunk) => {
                            data += chunk;
                        });
                        resp.on('end', () => {
                            var data = JSON.parse(data);
                            if (data.image.includes("https://i.redd.it/"))
                                resolve(data);
                            else
                                getMeme().then(data => resolve);
                        });
                    });
                });
            }
        
            getMeme().then(data => {
                const embed = new Discord.MessageEmbed()
                    .setColor(message.member.displayColor)
                    .setTitle(data.title)
                    .setURL(data.permalink)
                    .setImage(data.image)
                    .setTimestamp()
                    .setFooter(`Requested by ${message.author.username}`)
                message.channel.send(embed);
            });
        }
          
       
    },
};
