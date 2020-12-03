module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args){
        const Discord = require('discord.js');
        const prefix = ">";
        const { MessageEmbed } = require('discord.js');
        
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	    .setTitle('Available Commands')
	    .setAuthor('Help')
	    .addFields(
            { name: '>meme', value: 'Get a random meme from reddit', inline: true },
            { name: '>starwarsmeme / >swmeme', value: 'Get a starwarsmeme from reddit', inline: true },
		    { name: '\u200B', value: '\u200B' },
		    
	    )
	    .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`);
       
        message.channel.send(helpEmbed);


  }
}