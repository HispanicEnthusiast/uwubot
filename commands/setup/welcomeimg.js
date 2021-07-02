const { MessageEmbed } = require("discord.js");
const sendError =require("../../util/success")
exports.run = (bot, message, args) => {
    let perm=message.channel.permissionsFor(message.member)//perm.has()
      if (!perm.has("MANAGE_GUILD")&&!bot.config.owners.includes(message.author.id)&&!perm.has("MANAGE_CHANNELS")&&!perm.has("ADMINISTRATOR"))
      return message.mentionReply(
        "<:Oops:858157163876319252> | You can't use that command! you need at least manage channels, manage server or admin perm!"
      );
    const type = args[0];
    if (type === "on" || type === "enable") {
      bot.db.set(`${message.guild.id}_welcomeimg`, "yes")
      message.noMentionReply(
        `<a:Checkmark:858154320117235742> | Welcome image is successfully enabled!`
      );
      return;
    }
    if (type === "off" || type === "disable") {
      bot.db.set(`${message.guild.id}_welcomeimg`, "no")
      message.noMentionReply(
        `<a:Checkmark:858154320117235742> | Welcome image is successfully disabled!`
      );
      return;
    }
}
exports.info = {
name: 'setwelcomeimg',
  aliases:["welcomeimg", "welcomeimage", "setwelcomeimage", "setwelcomeimages", "welcomeimages"],
  usage: "<on/enable/off/disable>",
  description: "turns the welcome image on/off",
}
exports.conf={
  cooldown: 0,
  dm: "no"
}