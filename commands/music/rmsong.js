const { MessageEmbed } = require("discord.js");

module.exports = {
  conf:{
    cooldown: 0,
  dm: "no"
  },
 info: 
  {
  name: "removesong",
  description: "Drop The Song From Queue",
    usage:"<number>",
  aliases: ["rmsong",
            "remove-song",
            "drop",
            "drop-song",
            "dropsong",
            "rm-song",
            "qremove",
            "queueremove",
            "quremove",
            "qrm",
            "queuerm",
            "qurm"]
  },
  interaction: async (bot, message, arg) => {
    const sendSuccess = require("../../util/slash/success")
const sendError =require("../../util/slash/error")
    let args=[]
if(arg)args=[arg.find(arg => arg.name.toLowerCase() == "song").value]  
    const channel = await bot.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id).voice.channel
    if (!channel)return sendError('<:Oops:858157163876319252> | You need to join a voice channel to use this command!', message, bot);
    if (bot.guilds.cache.get(message.guild_id).me.voice.channel !== channel)return sendError('<:Oops:858157163876319252> | You need to join voice channel where the bot is to use this command!', message, bot);

    const serverQueue = bot.guilds.cache.get(message.guild_id).client.queue.get(message.guild_id);

    if (!serverQueue)return sendError("<:Oops:858157163876319252> | There is nothing playing in this server.", message, bot);
     if(isNaN(args[0]))return sendError("<:Oops:858157163876319252> | Please use numerical values only.", message, bot)
    if(args[0]<1)return sendError("<:Oops:858157163876319252> | Please give a number that is higher than 0.", message, bot)
   
    if(args[0] > serverQueue.songs.length) {
      return sendError("<:Oops:858157163876319252> | Unable to find that song in the queue.", message, bot)
    }
    
    
    serverQueue.songs.splice(args[0], 1)
    sendSuccess("<a:Checkmark:858154320117235742> | Song has been removed sucessfully!", message, bot)
  },
  options: [
  {
    name: "song",
    description: "which song do you want to remove(By number)",
    type: 3,
    required: true
  }
],
  run: (bot, message, args) => {
    
    const sendSuccess = require("../../util/slash/success")
const sendError =require("../../util/slash/error")
    args=[]
if(arg)args=[arg.find(arg => arg.name.toLowerCase() == "song").value]  
    const channel = await bot.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id).voice.channel
    if (!channel)return sendError('<:Oops:858157163876319252> | You need to join a voice channel to use this command!', message, bot);
    if (bot.guilds.cache.get(message.guild_id).me.voice.channel !== channel)return sendError('<:Oops:858157163876319252> | You need to join voice channel where the bot is to use this command!', message, bot);

    const serverQueue = bot.guilds.cache.get(message.guild_id).client.queue.get(message.guild_id);

    if (!serverQueue)return sendError("<:Oops:858157163876319252> | There is nothing playing in this server.", message, bot);
     if(isNaN(args[0]))return sendError("<:Oops:858157163876319252> | Please use numerical values only.", message, bot)
    if(args[0]<1)return sendError("<:Oops:858157163876319252> | Please give a number that is higher than 0.", message, bot)
   
    if(args[0] > serverQueue.songs.length) {
      return sendError("<:Oops:858157163876319252> | Unable to find that song in the queue.", message, bot)
    }
    
    
    serverQueue.songs.splice(args[0], 1)
    sendSuccess("<a:Checkmark:858154320117235742> | Song has been removed sucessfully!", message)
  },
  
};
