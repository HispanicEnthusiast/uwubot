const Discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

const newEmbed = new Discord.MessageEmbed()
.setColor('#050505')
.setTitle('// ᓚᘏᗢ * .  +')
.addFields(
    {name: '', value: '?invite | ?support | ?prefix | ?avatar | ?info | ?whois'},
    {name: 'Query/Search', value: '?calculate | ?anime'},
    {name: 'Moderation/Main', value: '?kick | ?ban | ?mute | ?warn | ?purge | ?warnings'},
    {name: 'Economy/Money', value: '?bal | ?daily | ?roll | ?bet | ?give'},
    {name: 'Music/Audip', value: '?play | ?np | ?lyrics | ?pause | ?search | ?queue | ?skip | ?vol'},
    {name: 'Fun/Activities', value: '?kiss | ?hug | ?pat | ?slap | ?wink | ?cuddle'},
    {name: 'NSFW/Adult', value: '?neko | ?foxgirl'}
)

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