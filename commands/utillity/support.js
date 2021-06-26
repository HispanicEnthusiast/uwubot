exports.run = (bot, message, args) => {
         const Discord = require("discord.js")
         let link =
             `https://discord.gg/${process.env.DISCORD_BOT_INVITE}`
         let msgembed = new Discord.MessageEmbed()
      .setColor('#ffe082')
         .setTitle("Support Server")
      .setDescription('My Main Support Server: https://discord.gg/RpyKuDNghR')
      .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
       message.noMentionReply("Generating my support server invite link...")
        .then(msg => {
          msg.edit("", msgembed)
       });
  }
exports.interaction = async(bot, interaction, args) => {
         const Discord = require("discord.js")
         let link =
             `https://discord.gg/${process.env.DISCORD_BOT_INVITE}`
         let embed = new Discord.MessageEmbed()
      .setColor('#ffe082')
      .setTitle("Support Server")
      .setDescription('My Main Support Server: https://discord.gg/RpyKuDNghR')
      .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
       bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await bot.createAPIMessage(interaction, embed)
                }
            });
  }
exports.options=[]
  exports.info = {
    name: 'support',
  aliases:[],
  usage: "",
    description: "sends the support server, where you can ask us, report bugs, and add new ideas",
  }
exports.conf={
  cooldown: 0,
  dm: "yes"
}
