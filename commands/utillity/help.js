const discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

let embed = new discord.MessageEmbed()
    .setTitle("Haunt Bot Commands")
    .setDescription('Utility: ?invite | ?support | ?prefix | ?avatar | ?info | ?whois')
    .setDescription('Query: ?calculate | ?anime')
    .setDescription('Moderation: ?kick | ?ban | ?mute | ?warn | ?purge | ?warnings')
    .setDescription('Economy: ?bal | ?daily | ?roll | ?bet | ?give')
    .setDescription('Music: ?play | ?np | ?lyrics | ?pause | ?search | ?queue | ?skip | ?vol')
    .setDescription('Fun: ?kiss | ?hug | ?pat | ?slap | ?wink | ?cuddle')
    .setDescription('NSFW: ?neko | ?foxgirl')
    .setThumbnail(bot.user.avatarURL({dynamic:true, size: 1024}))
    .setFooter("Thank you so much for choosing Haunt, it means the world to me! <3")
    .setColor("#78d7fa")
}

exports.info = {
  name: 'help',
  aliases: ['h'],
  usage: "",
  description: "shows the info of the bot"
}

exports.conf={
  cooldown: 0,
  dm: "yes"
}