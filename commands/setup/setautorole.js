const { MessageEmbed } = require("discord.js");
const sendError =require("../../util/success")
exports.conf={
  cooldown: 0,
  dm: "no"
}
exports.run = (bot, message, args) => {
    let perm=message.channel.permissionsFor(message.member)//perm.has()
      if (!perm.has("MANAGE_GUILD")&&!bot.config.owners.includes(message.author.id)&&!perm.has("MANAGE_CHANNELS")&&!perm.has("ADMINISTRATOR"))
      return message.mentionReply(
        "You can't use that command! you need at least manage channels, manage server or admin perm!"
      );
      const setup = args.slice().join(" ");
    
      if (!setup||isNaN(setup.replace("<@&", "").replace("<@", "").replace(">", "")))
        return message.mentionReply(
          `Please send a auto-role ID with this format ${bot.config.prefix}setautorole [Auto-Role ID]`
        );
      bot.db.set(`${message.guild.id}_autorole`, setup.replace("<@&", "").replace("<@", "").replace(">", ""))
      
      message.noMentionReply(
        `<a:Checkmark:858154320117235742> | Successfully setup auto-role!`
      );
      return;
}

exports.info = {
name: 'setautorole',
  aliases:["autorole"],
  description: "sets the auto role(for members who joins this server(not recommended for community servers with Rule screenings))",
  usage: "<role_id/role_tag>"
}
