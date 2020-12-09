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
    ">help"]

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

        if(!message.content.startsWith(`${prefix}`)) return;
        if (message.author.bot) return;
      
        const args = message.content.trim().split(/ +/g);
      
        const commandName = args[0].slice(prefix.length).toLowerCase();
      
        let _a, _b;
        if (message.mentions.users.first() || message.mentions.roles.first()) {
            if (!((_a = message.author) === null || _a === void 0 ? void 0 : _a.bot)) {
                var usersMentioned = message.mentions.users;
                if (((_b = usersMentioned.first()) === null || _b === void 0 ? void 0 : _b.id) === message.author.id && usersMentioned.size === 1)
                    return;
                var embed = new MessageEmbed();
                embed.setTitle("Ghost Ping Detected!");
                embed.addField("Author", message.author);
                embed.addField("Message", message.content);
                message.channel.send(embed);
            }
        }



        if (message.content == `<@!783629275546648577> prefix`){
          Client.commands.get(`prefix`).execute(message, args);
        }
        if (message.content == `pls meme` || message.content==`Pls meme`){
            message.reply('***Pls meme is disabled use >meme instead***')
        }
        const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
      
        if (message.channel.id === '784015463747026959') {
          message.attachments.forEach(attachment => {
            const userMemeEmbed = new Discord.MessageEmbed()
              .setTitle(`Meme Entry by ${message.author.username}`)
              .setImage(attachment.url)
              .setDescription(`If you like the meme then react with 👍 or if you don't like it, react with 👎`)
            message.guild.channels.cache.find(i => i.id === `784020687013675038`).send(userMemeEmbed)
              .then(embed => {
                embed.react('👍')
                  .then(() => embed.react('👎'));
              })
          })
          
        } if (!command) return;
      
        command.execute(message, args);
      });

Client.login(process.env.DJS_TOKEN);