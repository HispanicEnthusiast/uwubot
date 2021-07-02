module.exports.info = {
  name: "setprefix",
  description: "Set a new prefix for your server",
  usage: "<new_prefix>",
  aliases: []
};
module.exports.run=async(bot,message,args)=>{
  let perm=message.channel.permissionsFor(message.member)//perm.has()
      if (!perm.has("MANAGE_GUILD")&&!bot.config.owners.includes(message.author.id)&&!perm.has("MANAGE_CHANNELS")&&!perm.has("ADMINISTRATOR"))
      return message.mentionReply(
        "<:Oops:858157163876319252> | You can't use that command! you need at least manage channels, manage server or admin perm!"
      );
    if (!args[0]) {
        return message.mentionReply(
          "<:Oops:858157163876319252> | Please add a new prefix!"
        );
      }

      let prefix = bot.db.set(`${message.guild.id}_prefix`, args.slice().join(" ").toLowerCase());
if(args.slice().join(" ").toLowerCase()=== '+')bot.db.delete(`${message.guild.id}_prefix`)

      console.log(prefix);

      message.noMentionReply(`<a:Checkmark:858154320117235742> | Prefix set to \`${prefix}\`!`);

      return;
}
exports.conf={
  cooldown: 0,
  dm: "no"
}