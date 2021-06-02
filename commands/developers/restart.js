const util = require("util")
exports.run = async (client,message,args)=>{
  

  
    if(client.config.owners.includes(message.author.id)) {
      message.react("👍").then(()=>process.exit(1))
    }
}
exports.info = {
  name: 'restart',
  aliases: [],
  description: "Restart Yukimo (Developer-Only Access)",
  usage : "",
  example: "",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}