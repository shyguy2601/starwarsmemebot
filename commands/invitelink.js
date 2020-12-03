module.exports = {
    name: 'invitelink',
    description: "this is an invite command",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";

  message.channel.send(`https://discord.com/oauth2/authorize?client_id=783629275546648577&scope=bot&permissions=1883630704`)
  }
}