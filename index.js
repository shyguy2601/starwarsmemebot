const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client();
//const config = require('./config.json')
const prefix = '>';

const fs = require('fs');

const fetch = require('node-fetch')

Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);

}
const activities_list = [ 
    "Prefix is > , do >meme",
    "I'm basically just a meme bot right now",
    ">help",
    "Developed by ShyGuy#5504"]

    let i = 0;

Client.once('ready', () => {
    console.log('Online!');
    setInterval(() => {
        if (i > activities_list.length) { i = 0 }
        Client.user.setActivity(activities_list[i]);
        i++; 
    }, 10000);
    });

    Client.on(`messageDelete`, function(message, channel){
      if(message.mentions.users.first() || message.mentions.roles.first()){
        if(!message.author.bot) {
          const usersMentioned = message.mentions.users;
          if (usersMentioned.first().id === message.author.id && usersMentioned.size === 1) return;
          
                const GhostPingEmbed = new MessageEmbed();
                GhostPingEmbed.setColor(message.member.displayColor);
                GhostPingEmbed.setTitle("Ghost Ping");
                GhostPingEmbed.addField("Author:- ", message.author);
                GhostPingEmbed.addField("Message:- ", message.content);
                GhostPingEmbed.setColor(message.member.displayColor);
                message.channel.send(GhostPingEmbed);
        } else if(!message.mentions.users.first() || message.mentions.roles.first()){
          console.log(`no ping detected`)
      }
    }
    })

    Client.on('message', message => {

        if(!message.content.startsWith(`${prefix}`)) return;
        if (message.author.bot) return;
    
        const args = message.content.trim().split(/ +/g);
      
        const commandName = args[0].slice(prefix.length).toLowerCase();
      
        if (message.content == `<@!783629275546648577> prefix`){
          Client.commands.get(`prefix`).execute(message, args);
        }
        if (message.content == `pls meme` || message.content==`Pls meme`){
            message.reply('***Pls meme is disabled use >meme instead***')
        }
        const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
      
        if(message.channel.id === '784015463747026959' & (message.guild.id == '784015462303399958'))
        if(message.guild.id != '784015462303399958') return message.channel.send(`Not in correct server for this command`);{
          message.attachments.forEach(attachment => {
            const userMemeEmbed = new Discord.MessageEmbed()
              .setColor(message.member.displayColor)
              .setTitle(`Meme Entry by ${message.author.username}`)
              .setImage(attachment.url)
              .setDescription(`If you like the meme then react with 👍 or if you don't like it, react with 👎`)
            message.guild.channels.cache.find(i => i.name === `meme-entry`).send(userMemeEmbed)
              .then(embed => {
                embed.react('👍')
                  .then(() => embed.react('👎'));
              })
          })
          
        } if (!command) return;
      
        command.execute(message, args);

        
      });

Client.login(process.env.DJS_TOKEN);