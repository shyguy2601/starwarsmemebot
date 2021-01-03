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
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    
    Client.on(file.replace(".js", ""), event.bind(null, Client));
    console.log(`Event loaded: ${file}`);
}

const activities_list = [ 
  { text: ">help", type: 0},
  { text: "Developed by ShyGuy#5504", type: 0},
  { text: "you sleep 0_o", type: 3},
  { text: "23 days until Shyguy's 18th birthday!!", type: 0}]

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
    Client.ws.on('INTERACTION_CREATE', async interaction => {
      require(`./slash_commands/${interaction.data.name}.js`)(client, interaction);
  })

    
    
Client.login(process.env.DJS_TOKEN);