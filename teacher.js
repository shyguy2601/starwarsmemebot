'use strict';
process.on('uncaughtException', function (err) {
    console.log(`Caught exception:  ${err}`);
});
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client({fetchAllMembers: true});

const prefix = '!';


const fs = require('fs');
Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./teachcommands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./teachcommands/${file}`);

    Client.commands.set(command.name, command);

}
Client.ws.on('INTERACTION_CREATE', async interaction => {
  require(`./slash_commands/${interaction.data.name}.js`)(client, interaction);
})
const cooldowns = new Discord.Collection();
// bot.once('ready', () => {
  // console.log('Reaction Bot Online')
// })
Client.once('ready', async () => {
  console.log('Online!');
  let guilds = await Client.guilds.cache
  guilds = guilds.array()

const activities_list = [ 
  { text: "!request", type: 0},
  { text: "Developed by ShyGuy#5504", type: 0},
]

  let i = 0;
  
  setInterval(() => {
    if (i >= activities_list.length)  i = 0; 
    Client.user.setPresence({ activity: { name: activities_list[i].text, type: activities_list[i].type } });
    i++; 
}, 10000);
}); 






  
  // bot.on('message', async (message) => {
    
    // if(message.author.bot) return;
//     if(message.channel.id === '815681703192428574'){
//         if(message.attachments.size > 0) {
//             const Attachment = message.attachments.array()
//             const RateEmbed = new Discord.MessageEmbed()
//             .setColor('#ff000')
//             .setTitle('Rate')
//             .setImage(Attachment[0].url)
//             .setFooter(`Sent by ${message.author.username}`)
//             .setTimestamp()
//             message.channel.send(RateEmbed).then(async embed => {
//             message.delete()    
                
//                 await embed.react("<:1_:815696595521634314>")
//                 await embed.react("<:2_:815696652911509504>")
//                 await embed.react("<:3_:815696653137870848>")
//                 await embed.react("<:4_:815696653746569217>")
//                 await embed.react("<:5_:815696654673379388>")
//                 await embed.react("<:6_:815696654174126110>")
//                 await embed.react("<:7_:815696654187495424>")
//                 await embed.react("<:8_:815696654299955230>")
//                 await embed.react("<:9_:815696653826654270>")
//                 await embed.react("<:10:815696654304149514>")
                
//             }) .catch(() => console.error('One of the emojis failed to react.')); 
                
//         } else if(message.attachments.size < 0){
//             return;
//         }
//     } else if(message.channel.id === '815684970064248842') {
//         if(message.attachments.size > 0){
//             const HotOrNotAttachment = message.attachments.array()
//             const HotOrNotEmbed = new Discord.MessageEmbed()
//             .setColor('#ff000')
//             .setTitle('Hot Or Not')
//             .setImage(HotOrNotAttachment[0].url)
//             .setFooter(`Sent by ${message.author.username}`)
//             .setTimestamp()
            
//             message.channel.send(HotOrNotEmbed).then(async embed => {
//                 message.delete()
//                 await embed.react("<:hot:815698544622567494>")
//                 await embed.react("<:not:815698544747872276>")
            
//             }) .catch(() => console.error('One of the emojis failed to react.')); 

//         } else if(message.attachments.size < 0){
//             return;
//         }
//     } else if(message.channel.id === '815681738990026763') {
//         if(message.attachments.size > 0){
//             const LeftRightAttachment = message.attachments.array()
//             const LeftRightEmbed = new Discord.MessageEmbed()
//             .setColor('#ff000')
//             .setTitle('Left or Right')
//             .setImage(LeftRightAttachment[0].url)
//             .setFooter(`Sent by ${message.author.username}`)
//             .setTimestamp()
            
//             message.channel.send(LeftRightEmbed).then(async embed => {
//                 message.delete()
       
//                 await embed.react("<:leftarrow:815700275406176346>")
//                 await embed.react("<:rightarrow:815700275074564129>")
//             }) .catch(() => console.error('One of the emojis failed to react.')); 

//         } else if(message.attachments.size < 0){
//             return;
//         }
//     } else if(message.channel.id === '815681377751793674') {
//         if(message.attachments.size > 0){
//             const BonerAttachment = message.attachments.array()
//             const BonerEmbed = new Discord.MessageEmbed()
//             .setColor('#ff000')
//             .setTitle('Boner-O-Meter')
//             .setImage(BonerAttachment[0].url)
//             .setFooter(`Sent by ${message.author.username}`)
//             .setTimestamp()
            
//             message.channel.send(BonerEmbed).then(async embed => {
//                 message.delete()
//                 await embed.react("<:b3Limp:815702520768102420>")
//                 await embed.react("<:b2Hard:815702520781340702>")
//                 await embed.react("<:b1Rock:815702016453378058>")
            
//             }) .catch(() => console.error('One of the emojis failed to react.')); 
//         } else if(message.attachments.size < 0){
//             return;
//         }

//     } else if(message.channel.id === '815681674074652723') {
//         if(message.attachments.size > 0){
//             const SmashOrPassAttachment = message.attachments.array()
//             const SmashOrPassEmbed = new Discord.MessageEmbed()
//             .setColor('#ff000')
//             .setTitle('Smash Or Pass')
//             .setImage(SmashOrPassAttachment[0].url)
//             .setFooter(`Sent by ${message.author.username}`)
//             .setTimestamp()
            
//             message.channel.send(SmashOrPassEmbed).then(async embed => {
//                 message.delete()
//                  await embed.react("<:samsh:815699131548434472>")
//                  await embed.react("<:pass:815699131075002370>")
//             }) .catch(() => console.error('One of the emojis failed to react.')); 

//         } else if(message.attachments.size < 0){
//             return;
//         }
//     }
// })

  Client.on('message', message => {
    if(!message.content.startsWith(`${prefix}`)) return;
    if (message.author.bot) return;

    const args = message.content.trim().split(/ +/g);
    
    const commandName = args[0].slice(prefix.length).toLowerCase();
    const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  
    
    if(!message.content.startsWith(`${prefix}`)) return;
    if (message.author.bot) return;
    if(!command) return;

  
    
    command.execute(message, args, Client);
    
    

    
  });
// // bot.login(process.env.REACTION_BOT_TOKEN)
Client.login(process.env.TEACH_TOKEN); //you should not use process.env
