const Discord = require('discord.js');
const Client = new Discord.Client();
module.exports ={
    name: "daystogo",
    description: "Changes days to go activity status",
    execute(message, args){
    let daystogo = args.slice(1).join(" ");

const activities_list = [ 
    //{ text: "Prefix is > , do >help", type: 0},
    //{ text: "I'm basically just a meme bot right now", type: 0},
    { text: ">help", type: 0},
    { text: "Developed by ShyGuy#5504", type: 0},
    { text: "you sleep 0_o", type: 3},
    { name: args.join(" "), type: 0 }
    ]
  
    let i = 0;
  
  Client.once('ready', () => {
    console.log('Online!');
    setInterval(() => {
        if (i > activities_list.length) { i = 0 }
        Client.user.setPresence({ activity: { name: activities_list[i].text, type: activities_list[i].type } });
        i++; 
    }, 10000);
        });
    }

}