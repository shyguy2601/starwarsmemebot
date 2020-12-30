const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports ={
    name: 'servercount',
    description: "A server count command",
    aliases: ['sc'],
    execute(message,args,client){
        if(message.channel.type == "text"){
        const guilds = client.guilds.cache.array()
       const ServerCountEmbed = new Discord.MessageEmbed()
        .setColor(`#FFD0F0`)
        .setTitle(`Server Count`)
        ServerCountEmbed.setDescription(`\`\`\`\nServer Count : ${guilds.length}\`\`\``);
 
       message.channel.send(ServerCountEmbed)
        }if(message.channel.type == "dm"){
            const guilds = client.guilds.cache.array()
            const ServerCountEmbed = new Discord.MessageEmbed()
             .setColor(`#FFD0F0`)
             .setTitle(`Server Count`)
             ServerCountEmbed.setDescription(`\`\`\`\nServer Count : ${guilds.length}\`\`\``);

        }
    }
} 