exports.run = (bot, message, args) => {
    const { MessageEmbed } = require('discord.js');
  let totalSeconds = (bot.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds.toFixed(2)} seconds`;
    let a = new MessageEmbed()
    .setColor('#0affaf')
    .setDescription("<a:Checkmark:858154320117235742> | UwU Bot has been online for " + uptime)
    message.noMentionReply(a)
  };
  exports.interaction= async(bot, interaction, args) =>{
   const { MessageEmbed } = require('discord.js');
  let totalSeconds = (bot.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds.toFixed(2)} seconds`;
    let a = new MessageEmbed()
    .setColor('#0affaf')
    .setDescription("<a:Checkmark:858154320117235742> | UwU Bot has been online for " + uptime)
  bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await bot.createAPIMessage(interaction, a)
                }
            });  
}
exports.options=[]
 exports.info = {
      name: 'uptime',
  aliases:[],
  usage: "",
    description: "get the uptime of the bot",
  };
exports.conf={
  cooldown: 0,
  dm: "yes"
}