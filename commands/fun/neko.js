const fs = require("fs");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();
module.exports.run = async (bot, message, args, tools) => {
  
  const mat =await neko.sfw.neko();
  const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Here's a neko, horny-dog. OwO")
    .setImage(mat.url);
 return message.noMentionReply({ embed });
};

exports.info = {
  name: 'neko',
usage: "",
  description: "Sends a neko",
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}