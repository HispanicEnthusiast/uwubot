exports.run = (bot, message, args) => {
   const { MessageEmbed } = require('discord.js');
  let a = new MessageEmbed()
    .setDescription('You want to host me on your own? Then let\'s go! <a:Checkmark:858154320117235742>\nHere\'s the [Link](https://uwuthebot.glitch.me)')
    message.mentionReply(a)
  };
exports.interaction= async(bot, interaction, args) =>{
  const { MessageEmbed } = require('discord.js');
  let a = new MessageEmbed()
    .setDescription('You want to host me on your own? Then let\'s go! <a:Checkmark:858154320117235742>\nHere\'s the [Link](https://uwuthebot.glitch.me)')
    
  
  bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await bot.createAPIMessage(interaction, a)
                }
            });
}
exports.options=[]
 exports.info = {
      name: 'selfhost',
  aliases:['selfhosting'],
  usage: "",
    description: "if u want to selfhost the bot <:lilith:801419553896661022>",
  };
exports.conf={
  cooldown: 0,
  dm: "yes"
}