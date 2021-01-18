const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'botusers',
    description: "Says the amount of users the bot has",
    aliases: ['bu'],
    async execute(message, args, client = new Discord.Client()) {
        try {
            let guilds = await client.guilds.cache
            guilds = guilds.array()
            if (message.channel.type == "text") {

                const BotUsersEmbed = new Discord.MessageEmbed()
                    .setColor(`#FFD0F0`)
                    .setTitle(`Bot Users`)
                BotUsersEmbed.setDescription(`\`\`\`\nBot Users : ${client.users.cache.array().length}\`\`\``);
                console.log(client.users.cache.array().length)

                message.channel.send(BotUsersEmbed)
            } if (message.channel.type == "dm") {

                const BotUsersEmbed = new Discord.MessageEmbed()
                    .setColor(`#FFD0F0`)
                    .setTitle(`Bot Users`)
                BotUsersEmbed.setDescription(`\`\`\`\nBot Users : ${client.users.cache.array().length}\`\`\``);
                message.channel.send(BotUsersEmbed)
            }
        } catch (e) {
            console.log(e.stack)
        }

    }
} 