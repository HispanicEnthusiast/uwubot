const Discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

const newEmbed = new Discord.MessageEmbed()
.setColor('#050505')
.setThumbnail('https://media.discordapp.net/attachments/849765225329852427/853860157515366430/AggravatingQuaintBittern-max-1mb.gif?width=72&height=72')
.setTitle('// ᓚᘏᗢ * .  +')
.addFields(
    {name: '♡・gassed', value: 'da rules'},
    {name: 'rule 1', value: '— no child imgs'},
    {name: 'rule 2', value: '— no gore'},
    {name: 'rule 3', value: '— no nsfw'},
    {name: 'rule 4', value: '— follow tos'}
)

message.channel.send(newEmbed);

}
exports.info = {
  name: 'gassed',
  aliases: ['g'],
  usage: "",
  description: "shows the commands"
}

exports.conf={
  cooldown: 0,
  dm: "yes"
}