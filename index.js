const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client();
const prefix = '>';


const fs = require('fs');
Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);

}


const activities_list = [ 
  { text: ">help", type: 0},
  { text: "Developed by ShyGuy#5504", type: 0},
  { text: "you sleep 0_o", type: 3},
  { text: "27 days until Shyguy's 18th birthday!!", type: 0}]

  let i = 0;

Client.once('ready', () => {
  console.log('Online!');
  setInterval(() => {
    if (i >= activities_list.length)  i = 0; 
    Client.user.setPresence({ activity: { name: activities_list[i].text, type: activities_list[i].type } });
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
                if (message.guild.id == '396021514740301825'){
                  message.guild.channels.cache.find(c => c.name === `🤖-bot-commands`).send(GhostPingEmbed)
                }    
        } else if(!message.mentions.users.first() || message.mentions.roles.first()){
          console.log(`no ping detected`)
      }
    }
    })
    Client.on("messageDelete", async message => {

const messageDeletedEmbed = new Discord.MessageEmbed()

.setTimestamp()
.setTitle('Message Deleted')
.setDescription(`Message from ${message.author.username} deleted in ${message.guild.name}`)
.addField('\u200B', `Message content:- ${message.content}`)
Client.users.fetch('704708159901663302').then(user => {
        user.send(messageDeletedEmbed);  
      })
      
});

    Client.on('message', message => {
      const args = message.content.trim().split(/ +/g);
      
        const commandName = args[0].slice(prefix.length).toLowerCase();
      
      
        const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
      
      if((args[0].toLowerCase() == 'i\'m' || args[0].toLowerCase() == 'im') && (args[1])){
        if(args[1].toLowerCase() == 'dad'){
          return message.channel.send(`Impossible, you can't be dad, because i'm dad`);
        }
        message.channel.send(`Hi ${args.slice(1).join(' ')}, I'm dad`);
      }
     /* if (message.content == `pls meme` || message.content==`Pls meme`){
        message.reply('***Pls meme is disabled use >meme instead***')
    }*/
    
        if(!message.content.startsWith(`${prefix}`)) return;
        if (message.author.bot) return;
        if(!command) return;
      
        command.execute(message, args, Client);
        
        
      });
    
Client.login(process.env.DJS_TOKEN);