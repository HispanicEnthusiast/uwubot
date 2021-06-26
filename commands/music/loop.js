const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");


module.exports = {
  conf:{
    cooldown: 0,
  dm: "no"
  },
  info: {
    name: "loop",
    description: "To loop songs :D",
    usage:"",
    aliases: ["l"],
  },
//checked
  run: async function (bot, message, args) {
    const sendSuccess = require("../../util/success")
const sendError =require("../../util/error")
const client = bot;
    const channel = message.member.voice.channel
    if (!channel)return sendError('<:Oops:858157163876319252> | You need to join a voice channel to use this command!', message);
    if (message.guild.me.voice.channel !== channel)return sendError('<:Oops:858157163876319252> | You need to join voice channel where the bot is to use this command!', message);
    var serverQueue = message.client.queue.get(message.guild.id);
if (!serverQueue) {
      return sendError('<:Oops:858157163876319252> | There are no songs on playing right now.', message);
    }
  if (!serverQueue.songs[0]) {
      return sendError('<:Oops:858157163876319252>| There are no songs on playing right now.', message);
    }
    serverQueue.loop = !serverQueue.loop;
    
            return sendSuccess(`<a:Checkmark:858154320117235742> | Loop is now **${serverQueue.loop === true ? "enabled" : "disabled"}**`, message)
    return;
  },
  options:[],
  interaction: async function (bot, message, args) {
    let sendError=require('../../util/slash/error.js')
    let sendSuccess=require('../../util/slash/success.js')
const client = bot;
    
    let channel = await client.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id).voice.channel;
    if (!channel)return sendError('<:Oops:858157163876319252> | You need to join a voice channel to use this command!', message, bot);
    if (client.guilds.cache.get(message.guild_id).me.voice.channel !== channel)return sendError('<:Oops:858157163876319252> | You need to join voice channel where the bot is to use this command!', message, bot);
    var serverQueue = client.guilds.cache.get(message.guild_id).client.queue.get(message.guild_id);
if (!serverQueue) {
      return sendError('<:Oops:858157163876319252> | There are no songs on playing right now.', message, bot);
    }
  if (!serverQueue.songs[0]) {
      return sendError('<:Oops:858157163876319252> | There are no songs on playing right now.', message, bot);
    }
    serverQueue.loop = !serverQueue.loop;
    
            return sendSuccess(`<a:Checkmark:858154320117235742> | Loop is now **${serverQueue.loop === true ? "enabled" : "disabled"}**`, message, bot)
    return;
  }
};