module.exports ={
    name: "daystogo",
    description: "Changes days to go activity status",
    execute(message, args){
        const daystogoargs = message.content.slice(">".length).trim().split(/ +/).shift();

Client.user.setPresence({ activity: { name: args.join(" "), type: 0 } });
      
    }
}