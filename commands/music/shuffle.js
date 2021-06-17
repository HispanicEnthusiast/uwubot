const Discord = require("discord.js");
module.exports = {
  info:{
  name: "shuffle",
  description:"Shuffle the Queue",
  usage:"",
  aliases: ["sf", "shufflequeue"],
  },
  conf:{
    cooldown: 0,
  dm: "no"
  },
  run: async (client, message, args) => {
    let sendSuccess= require("../../util/success"),
        sendError= require("../../util/error")

    
    const channel = message.member.voice.channel
    if (!channel)return sendError('<a:checkmark:854477462829006858> | You need to join a voice channel to use this command!', message);
    if (message.guild.me.voice.channel !== channel)return sendError('<a:checkmark:854477462829006858> | You need to join voice channel where the bot is to use this command!', message);    
    
    const Queue = await message.client.queue.get(message.guild.id);

    if (!Queue)
      return sendError("<a:checkmark:854477462829006858> | There is nothing playing in this server.", message);
    
    const Current = await Queue.songs.shift();
    
    
      Queue.songs = Queue.songs.sort(song => song[Math.floor(Math.random()*Queue.songs.size)]);
    await Queue.songs.unshift(Current);
    //message.react("801419553841741904")
    sendSuccess("<a:checkmark:854477462829006858> | Queue has been shuffled!", message, client)

  },
  interaction: async (client, message, args) => {
    let sendSuccess= require("../../util/slash/success"),
        sendError= require("../../util/slash/error")

    
    const channel = await client.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id).voice.channel

    if (!channel)return sendError('<a:checkmark:854477462829006858> | You need to join a voice channel to use this command!', message, client);
    if (client.guilds.cache.get(message.guild_id).me.voice.channel !== channel)return sendError('<a:checkmark:854477462829006858> | You need to join voice channel where the bot is to use this command!', message, client);    
    
    const Queue = await client.guilds.cache.get(message.guild_id).client.queue.get(message.guild_id);
    
    if (!Queue)
      return sendError("<a:checkmark:854477462829006858> | There is nothing playing in this server.", message, client);
    
    const Current = await Queue.songs.shift();
    
          Queue.songs = Queue.songs.sort(song => song[Math.floor(Math.random()*Queue.songs.size)]);
    await Queue.songs.unshift(Current);
    //message.react("801419553841741904")
    sendSuccess("<a:checkmark:854477462829006858>| Queue has been shuffled!", message, client)

        
  },
  options:[]
  
};