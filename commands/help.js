module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args){
        const Discord = require('discord.js');
        const prefix = ">";
        const { MessageEmbed } = require('discord.js');
        
        const helpEmbed = new Discord.MessageEmbed()
       
        //.setColor(message.member.displayColor)
	    .setTitle('Available Commands')
	    .setAuthor('Help')
	    .addFields(
            { name: 'Meme Related Commands', value: '\u200B' },
            { name: '>meme / >m', value: 'Get a random meme from reddit', inline: true },
            { name: '>starwarsmeme / >swmeme / >swm', value: 'Get a starwars meme from reddit', inline: true },
            { name: '>harrypottermeme / >hpmeme / >hpm', value: 'Get a harry potter mmeme from reddit', inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Fun Related Commands', value: '\u200B' },
            { name: `>insult [ping the user you want to insult]`, value: `Insults the mentioned user`, inline: true},
		    
	    )
	    .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`);
       
        message.channel.send(helpEmbed);


  }
}