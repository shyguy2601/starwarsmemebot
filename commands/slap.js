const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'slap',
    description: "slap another user",
    execute: (message, args) => {
      if(message.channel.type == 'dm'){
        return message.channel.send('Sorry this command does not work in DMs');
      }
      
        if (!message.author.bot) {
            let slapped = message.mentions.users.first();
              if(userToSlap.id == "704708159901663302") {            //ignore this for someone bot
              message.channel.send("Sorry but i cant slap my owner") 
              return;
    }

            if (!slapped)
                return message.channel.send(`Mention a user to slap!`)
            else {
                const author = message.author.username;
                fetch('https://nekos.life/api/v2/img/slap')
                    .then(res => res.json())
                    .then(json => {
                        const Embed = new MessageEmbed()
                            .setImage(json.url)
                            .setTitle(`${message.author.username} kissed ${slapped.username}`) //hug msg
                        message.channel.send(Embed)
                    })
                    .catch(err => console.log(err));
            }
        }
    }
}