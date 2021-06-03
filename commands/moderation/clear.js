exports.run = (bot, message, args) => {
 const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_MESSAGES")) return message.mentionReply("🔨| I don't have permission to purge messages!"); 
  //checked
  let perm=message.channel.permissionsFor(message.member)
    if(!perm.has('MANAGE_MESSAGES')&&!perm.has("ADMINISTRATOR")) return message.mentionReply('🔨 | You dont have permission to purge the messages!')
    if(!args[0]) return message.mentionReply(`🔨 | Error while running the command. Please type \`${bot.config.prefix}purge [number of message]\` to purge message!`)
    if(isNaN(args[0])) {
       message.mentionReply(`🔨 | Error while running the command. Please type \`${bot.config.prefix}purge [number of message]\` to purge messages!`)
      return
  }
     if(parseInt(args[0])>99){
       return message.mentionReply(`🔨 | Error while running the command because your given number is over 99. Please give a number which is less than 99`)
     }
     
    try{
      message.channel.bulkDelete(args[0]+1).then(msg => message.noMentionReply(`🔨 | Deleted **${args[0]-1}** messages sucessfully`).then(msg=>msg.delete({timeout: 5000})))
    }
    catch(error) {
      message.noMentionReply('Error:' + error)
    } return
  }
  exports.info = {
    name: 'clear',
    aliases: ['purge', 'prune'],
  usage: "<number>",
  description:"clear messages in amount of a number"
  }
exports.conf={
  cooldown: 0,
  dm: "no"
}