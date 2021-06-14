const discord = require('discord.js')
exports.run = (bot, message, args) => {
  const version = process.env.VERSION;
  let embed = new discord.MessageEmbed()
  
    .setTitle("Haunt Bot Commands")
  
    .setDescription('Utility: ?invite | ?support | ?prefix | ?avatar | ?info | ?whois', 'Query: ?calculate | ?anime', 'Moderation: ?kick | ?ban | ?mute | ?warn | ?purge | ?warnings', 'Economy: ?bal | ?daily | ?roll | ?bet | ?give', 'Music: ?play | ?np | ?lyrics | ?pause | ?search | ?queue | ?skip | ?vol', 'Fun: ?kiss | ?hug | ?pat | ?slap | ?wink | ?cuddle', 'NSFW: ?neko | ?foxgirl')
  
    .setThumbnail(bot.user.avatarURL({dynamic:true, size: 1024}))
    .setFooter("Thank you so much for choosing Haunt, it means the world to me! <3")
    .setColor("#78d7fa")
    
    return message.noMentionReply(embed);

}
exports.info = {
  name: 'help',
  aliases: ['h'],
  usage: "",
  description: "show the commands"
}
exports.conf = {
  cooldown: 5,
  dm: "yes"
}