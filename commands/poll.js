const Discord = require('discord.js');
const utils = require("../data/utils");

module.exports = {
    name: 'poll',
    description: 'Creates a poll.',
    guildOnly: true,
    execute(message, args) {
        if (!args) {
            return;
        }
        var wait = 3600000;
        if (utils.isNormalInteger(args[0])) {
            wait = Math.floor(Number(args[0])) * 60000;
            var poll = args.splice(1).join(" ");
        } else
            var poll = args.join(" ");
        if (poll === undefined)
            return message.channel.send(utils.createError("No question given!"));
        const embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle("📓 - Poll!")
            .addField("Question:", poll)
            .addField("🕘", utils.msToTime(wait))
            .addField("👍", "0", true)
            .addField("👎", "0", true)
            .setTimestamp();
        message.channel.send(embed).then(mes => {
            mes.react("👍").then(() => {
                mes.react("👎").then(() => {
                    const filter = (reaction, user) => {
                        return ['👍', '👎'].includes(reaction.emoji.name);
                    };
                    const collector = mes.createReactionCollector(filter, { time: wait });
                    collector.on('collect', (reaction, user) => {
                        const userReactions = mes.reactions.cache.filter(rec => rec.users.cache.has(user.id));
                        for (const react of userReactions.values()) {
                            if (react.emoji.name != reaction.emoji.name)
                                return reaction.users.remove(user.id);
                        }

                        const embed = new Discord.MessageEmbed()
                            .setColor('#00ff00')
                            .setTitle("📓 - Poll!")
                            .addField("Question:", poll)
                            .addField("🕘", utils.msToTime(wait))
                            .setTimestamp();
                        for (const react of mes.reactions.cache.values()) {
                            if (react.emoji.name === "👍")
                                embed.addField("👍", react.count - 1, true)
                            else if (react.emoji.name === "👎")
                                embed.addField("👎", react.count - 1, true)
                        }
                        mes.edit(embed);
                    });
                    collector.on('end', collected => {
                        const embed = new Discord.MessageEmbed()
                            .setColor('#00ff00')
                            .setTitle("📓 - Poll ended!")
                            .addField("Question:", poll)
                            .setTimestamp();
                        for (const react of mes.reactions.cache.values()) {
                            if (react.emoji.name === "👍")
                                embed.addField("👍", react.count - 1, true);
                            else if (react.emoji.name === "👎")
                                embed.addField("👎", react.count - 1, true);
                        }
                        mes.edit(embed);
                        mes.reactions.removeAll();
                    });
                });
                message.delete();
            });
        });
    },
};