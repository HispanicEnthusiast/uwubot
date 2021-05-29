const util = require("util")
exports.run = async (client,message,args)=>{
  


    if(client.config.owners.includes(message.author.id)) {//make sure u replace your id here
      async function xD(){let {BotArcApiV4}=require('botarcapi_lib').default, a= new BotArcApiV4({
    baseURL: `https://${process.env.PROJECT_DOMAIN}.glitch.me/arcaea/api`,
    timeout: 60000,
    headers: {
        "User-Agent": "SecretAPIUA"
    }
})
console.log(a.user.best30("Nagiha0798", true))
    }
}
exports.info = {
  name: 'evaluate',
  aliases: ["ev", "eval"],
  description: "eval a code(Owner or trusted person only)",
  usage : "<code>",
  example: "message.channel.send(\"Hi lmao\")",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}