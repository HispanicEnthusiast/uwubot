const Discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

const newEmbed = new Discord.MessageEmbed()
.setColor('#304281')
.setThumbnail(bot.user.avatarURL({dynamic:true, size: 1024}))
.setTitle('Timmy Bot Commands')
.setDescription('These are my awesome-sauce commands that are useful.')
.addFields(
    {name: 'Utility/Misc', value: '?invite | ?support | ?prefix | ?avatar | ?info | ?whois'},
    {name: 'Query/Search', value: '?calculate | ?anime'},
    {name: 'Moderation/Main', value: '?kick | ?ban | ?mute | ?warn | ?purge | ?warnings'},
    {name: 'Economy/Money', value: '?bal | ?daily | ?roll | ?bet | ?give'},
    {name: 'Music/Audip', value: '?play | ?np | ?lyrics | ?pause | ?search | ?queue | ?skip | ?vol'},
    {name: 'Fun/Activities', value: '?kiss | ?hug | ?pat | ?slap | ?wink | ?cuddle'},
    {name: 'NSFW/Adult', value: '?neko | ?foxgirl'}
)
.setFooter('Thank you so much for choosing Timmy, it means the world to me!')

message.channel.send(newEmbed);

}
exports.info = {
  name: 'help',
  aliases: ['h'],
  usage: "",
  description: "shows the commands"
}

exports.conf={
  cooldown: 0,
  dm: "yes"
}