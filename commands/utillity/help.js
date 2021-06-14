const discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

client.on('message', message => {
if (message.content === '?help') {
    
const MessageEmbed = new Discord.MessageEmbed()
      .setColor('#78d7fa')
      .setThumbnail(bot.user.avatarURL({dynamic:true, size: 1024}))
      .setTitle('Haunt Bot Commands - Help Hub')
      .setDescription(`Utility: ?invite | ?support | ?prefix | ?avatar | ?info | ?whois\nQuery: ?calculate | ?anime\nModeration: ?kick | ?ban | ?mute | ?warn | ?purge | ?warnings\nEconomy: ?bal | ?daily | ?roll | ?bet | ?give\nMusic: ?play | ?np | ?lyrics | ?pause | ?search | ?queue | ?skip | ?vol\nFun: ?kiss | ?hug | ?pat | ?slap | ?wink | ?cuddle\nNSFW: ?neko | ?foxgirl`)
      .setFooter('Thank you so much for choosing Haunt, it means the world to me! <3');
message.channel.send(MessageEmbed);
  
exports.info = {
  name: 'help',
  aliases: ['h'],
  usage: "",
  description: "show the commands"
}
}
}