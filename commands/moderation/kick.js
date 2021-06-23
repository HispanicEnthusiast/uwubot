
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
  //console.log(message.member)
  const permissions = message.channel.permissionsFor(message.client.user);
  let perm=message.channel.permissionsFor(message.member)//perm.has()
  if(!permissions.has("KICK_MEMBERS")) return message.noMentionReply("🔨 | I don't have permission to kick!");
 if (!perm.has("KICK_MEMBERS")&&!perm.has("MANAGE_GUILD")&&!perm.has("MANAGE_MEMBERS")&&!perm.has("ADMINISTRATOR"))
        return message.mentionReply("🔨 | You don't have permission to kick!");

 if (!args[0]) {
        return message.mentinReply(
          "🔨 | Please mention or give the ID of the person who you want to kick."
        );
      }
      let target = await message.guild.members.fetch(message.member.id).catch(err => { return message.mentionReply("🔨 | Unable to find the user.") });

      if (target === !args[0]) {
        return message.mentionReply(
          "🔨 | Please mention or give the ID of the person who you want to kick"
        );
      }
      
      if (target.id === message.author.id) {
        return message.mentionReply("🔨 | You can not kick yourself, silly.");
      }
  let tar=message.channel.permissionsFor(target)//perm.has()
      if (tar.has("ADMINISTRATOR")){
        return message.mentionReply("🔨 | The user you want to kick is a Moderator/Administrator I can't do that, sorry.");
  }
      let reason = args.slice(1).join(" ");
      if (!reason) reason = "-";
      message.noMentionReply("Kicking user...")
      .then(msg => {
        let reasonb = args.slice(1).join(" ");
        target.kick({reason: reason+` || by ${message.member.user.tag}`});
        if(!reasonb){
        msg.edit(`🔨 **| Kicked sucessfully.**`)
        };
      if(reasonb) {
        msg.edit(`🔨 **| Kicked sucessfully.** - __${reason}__`);}
    });
      
}


exports.info = {
  name: 'kick',
  aliases:[],
  usage: "<user_id_or_mention>",
  description: "kicks a member"
}//checked
exports.conf={
  cooldown: 0,
  dm: "no"
}