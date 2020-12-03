module.exports ={
    name: 'autoentermeme',
    description: 'Automeme submit',
    execute(message, args){
        const Discord = require('discord.js');
        const prefix = ">";

    message.attachments.forEach(attachment => {
        const userMemeEmbed = new Discord.MessageEmbed()
            .setTitle(`Meme Entry by ${message.author.username}`)
            .setImage(attachment.url)
            .setDescription(`If you like the meme then react with 👍 or if you don't like it, react with 👎`)
        message.guild.channels.cache.find(i => i.id === `784020687013675038`).send(userMemeEmbed)
            .then(embed => {
                embed.react('👍')
                    .then(() => embed.react('👎'));
            })
        
        })
    }    
}