
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ping',
    description: 'Displays the bot ping',
        async execute(message, args, client) {

     message.channel.send('Calculating ping...').then((msg) => {
        const pingembed = new Discord.MessageEmbed()
         
            .setDescription('Ping!')
            .setColor('#00D166')
            .addField('Ping latency:- ', `${Date.now() - message.createdTimestamp}ms`)
            .addField('API latency:- ', `${Math.round(client.ws.ping)}ms`)
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({
                dynamic: true,
                format: "png",
            }))
            .setTimestamp()
         msg.edit(pingembed)
     })  
    }
}

