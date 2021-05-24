exports.run = (bot, message, args) => {
   const { MessageEmbed } = require('discord.js');
  let a = new MessageEmbed()
    .setDescription('You want to host me on your own? Then let\'s go!!!')
    message.mentionReply(a)
  };
  
 exports.info = {
      name: 'selfhost',
  aliases:['selfhosting'],
  usage: "",
    description: "get the uptime of the bot",
  };
exports.conf={
  cooldown: 0,
  dm: "yes"
}