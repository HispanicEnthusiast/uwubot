const Discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

const newEmbed = new Discord.MessageEmbed()
.setColor('#FFE082')
.setThumbnail(bot.user.avatarURL({dynamic:true, size: 1024}))
.setTitle('UwU Bot Commands List')
.setDescription('The best damn UwU robot across Discord with all the features you need in one bot!', '\u200B')
.addFields(
    {name: 'Utility', value: 'uwu invite | uwu support | uwu prefix | uwu avatar | uwu info | uwu whois'},
    {name: 'Search Query', value: 'uwu calculate | uwu anime'},
    {name: 'Moderation', value: 'uwu kick | uwu ban | uwu mute | uwu warn | uwu purge | uwu warnings'},
    {name: 'Economy', value: 'uwu bal | uwu daily | uwu roll | uwu bet | uwu give'},
    {name: 'Music', value: 'uwu play | uwu np | uwu lyrics | uwu pause | uwu search | uwu queue | uwu skip | uwu vol'},
    {name: 'Roleplay', value: 'uwu kiss | uwu hug | uwu pat | uwu slap | uwu wink | uwu cuddle | uwu neko | uwu foxgirl'},
    {name: 'Setup', value: 'uwu setupstatus'})
.addField('\u200B', '[Website](https://uwuthebot.glitch.me) | [Support Server](https://discord.gg/RpyKuDNghR)')
.setTimestamp()
.setFooter('Made with <3 by ROBBY#0001 - Have an amazing day!')

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