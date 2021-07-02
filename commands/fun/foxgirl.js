const fs = require("fs");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();
module.exports.run = async (bot, message, args, tools) => {

  const mat = await neko.sfw.foxGirl();
  const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Here's a Fox Girl, so beautiful! UwU")
    .setImage(mat.url);
  
  message.noMentionReply(embed)
 
};

exports.info = {
  name: 'foxgirl',
usage: "",
  description: "sends a foxgirl **(NSFW foxgirl only for nsfw channels)**",
  enabled: true,
  guildOnly: false,
  aliases: ["fox_girl", "fox-girl"],
  permLevel: 0
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}