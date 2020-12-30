module.exports = {
    name: 'reminder',
    description: "this is a reminder command",
    execute(message, args, client){
      const Discord = require('discord.js');
      const prefix = ">";
      const ms = require('ms');
        const db = require('quick.db');
      const timeUntilReminder = args[1];
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
        db.set(`remind.${message.author.id}`,Date.now() + ms(timeUntilReminder))
        const interval = setInterval(function(){
            if(Date.now() > db.fetch(`remind.${message.author.id}`)){
                db.delete(`remind.${message.author.id}`)
                message.author.send(`**Reminder:** ${Reminder}`)
                .catch(e => console.log(e))
                clearInterval(interval)
            }

        },1000)

        const ConfirmationEmbed = new Discord.MessageEmbed()
        .setColor(`#DC143C`)
        .setTitle('Reminder')
        .setDescription(`I have set your reminder`)
        .addField('\u200B',`I will remind you in ${timeUntilReminder}, with the reminder - ${Reminder}`);

        message.channel.send(ConfirmationEmbed);

   
    } 
  }