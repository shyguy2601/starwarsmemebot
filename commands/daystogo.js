module.exports ={
    name: "daystogo",
    description: "Changes days to go activity status",
    execute(message, args){
    let daystogo = args.slice(1).join(" ");
if(daystogo){
Client.user.setPresence({ activity: { name: args.join(" "), type: 0 } });
}
      
    }
}