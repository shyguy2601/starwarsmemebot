const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client();
module.exports = {
    name: 'vote',
    description: "Get's the vote link",
    execute(message, args){
    const VoteEmbed = new Discord.MessageEmbed()
    .setColor(message.member.displayColor)
    .setTitle('Vote')
    .setDescription('Please vote for me on top.gg')
    .addField('Vote Link',`https://top.gg/bot/783629275546648577/vote`)
    message.channel.send(VoteEmbed);

  
  }
}