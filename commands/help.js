module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args){
        const Discord = require('discord.js');
        const prefix = ">";
        const { MessageEmbed } = require('discord.js');
        
        const helpEmbed = new Discord.MessageEmbed
        .setColor('#0099ff')
	    .setTitle('Some title')
	    .setURL('https://discord.js.org/')
	    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	    .setDescription('Some description here')
	    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
	    .addFields(
		    { name: 'Regular field title', value: 'Some value here' },
		    { name: '\u200B', value: '\u200B' },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
	    )
	    .addField('Inline field title', 'Some value here', true)
	    .setImage('https://i.imgur.com/wSTFkRM.png')
	    .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        console.log(helpEmbed);
        message.channel.send(helpEmbed);


  }
}