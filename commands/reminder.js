module.exports = {
    name: 'reminder',
    description: "this is a reminder command",
    execute(message, args, client){
      const Discord = require('discord.js');
      const prefix = ">";

      const timeUntilReminder = parseInt(args[1]);
        if(isNaN(args[1])){
            message.channel.send('The time until reminding needs to be a number')
            return;
        }
        if(!timeUntilReminder){
            message.channel.send('Please provide the amount of time until i need to remind you')
            return;
        }
        const Reminder = args.slice(2).join(" ")
        if(!Reminder){
            message.channel.send('You need to tell me what you need a reminder for')
            return;
        }
        const ConfirmationEmbed = new Discord.MessageEmbed()
        .setColor(`#DC143C`)
        .setTitle('Reminder')
        .setDescription(`I have set your reminder`)
        .addField(`I will remind you in ${timeUntilReminder}, with the reminder - ${Reminder}`);

        message.channel.send(ConfirmationEmbed);

   
    } 
  }