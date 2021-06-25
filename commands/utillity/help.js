const Discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

const newEmbed = new Discord.MessageEmbed()
.setColor('#304281')
.setThumbnail(bot.user.avatarURL({dynamic:true, size: 1024}))
.setTitle('UwU Bot Commands')
.setDescription('These are my awesome-sauce commands that are useful.')
.addFields(
    {name: 'Utility/Misc', value: 'uwu invite | uwu support | uwu prefix | uwu avatar | uwu info | uwu whois'},
    {name: 'Query/Search', value: 'uwu calculate | uwu anime'},
    {name: 'Moderation/Main', value: 'uwu kick | uwu ban | uwu mute | uwu warn | uwu purge | uwu warnings'},
    {name: 'Economy/Money', value: 'uwu bal | uwu daily | uwu roll | uwu bet | uwu give'},
    {name: 'Music/Audip', value: 'uwu play | uwu np | uwu lyrics | uwu pause | uwu search | uwu queue | uwu skip | uwu vol'},
    {name: 'Fun/Activities', value: 'uwu kiss | uwu hug | uwu pat | uwu slap | uwu wink | uwu cuddle'},
    {name: 'NSFW/Adult', value: 'uwu neko | uwu foxgirl'}
)
.setFooter('Thank you so much for choosing UwU Bot, it means the world to me!')

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