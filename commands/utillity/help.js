const discord = require('discord.js')
exports.run = (bot, message, args) => {
  const version = process.env.VERSION;
  let embed = new discord.MessageEmbed()
  
    .setTitle("Haunt Bot Commands")
  
    .addField("Utility: ?invite | ?support | ?prefix | ?avatar | ?info | ?whois")
    .addField("Query: ?calculate | ?anime")
    .addField("Moderation: ?kick | ?ban | ?mute | ?warn | ?purge | ?warnings")
    .addField("Economy: ?bal | ?daily | ?roll | ?bet | ?give")
    .addField("Music: ?play | ?join | ?np | ?lyrics | ?pause/continue | ?search | ?queue | ?skip/skipto | ?volume | ?stop | ?disconnect")
    .addField("Fun: ?kiss | ?hug | ?pat | ?slap | ?wink | ?cuddle")
    .addField("NSFW: ?neko | ?foxgirl")
  
    .setThumbnail(bot.user.avatarURL({dynamic:true, size: 1024}))
    .addField("Bot Developer:", process.env.DISCORD_BOT_OWNER, true)
    .setFooter("Thank you so much for choosing Haunt, it means the world to me! <3")
    .setColor("#78d7fa")
    
    return message.noMentionReply(embed);

}
exports.info = {
  name: 'help',
  aliases: ['h'],
  usage: "",
  description: "shows the info of the bot"
}
exports.conf = {
  cooldown: 5,
  dm: "yes"
}