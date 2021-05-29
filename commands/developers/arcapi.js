const util = require("util")
exports.run = async (client,message,args)=>{
  


    if(client.config.owners.includes(message.author.id)) {//make sure u replace your id here
      let {BotArcApiV4}=require('botarcapi_lib').default, a= new BotArcApiV4({
    baseURL: `https://${process.env.PROJECT_DOMAIN}.glitch.me/arcaea/api`,
    timeout: 60000,
    headers: {
        "User-Agent": "SecretAPIUA"
    }
})
message.channel.send(await a.user.best("457767993", true))
    }
}
exports.info = {
  name: 'arcapi',
  aliases: [],
  description: "eval a code(Owner or trusted person only)",
  usage : "<code>",
  example: "message.channel.send(\"Hi lmao\")",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}