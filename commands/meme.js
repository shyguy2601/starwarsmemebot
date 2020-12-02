module.exports = {
    name: 'meme',
    description: "this is a meme command",
    execute(message, args){
      const Discord = require('discord.js');
      const prefix = ">";

      /*const meme_list = [
        `./memes/meme1.jpg`,
        `./memes/meme2.jpg`,
        `./memes/meme3.jpg`,
    ]
  
      let i = 0;
      if (i > meme_list.length) { i = 0 }
    let randomMeme = meme_list[Math.floor(Math.random() * meme_list.length)];
    message.channel.send(randomMeme);
      
  }
}*/
const snekfetch = require('snekfetch');
exports.run = async (client, message, args) => {
	try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/starwarsmemes/')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter("Memes provided by r/starwarsmemes")
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
      }
    }  
  }
}