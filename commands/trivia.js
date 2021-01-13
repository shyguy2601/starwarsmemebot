const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports ={
    name: 'trivia',
    description: "A trivia command",
    aliases: ['triv', 'quiz', 'trv'],
    execute(message,args,client){


        const questions = [
            {title: 'What is 2+2?', choices: [`1) 3`, `2) 4`, `3) 5`, `4) 6`], correct: `2`},
            {title: 'What is the **Highest Mountain** in the world?', choices: ['1) K12', `2) Mont Blanc`, '3) K2', '4) Everest'], correct: `4`},
            {title: 'In a website browser address bar, what does “www” stand for?', choices: ['1) Working Web Wacko', '2) Wild Western Web', '3) World Wide Web', '4) Weird Wonderful Wookies'], correct: '3'},
            {title: 'Which African country was formerly known as Abyssinia?', choices: ['1) Zambia', '2) Kenya', `3) Ethiopia`, `4) Chad`], correct: '3'},
            {title: 'In which European city would you find Orly airport?', choices: ['1) Barcelona', '2) Paris', `3) London`, `4) Amstadam`], correct: '2'},
            {title: 'The only known monotremes in the animal kingdom are the echidna and which other creature?', choices: ['1) Wombat', '2) Tasmanian Devil', `3) Platypus`, `4) Sea Horse`], correct: '3'},
            {title: 'Fissures, vents and plugs are all associated with which geological feature?', choices: ['1) Earthquakes', '2) Volcanos', `3) Tsunami`, `4) Hurricane`], correct: '2'},
            {title: 'Which Dutch artist painted “Girl with a Pearl Earring”?', choices: ['1) Vermeer', '2) Rembrandt', `3) Bosch`, `4) Mondrian`], correct: '1'},
            {title: 'Which country consumes the most chocolate per capita?', choices: ['1) Austria', '2) Hungary', `3) Belgium`, `4) Switzerland`], correct: '4'},
            {title: 'Which two U.S. states don’t observe Daylight Saving Time?', choices: ['1) Texas + Hawaii', '2) Hawaii + Arizona', `3) Arizona + Washington`, `4) Arizona + Texas`], correct: '2'},
            {title: 'In the United Kingdom, what is the day after Christmas known as?', choices: ['1) New Years', '2) After-Christmas Day', `3) Boxing Day`, `4) Christmas Eve`], correct: '3'},
            {title: 'Which of Shakespeare’s plays is the longest?', choices: ['1) Hamlet', '2) Macbeth', `3) Julius Caesar`, `4) Romeo and Juliet`], correct: `1`},
            {title: 'How many of Snow White’s seven dwarfs have names ending in the letter Y?', choices: ['1) 3', '2) 7', `3) 5`, `4) 4`], correct: '3'},
            {title: 'How many ribs are in a human body?', choices: ['1) 16', '2) 20', `3) 24`, `4) 28`], correct: '3'},
            {title: 'What is the world’s biggest island?', choices: ['1) Iceland', '2) The UK', `3) Greenland`, `4) Tokyo`], correct: '3'},
            {title: 'What is the smallest ocean in the world?', choices: ['1) Indian', '2) Artic', `3) Atlantic`, `4) Pacific`], correct: '2'},
            {title: 'What color eyes do most humans have?', choices: ['1) Blue', '2) Grey', `3) Green`, `4) Brown`], correct: '4'},
            {title: 'What is the largest type of deer?', choices: ['1) Moose', '2) Reindeer', `3) Roe-deer`, `4) White-tailed`], correct: '1'},
            {title: 'What is the rarest M&M color?', choices: ['1) Red','2) Green','3) Yellow','4) Brown'], correct: '4'},
            {title: 'In a bingo game, which number is represented by the phrase “two little ducks”?', choices: ['1) 22 ','2) 66','3) 88 ','4) 44'], correct: '1'},
            {title: 'What is the loudest animal on Earth?', choices: ['1) Elephant','2) Blue Whale','3) Sperm Whale','4) Lion'], correct: '3'},
            {title: 'What is the highest-grossing film of all time without taking inflation into account?', choices: ['1) Titanic','2) Avengers: Endgame','3) Avatar','4) Star Wars: The Force Awakens'], correct: '2'},
            {title: 'Which film did Steven Spielberg win his first Oscar for Best Director?', choices: ['1) Jaws','2) Catch Me If You Can','3) E.T.','4) Schindler’s List'], correct: '4'},
            {title: 'What was the last movie Walt Disney was able to work on before he died?', choices: ['1) Mary Poppins','2) 101 Dalmatians','3) The Jungle Book','4) The Sword in the Stone'], correct: '3'},
            {title: 'How many black keys are found on a traditional piano?', choices: ['1) 32 ','2) 34','3) 52','4) 54'], correct: '1'},
            ];



        const chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
 
        const TriviaEmbed = new Discord.MessageEmbed()
               .setColor(`#123456`)  
               .setTitle(chosenQuestion.title)
               .addField(`\u200b`,'Borrowed with permisson from Feesh')
               .addFields({
                       name: `Choices`,
                       value: chosenQuestion.choices.join(`\n`)
               })      
               .setTimestamp()
               .setFooter(`Requested by ${message.author.username}`);
             
        message.channel.send(TriviaEmbed);
        message.channel.awaitMessages(m => m.author.id == message.author.id,
               {max: 1, time: 10000}).then(collected => {
                       const answer = chosenQuestion.correct;
         
                               if (collected.first().content.toLowerCase() == answer) {
                                       message.reply('You Win!');
                               }
                               
                       else {
                               message.reply('You Lose. The Answer Was ' + answer);
                       }
               }).catch(() => {
                               message.reply('No Answer After 10 Seconds, You Lose.');
               });
    }
}