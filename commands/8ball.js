const answers = [
	'Maybe.',
	'Certainly not.',
	'I hope so.',
	'Not in your wildest dreams.',
	'There is a good chance.',
	'Quite likely.',
	'I think so.',
	'I hope not.',
	'I hope so.',
	'Never!',
	'Fuhgeddaboudit.',
	'Ahaha! Really?!?',
	'Pfft.',
	'Sorry, bucko.',
	'Hell, yes.',
	'Hell to the no.',
	'The future is bleak.',
	'The future is uncertain.',
	'I would rather not say.',
	'Who cares?',
	'Possibly.',
	'Never, ever, ever.',
	'There is a small chance.',
	'Yes!'
];
module.exports = {
    name: '8ball',
    description: "this is an 8ball command",
    execute(message, question, Client ){
      const Discord = require('discord.js');
	  const prefix = ">";
<<<<<<< HEAD

	  if(message.channel.type == "text"){
=======
	  
	  if(!message.guild.me.hasPermission('SEND_MESSAGES')){
		console.log('Somebody tried to use the 8ball command but i was missing the SEND_MESSAGES permission') 
		return; 
	  }
		
		if(message.channel.type == "text"){
>>>>>>> e0048ebd72570ca6582da1ed5d2ae76f19c3b3b1
		  return message.reply(question.join(' ').endsWith('?') ?
      `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
	  '🎱 That doesn\'t seem to be a question, please try again!');
	  
	  }
	  if(message.channel.type == "dm"){
		return message.reply(question.join(' ').endsWith('?') ?
		`🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
		'🎱 That doesn\'t seem to be a question, please try again!');

	  }
      
	
	  
  
  }
}