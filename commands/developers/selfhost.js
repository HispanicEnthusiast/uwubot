exports.run = (bot, message, args) => {
   const { MessageEmbed } = require('discord.js');
  let a = new MessageEmbed()
    .setDescription('You want to host me on your own? Then let\'s go!!! <:hikaristaire:801419553783414815>\nHere\'s the [link](https://github.com/t404owo/t404owo-bot-discord/blob/main/SELF-HOSTING.md)')
    message.mentionReply(a)
  };
  
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