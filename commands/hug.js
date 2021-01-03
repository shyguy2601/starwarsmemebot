const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hug',
    description: "hug another user",
    execute: (message, args) => {
        if (!message.author.bot) {
            let hugged = message.mentions.users.first();
            if (!hugged)
                return message.channel.send(`Mention a user to hug!`)
            else {
                const author = message.author.username;
                fetch('https://nekos.life/api/v2/img/hug')
                    .then(res => res.json())
                    .then(json => {
                        const Embed = new MessageEmbed()
                            .setImage(json.url)
                            .setTitle(`${message.author.username} hugged ${hugged.username}`) //hug msg
                        message.channel.send(Embed)
                    })
                    .catch(err => console.log(err));
            }
        }
    }
}