
const Discord = require('discord.js')
//checked
exports.run = async (bot, message, args) => {
  //console.log(message.member)
  const permissions = message.channel.permissionsFor(message.client.user);
  let perm=message.channel.permissionsFor(message.member)//perm.has()
  if(!permissions.has("BAN_MEMBERS")) return message.noMentionReply("🔨 | I do not have permission to ban.");
 if (!perm.has("BAN_MEMBERS")&&!perm.has("MANAGE_GUILD")&&!perm.has("MANAGE_MEMBERS")&&!perm.has("ADMINISTRATOR"))
        return message.mentionReply("🔨You do not have permission to ban.");

 if (!args[0]) {
        return message.mentinReply(
          "🔨 | Please mention or give the ID of the person who you want to ban."
        );
      }
      let target = await message.guild.members.fetch(message.member.id).catch(err => { return message.mentionReply("🔨 | Unable to find the user.") });

      if (target === !args[0]) {
        return message.mentionReply(
          "🔨 | Please mention or give the id of the person who you want to ban."
        );
      }
      
      if (target.id === message.author.id) {
        return message.mentionReply("🔨 | You cannot ban yourself, silly.");
      }
  let tar=message.channel.permissionsFor(target)//perm.has()
      if (tar.has("ADMINISTRATOR")){
        return message.mentionReply("🔨 | The user you want to ban is a Moderator/Administrator I can't do that, sorry.");
  }
      let reason = args.slice(1).join(" ");
      if (!reason) reason = "-";
      message.noMentionReply("Banning user...")
      .then(msg => {
        let reasonb = args.slice(1).join(" ");
        target.ban({reason: reason+` || by ${message.member.user.tag}`});
        if(!reasonb){
        msg.edit(`🔨 **| The user was banned sucessfully.**`)
        };
      if(reasonb) {
        msg.edit(`🔨 **| The user was banned sucessfully.** - __${reason}__`);}
    });
      
}


exports.info = {
  name: 'ban',
  aliases: [],
  usage: "<user_id_or_mention>",
  description:"ban a user"
}
exports.conf={
  cooldown: 0,
  dm: "no"
}