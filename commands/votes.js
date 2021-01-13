const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client();
const Topgg = require('@top-gg/sdk')
const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4MzYyOTI3NTU0NjY0ODU3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEwNTM2NjQ2fQ.VjiMY2oLnuCVIkchA1el0tO383TuRGVTc6YBjINthg4')

module.exports = {
    name: 'votes',
    description: "Get's the vote link",
   async execute(message, args){

      let has_voted;

      let votes = [];

      let apiVotes = await api.getVotes();
      for (let i = 0; i < 10; i++) {
        votes.push(i+1 + " - " + apiVotes[i]["username"] + "#" + apiVotes[i]["discriminator"]);
      }

      let canVote = await api.hasVoted(message.author.id)

      if (canVote) { has_voted = "✅ You have voted for **[VibeMaster](https://top.gg/bot/783629275546648577/vote)**!"; } else { has_voted = "❌ You have not voted for **[VibeMaster](https://top.gg/bot/783629275546648577/vote)**!" }

    const VoteEmbed = new Discord.MessageEmbed()
      .setColor('#3586cd')
      .setTitle('Vote for VibeMaster')
      .setDescription("```css\n[ RECENT VOTES ]\n\n" + votes.join('\n') + "```")
      .addField('Vote Status', has_voted);
    message.channel.send(VoteEmbed);
  }
}