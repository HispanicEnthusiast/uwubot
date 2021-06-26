const discord = require('discord.js')
exports.run = (bot, message, args) => {
  const version = process.env.VERSION;
  let embed = new discord.MessageEmbed()
  .setAuthor(bot.user.tag, bot.user.avatarURL)
      .setTitle("UwU Bot Information")
      .addField("Bot Version", version, true)
      .setThumbnail(bot.user.avatarURL({dynamic:true, size: 1024}))
      .addField("Bot Developer <@811369515631902751>")
      //.addField("Bot Developers", "[404]-QuangBùi#6288, t404owo#2452", true)
      //.addField("Bot's Arcaea Wiki Members","t404owo#2452 mitsuko21#3187, TriPizza#7407",true)
      .setFooter("Created on November 5, 2018")
      .setColor("#ffe082")
      return message.noMentionReply(embed);
}
exports.options=[]
exports.interaction = async(bot, interaction, args) => {
  const version = process.env.VERSION;
  let embed = new discord.MessageEmbed()
  .setAuthor(bot.user.tag, bot.user.avatarURL)
      .setTitle("UwU Bot Information")
      .addField("Bot Version", version, true)
      .setThumbnail(bot.user.avatarURL({dynamic:true, size: 1024}))
      .addField("Bot Developer <@811369515631902751>")
      //.addField("Bot Developers", "[404]-QuangBùi#6288, t404owo#2452", true)
      //.addField("Bot's Arcaea Wiki Members","t404owo#2452 mitsuko21#3187, TriPizza#7407",true)
      .setFooter("Created on November 5, 2018")
      .setColor("#ffe082")
      return bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await bot.createAPIMessage(interaction, embed)
                }
            });
}
exports.info = {
  name: 'info',
  aliases: ['botinfo'],
  usage: "",
  description: "shows the info of the bot"
}
//checked
exports.conf={
  cooldown: 0,
  dm: "yes"
}