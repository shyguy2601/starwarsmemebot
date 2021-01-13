const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client();
const Topgg = require('@top-gg/sdk')
const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4MzYyOTI3NTU0NjY0ODU3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEwNTM0NzI5fQ.3-H1gTTG570tJ6P-vA7TD7qAAfQ8NSFdaFLbNH1B7pY')

module.exports = {
    name: 'votes',
    description: "Get's the vote link",
    execute(message, args){

      let has_voted;

      if (api.hasVoted(message.author.id)) { has_voted = "✅ You have voted for **[VibeMaster](https://top.gg/bot/783629275546648577/vote)**!"; } else { has_voted = "❌ You have not voted for **[VibeMaster](https://top.gg/bot/783629275546648577/vote)**!" }

    const VoteEmbed = new Discord.MessageEmbed()
      .setColor('#3586cd')
      .setTitle('Vote for VibeMaster')
      .addField('Vote Status', has_voted);
    message.channel.send(VoteEmbed);
  }
}