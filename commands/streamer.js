module.exports = {
    name: 'streamer',
    description: "Get's Shine_ee's twitch",
    
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";
      
    message.channel.send(`https://www.twitch.tv/shine_ee`);

  }
}