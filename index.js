const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client();
const prefix = '%';


const fs = require('fs');
Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);

}
Client.ws.on('INTERACTION_CREATE', async interaction => {
  require(`./slash_commands/${interaction.data.name}.js`)(client, interaction);
})

Client.once('ready', async () => {
  console.log('Online!');
  let guilds = await Client.guilds.cache
  guilds = guilds.array()

const activities_list = [ 
  { text: "%help", type: 0},
  { text: "do %vote", type: 0},
  { text: "Developed by ShyGuy#5504", type: 0},
  { text: `in ${guilds.length} Servers`, type: 0},
  { text: "8 days until Shyguy's 18th birthday!!", type: 0}]

  let i = 0;
  
  setInterval(() => {
    if (i >= activities_list.length)  i = 0; 
    Client.user.setPresence({ activity: { name: activities_list[i].text, type: activities_list[i].type } });
    i++; 
}, 10000);
}); 






  Client.on(`messageDelete`, function(message, channel){
   if(message.guild.id == '771799156557480006'){
     console.log('Ghost Ping is ignored for woogies world ')
     return;
   }
      if(message.mentions.users.first() || message.mentions.roles.first()){
        if(!message.author.bot) {
          const usersMentioned = message.mentions.users;
          if (usersMentioned.first().id === message.author.id && usersMentioned.size === 1) return;
          
                const GhostPingEmbed = new MessageEmbed();
                GhostPingEmbed.setColor(message.member.displayColor);
                GhostPingEmbed.addField('Wanna remove this feature from your server?',`Message ShyGuy#5504 your server ID number and evidence that you are that server owner`)
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

          .catch(err => console.log(err))
      }
    }
    
    })
    Client.ws.on('INTERACTION_CREATE', async interaction => {
      require(`./slash_commands/${interaction.data.name}.js`)(client, interaction);
  })
  Client.on('message', message => {
    const args = message.content.trim().split(/ +/g);
    
      const commandName = args[0].slice(prefix.length).toLowerCase();
    
    
      const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  
      if(!message.content.startsWith(`${prefix}`)) return;
      if (message.author.bot) return;
      if(!command) return;

<<<<<<< HEAD
      if(message.channel.type !== dm &&!message.guild.me.hasPermission("SEND_MESSAGES")) return;
=======
      Client.on('message', message => {
        const args = message.content.trim().split(/ +/g);
        
          const commandName = args[0].slice(prefix.length).toLowerCase();
        
        
          const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
      
          if(!message.content.startsWith(`${prefix}`)) return;
          if (message.author.bot) return;
          if(!command) return;
    
          if(message.channel.type !== dm &&!message.guild.me.hasPermission("SEND_MESSAGES")) return;
          command.execute(message, args, Client);
          
          
        });
>>>>>>> e0048ebd72570ca6582da1ed5d2ae76f19c3b3b1
      command.execute(message, args, Client);
      
      
    });
<<<<<<< HEAD
  command.execute(message, args, Client);
  
Client.login(process.env.DJS_TOKEN);
=======
    
    
Client.login('NzQ2NDI1MDA0NTIyMDc4Mjgw.X0AIdA._5SHAaoE8zN-Rb-F-VUVIvG4hm4');
>>>>>>> e0048ebd72570ca6582da1ed5d2ae76f19c3b3b1
