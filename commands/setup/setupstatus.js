const { MessageEmbed } = require("discord.js");
const sendError =require("../../util/success.js")
exports.conf={
  cooldown: 0,
  dm: "no"
}
exports.run = (bot, message, args) => {
  let perm=message.channel.permissionsFor(message.member)//perm.has()
      if (!perm.has("MANAGE_GUILD")&&!bot.config.owners.includes(message.author.id)&&!perm.has("MANAGE_CHANNELS")&&!perm.has("ADMINISTRATOR"))
      return message.mentionReply(
        "<:Oops:858157163876319252> | You can't use that command! you need at least manage channels, manage server or admin perm!"
      );
    let autorole = `<@&`+bot.db.get(`${message.guild.id}_autorole`)+`>`;
      let log = bot.db.get(`<#${message.guild.id}_botlog`)+`>`;
      let welcomemessage = "`"+bot.db.get(`${message.guild.id}_welcomemessage`)+"`";
      let leavemessage = "`"+bot.db.get(`${message.guild.id}_leavemessage`)+"`";
      let welcomemessagesend = `<#`+bot.db.get(`${message.guild.id}_welcomechannel`)+`>`;
      let leave = `<#`+bot.db.get(`${message.guild.id}_leavechannel`)+`>`;
      let mute =`<@&`+bot.db.get(`${message.guild.id}_muterole`)+`>`;
      let mutetime = `In Development - Mute Time is Enabled.))`;
      let verifychannel = `<#`+bot.db.get(`${message.guild.id}_verifychannel`)+`>`;
      let verifyrole = `<@&`+bot.db.get(`${message.guild.id}_verifyrole`)+`>`;
      if (!bot.db.get(`${message.guild.id}_autorole`)) autorole = "<:Oops:858157163876319252>";
      if (!bot.db.get(`${message.guild.id}_botlog`)) log = "<:Oops:858157163876319252>";
      if (!bot.db.get(`${message.guild.id}_welcomemessage`)) welcomemessage = "<:Oops:858157163876319252>";
      if (!bot.db.get(`${message.guild.id}_leavemessage`)) leavemessage = "<:Oops:858157163876319252>";
      if (!bot.db.get(`${message.guild.id}_welcomechannel`)) welcomemessagesend = "<:Oops:858157163876319252>";
      if (!bot.db.get(`${message.guild.id}_leavechannel`)) leave = "<:Oops:858157163876319252>";
      if (!bot.db.get(`${message.guild.id}_muterole`)) mute = "<:Oops:858157163876319252>";
      if (!bot.db.get(`${message.guild.id}_mutetime`)) mutetime = "<:Oops:858157163876319252>";
      if (!bot.db.get(`${message.guild.id}_verifychannel`)) verifychannel = "<:Oops:858157163876319252>";
      if (!bot.db.get(`${message.guild.id}_verifyrole`)) verifyrole = "<:Oops:858157163876319252>";
      
      const embed = new MessageEmbed()
        .setTitle(
          `Settings for ${message.guild.name} | <:Oops:858157163876319252> = Not Setup`
        )
        .setDescription(`${autorole} : Welcome Auto-Role (uwu setautorole)
${log} : Bot Log (uwu setbotlog)
${welcomemessage} : Welcome Message (uwu setwelcomemessage)
${leavemessage} : Leave Message (uwu setleavechannel)
${welcomemessagesend} : Welcome Channel (uwu setwelcomechannel)
${leave} : Leave Channel (uwu setleavechannel)
${mute} : Mute Role (uwu setmuterole)
${mutetime} : Mute Time (uwu setmutetime)
${verifychannel} : Verification Channel (uwu setverifychannel)
${verifyrole} : Verified Role (uwu setverifyrole)`)
        .setTimestamp();
      message.noMentionReply(embed);
      return;
  }

exports.info = {
name: 'setupstatus',
  aliases:["setupstat","setupstats","setup-ststus","setup-stat","setup-stats"],
  description: "showing the setup status",
  usage: ""
}