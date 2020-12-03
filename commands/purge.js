module.exports = {
    name: 'purge',
    description: "this is a purge command",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
    const messageArray = message.content.split(' ');
	const arguments = messageArray.slice(1);
    if(message.channel.type === "dm") return message.send('This command cannot be used in DMs');
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    
    let deleteAmount;

    if (isNaN(arguments[0]) || parseInt(arguments[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(arguments[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(arguments[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
    }   

}
