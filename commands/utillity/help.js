const Discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

const newEmbed = new Discord.MessageEmbed()
.setColor('#304281')
.setTitle('Haunt Bot Commands - Help')
.setDescription('These are my awesome-sauce commands that are useful.')
.addFields(
    {name: 'Utility', value: '?invite | ?support | ?prefix | ?avatar | ?info | ?whois'},
    {name: 'Query', value: '?calculate | ?anime'},
    {name: 'Moderation', value: '?kick | ?ban | ?mute | ?warn | ?purge | ?warnings'},
    {name: 'Economy', value: '?bal | ?daily | ?roll | ?bet | ?give'},
    {name: 'Music', value: '?play | ?np | ?lyrics | ?pause | ?search | ?queue | ?skip | ?vol'},
    {name: 'Fun', value: '?kiss | ?hug | ?pat | ?slap | ?wink | ?cuddle'},
    {name: 'NSFW', value: '?neko | ?foxgirl'}
)
.setImage('https://imgur.com/GyzR9U9')
.setFooter('Thank you so much for choosing Haunt, it means the world to me!')

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