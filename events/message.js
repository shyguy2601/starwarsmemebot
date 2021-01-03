const Discord = require('discord.js');
const Client = require('discord.js');
module.exports = (Client, message) =>{

    Client.on('message', message => {
        const args = message.content.trim().split(/ +/g);
        
          const commandName = args[0].slice(prefix.length).toLowerCase();
        
        
          const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        /*if(message.content == 'what did i win' || message.content == 'What did i win'|| message.content == 'what did i win?' || message.content == 'What did i win?'){
          message.reply(`You won nothing you greedy bastard, it's just for fun`)
        }
        if((args[0].toLowerCase() == 'i\'m' || args[0].toLowerCase() == 'im') && (args[1])){
          if(args[1].toLowerCase() == 'dad'){
            return message.channel.send(`Impossible, you can't be dad, because i'm dad`);
          }
          message.channel.send(`Hi ${args.slice(1).join(' ')}, I'm dad`);
        }
        if (message.content == `pls meme` || message.content==`Pls meme`){
          message.reply('***Pls meme is disabled use >meme instead***')
      }*/
      
          if(!message.content.startsWith(`${prefix}`)) return;
          if (message.author.bot) return;
          if(!command) return;
        
          command.execute(message, args, Client);
          
          
        });

}