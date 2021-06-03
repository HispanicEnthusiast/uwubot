const ms = require("ms")

exports.run = async(bot, message, args) => {

    const permissions = message.channel.permissionsFor(message.client.user);
  let perm=message.channel.permissionsFor(message.member)//perm.has()
  if(!permissions.has("MANAGE_ROLES")) return
  if(!perm.has("MANAGE_ROLES")&&!perm.has("MANAGE_GUILD")&&!perm.has("MANAGE_MEMBERS")&&!perm.has("ADMINISTRATOR"))return
   if (!args[0]) {
        return message.mentionReply(
          "🔨 | Please mention or give the ID of the person who you want to mute."
        );
      }
    let userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", "")).catch(err => { console.error(err);return message.mentionReply("🔨 | Unable to find this user.") })
    
        let target = userm
  if (target === !args[0]) {
        return message.mentionReply(
          "🔨 | Please mention the person who you want to mute."
        );
      }
  
let tar=message.channel.permissionsFor(userm)//perm.has()
if (tar.has("ADMINISTRATOR")){
        return message.mentionReply("The user you want to mute is a Moderator/Administrator I can't do that, sorry.");
  }

  let reason = args.slice(2).join(" ");
  if(!reason) reason = "-";
let muterole= bot.db.get(`${message.guild.id}_muterole`)
   

  if(!bot.db.get(`${message.guild.id}_muterole`)){
   let muterale = message.guild.roles.cache.find(r => r.name === 'Muted');
      //bot.db.set(`${message.guild.id}_muterole`,message.guild.roles.cache.find(r => r.name === 'Muted').id);
  if(!muterale) {
              try{
                let muterele = await message.guild.roles.create({
                  data:{ 
                  name: "Muted",
                  color: "#222222",
                  permissions: []
                  }
                })
                message.guild.channels.cache.forEach(async (channel, id) => {
                  await channel.updateOverwrite(message.guild.roles.cache.find(r => r.name === 'muted'), {
                    CREATE_INSTANT_INVITE: true,
                    ADD_REACTIONS: false,
                    STREAM: false,
                    SEND_MESSAGES: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    READ_MESSAGE_HISTORY: true,// https://discord.gg/Tx5tT8z
                    MENTION_EVERYONE: false,
                    USE_EXTERNAL_EMOJIS: true,
                    CONNECT: false,
                    SPEAK: false,
                    USE_VAD: false,
                    CHANGE_NICKNAME: true
                  })
                })
              }
              catch(err) {
                message.mentionReply(`Error : ${err}`)
              }
  }
    muterole = bot.db.set(`${message.guild.id}_muterole`,message.guild.roles.cache.find(r => r.name === 'Muted').id.toString());
            
}
    const time = args[1]
   
    if(!time||ms(time)===undefined){
      return message.mentionReply("🔨 | Please add a correct time to mute this member. (m = Minutes | d = Days)")
    }
   
  let muteroles=bot.db.set(`${message.guild.id}_${userm.user.id}muteroles`, userm._roles)
  
      console.log(muterole+"\n"+muteroles)

      
    
bot.db.set(`${message.guild.id}_${userm.user.id}mutetime`, time)

  setTimeout(function(){
  
    target.roles.add(message.guild.roles.cache.find(r => r.id ===muteroles)).catch(()=>{
      target.roles.add(muteroles)
          target.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole))
target.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole).id)
  bot.db.delete(`${message.guild.id}_${userm.user.id}mutetime`)
  bot.db.delete(`${message.guild.id}_${userm.user.id}muteroles`)
  })
    

    target.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole))
target.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole).id)
    bot.db.delete(`${message.guild.id}_${userm.user.id}mutetime`)
    bot.db.delete(`${message.guild.id}_${userm.user.id}muteroles`)
             }, ms(bot.db.get(`${message.guild.id}_${userm.user.id}mutetime`)))
  
  
target.roles.remove(target.roles.cache);
  target.roles.add(message.guild.roles.cache.find(r => r.id ===muterole))
  target.roles.add(message.guild.roles.cache.find(r => r.id ===muterole).id)
 let reasonb = args.slice(2).join(" ");
  if(!reasonb){
        message.noMentionReply(`🔨 **| The user was muted sucessfully.**`)
        };
      if(reasonb) {
        message.noMentionReply(`🔨 **| The user was muted sucessfully.**`);}
}

exports.info = {
name: 'mute',
  aliases:[],
  usage: "<user_id_or_mention>",
  description: "mutes a member"
}
exports.conf={
  cooldown: 0,
  dm: "no"
}