const Discord = require('discord.js');
const utils = require("../data/utils");
const snek = require('snekfetch');

module.exports = {
    name: "madlibs",
    execute: async(message, args) => {
        message.channel.send(utils.createLoading()).then(async(msg) => {
            const req = await snek.get("http://madlibz.herokuapp.com/api/random");
            const data = req.body;
            var ended = false;
            const filter = m => m.author.id === message.author.id;
            const collector = message.channel.createMessageCollector(filter, { time: 240000 });

            let blanks = data.blanks;
            let uinput = [];

            msg.edit(generateEmb(blanks.shift()));

            collector.on('collect', m => {
                if (m.content.split("").length <= 12) {
                    uinput.push("**" + m.content + "**");
                    var val = blanks.shift();
                    if (val) {
                        msg.edit(generateEmb(val, uinput));
                        m.delete().catch(() => {});
                    } else {
                        var text = "";
                        data.value.forEach((dat, index) => {
                            if (index < data.value.length - 1)
                                text += `${dat}${uinput[index] || ""}`;
                        });
                        const embed = new Discord.MessageEmbed()
                            .setAuthor(message.member.user.username, message.member.user.displayAvatarURL({ dynamic: true }))
                            .setColor(utils.randomHex())
                            .setTitle(data.title)
                            .setDescription(text);
                        msg.channel.send(embed);
                        msg.delete();
                        collector.stop('001');
                    }
                } else {
                    m.delete().catch(() => {});
                    m.reply("please, use a shorter word!").then(msg => {
                        msg.delete(3000);
                    });
                }
            });

            collector.on('end', (collected, reason) => {
                if (reason !== '001') msg.edit.send(utils.createWarning("Timeout!"));
            });
        });
    }
}

function generateEmb(data, ui) {
    var a = checkData(data);
    const embed = new Discord.MessageEmbed()
        .setTitle(`<a:8104LoadingEmote:795676697759449108> Write ${a} ${data}`)
    if (ui)
        embed.setDescription(ui.join(", "));
    return embed;
}

function checkData(word) {
    var vowelRegex = '^[aieouAIEOU].*';
    var matched = word.match(vowelRegex);
    if (matched) return "an";
    else return "a";
}