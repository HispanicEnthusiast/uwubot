const Discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

const newEmbed = new Discord.MessageEmbed()
.setColor('#050505')
.setThumbnail('https://media.discordapp.net/attachments/849765225329852427/853860157515366430/AggravatingQuaintBittern-max-1mb.gif?width=72&height=72')
.setTitle("Rob's Lounge - Server Rules")
.addFields(
    {name: 'Rule 1', value: '— No Bullying/Harassment'},
    {name: 'Rule 2', value: '— No Nudity/Hentai/Gore'},
    {name: 'Rule 3', value: '— No Doxxing/DDoSing'},
    {name: 'Rule 4', value: '— Follow [Discords Terms of Service](https://discord.com/terms)'}
)

message.channel.send(newEmbed);

}
exports.info = {
  name: 'robsloungeinfo',
  aliases: ['rlinfo'],
  usage: "",
  description: "shows the commands"
}

exports.conf={
  cooldown: 0,
  dm: "yes"
}