exports.conf={
  cooldown: 0,
  dm: "no"
}
const { MessageEmbed } = require("discord.js");
const sendError =require("../../util/success")
exports.run = (bot, message, args) => {
    let perm=message.channel.permissionsFor(message.member)//perm.has()
      if (!perm.has("MANAGE_GUILD")&&!bot.config.owners.includes(message.author.id)&&!perm.has("MANAGE_CHANNELS")&&!perm.has("ADMINISTRATOR"))
      return message.mentionReply(
        "<:Oops:858157163876319252> | You can't use that command! you need at least manage channels, manage server or admin perm!"
      );
      let setup= args[0]
      if (!args[0]||isNaN(args[0].replace("<#", "").replace(">", "")))setup = message.channel.id
      bot.db.set(`${message.guild.id}_botlog`, setup.replace("<#", "").replace(">", ""))
      message.noMentionReply(
        `<a:Checkmark:858154320117235742> | Successfully setup bot log channel!`
      );
      return;
}

exports.info = {
name: 'setlogchannel',
  aliases:["logchannel", "setbotlogchannel", "botlogchannel", "setbotlog", "botlog"],
  description: "sets the bot log channel",
  usage: "<channel_id/channel_tag>"
}
