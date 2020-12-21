module.exports = {
  name: 'avatar',
  description: "Get's a user's avatar",
  execute(message, args){
    const getUserFromMention = mention => {
      if (!mention || !mention.startsWith('<@')|| !mention.endsWith('>')) return;
      mention = mention.slice(2, -1);
      if (mention.startsWith('!')) mention = mention.slice(1);
      return Client.users.cache.get(mention);
   }
  
      
    if (args[1]) {
      
      const user = getUserFromMention(args[1]);

      if (!user) {
          return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
      }

      return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
  }

  return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);


}

}