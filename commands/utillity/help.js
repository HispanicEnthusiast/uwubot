let discord = require("discord.js");

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
      if(!message.guild) return;
        user = message.mentions.users.first();
    } else if (args[0]) {
      if(!message.guild) return;
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    }

    const embed = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTitle(`Haunt's Bot Commands`)
    .addField("?invite | ?s")
    .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
    .setTimestamp(new Date) 
    return message.noMentionReply(embed);
}

exports.conf = {
  cooldown: 5,
  dm: "yes"
}