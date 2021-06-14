const Discord = require('discord.js')
exports.run = (bot, message, args) => {
const version = process.env.VERSION;

const helpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Haunt Bot Commands (Help)')
	.setURL('https://discord.gg/gassed')
	.setAuthor('Haunt', 'https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Utility', value: '?invite | ?support | ?prefix | ?avatar | ?info | ?whois' },
    { name: 'Query', value: '?calculate | ?anime' },
    { name: 'Moderation', value: '?kick | ?ban | ?mute | ?warn | ?purge | ?warnings' },
    { name: 'Economy', value: '?bal | ?daily | ?roll | ?bet | ?give' },
    { name: 'Music', value: '?play | ?np | ?lyrics | ?pause | ?search | ?queue | ?skip | ?vol' },
    { name: 'Fun', value: '?kiss | ?hug | ?pat | ?slap | ?wink | ?cuddle' },
    { name: 'NSFW', value: '?neko | ?foxgirl' },
	)
	.setTimestamp()
	.setFooter('Thank you so much for choosing Haunt, it means the world to me! <3');
  
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