/*module.exports = {
    name: 'trivia',
    description: "sends a trivia question",
    execute(message, args){
      const Discord = require('discord.js');
      const {MessageEmbed} = require('discord.js');
      const prefix = ">";
      let QuestionAnswer = null;
    const trivia_questions = [
        'How many soccer players should each team have on the field at the start of each match?',
        'Who was the first character to speak in Star Wars?',
        'Which potion in Harry Potter and the Half-Blood Prince grants good luck?'
    ]
    const questionToAsk = trivia_questions[Math.floor(Math.random(trivia_questions) * trivia_questions.length)];
if(questionToAsk == trivia_questions[0]){
    QuestionAnswer = "11";
}else if(questionToAsk == trivia_questions[1]){
    QuestionAnswer = "C3PO"
}else if(questionToAsk == trivia_questions[2]){
    QuestionAnswer = "Felix Felicis"
}
message.channel.awaitMessages(m => m.author.id == message.author.id,
    {max: 1, time: 30000}).then(answer =>{
        
        if(collected.first().content.toLowerCase() != QuestionAnswer){
            message.reply("Sorry, that's the incorrect answer!")
        }
    })
message.channel.send(questionToAsk);
  }

}
*/