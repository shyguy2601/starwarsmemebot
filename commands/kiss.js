const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kiss',
    description: "kiss another user",
    execute: (message, args) => {
      if(message.channel.type == 'dm'){
        return message.channel.send('Sorry this command does not work in DMs');
      }
        if (!message.author.bot) {
            let kissed = message.mentions.users.first();
            if (!kissed)
                return message.channel.send(`Mention a user to kiss!`)
            else {
                const author = message.author.username;
                fetch('https://nekos.life/api/v2/img/kiss')
                    .then(res => res.json())
                    .then(json => {
                        const Embed = new MessageEmbed()
                            .setImage(json.url)
                            .setTitle(`${message.author.username} kissed ${kissed.username}`) //hug msg
                        message.channel.send(Embed)
                    })
                    .catch(err => console.log(err));
            }
        }
    }
}