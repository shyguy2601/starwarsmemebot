module.exports = {
  name: 'avatar',
  description: "Get's a user's avatar",
  execute(message, args, Client){
    const matches = mention.match(/^<@!?(\d+)>$/);

	// If supplied variable was not a mention, matches will be null instead of an array.
	if (!matches) return;

	// However the first element in the matches array will be the entire mention, not just the ID,
	// so use index 1.
	const id = matches[1];

	return client.users.cache.get(id);
  
  
      
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