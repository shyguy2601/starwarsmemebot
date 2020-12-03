const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client();
//const config = require('./config.json')
const prefix = '>';

const fs = require('fs');

const fetch = require('node-fetch')

const meme_list = [
    `./memes/meme1.jpg`,
    `./memes/meme2.jpg`,
    `./memes/meme3.jpg`,
]



Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);

}
const activities_list = [ 
    "Prefix is >",
    "This bot is currently in development, contact ShyGuy for more information about me"]

    let i = 0;

Client.once('ready', () => {
    console.log('Online!');
    setInterval(() => {
        if (i > activities_list.length) { i = 0 }
        Client.user.setActivity(activities_list[i]);
        i++; 
    }, 10000);
    });

Client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.trim().split(/ +/g);
      
 const command = args[0].slice(prefix.length).toLowerCase(); 

 if(Client.commands.get(command))
 Client.commands.get(command).execute(message, args);
else if (message.channel.id === '784015463747026959') {
   message.attachments.forEach(attachment => {
       const userMemeEmbed = new Discord.MessageEmbed()
           .setTitle(`Meme Entry by ${message.author.username}`)
           .setImage(attachment.url)
           .setDescription(`If you like the meme then react with 👍 or if you don't like it, react with 👎`)
       message.guild.channels.cache.find(i => i.id === `771625972792557591`).send(userMemeEmbed)
           .then(embed => {
               embed.react('👍')
                   .then(() => embed.react('👎'));
           })
   })
} else
 message.reply("Command not found");


});

Client.login(process.env.DJS_TOKEN);