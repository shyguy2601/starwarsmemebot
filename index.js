const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client();
const config = require('./config.json')
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

 if(command == 'entermeme'){
     Client.commands.get(`entermeme`).execute(message, args);
 } else if(command == 'dadjoke'){
    Client.commands.get(`dadjoke`).execute(message, args);
 }
});



Client.login(config.token);