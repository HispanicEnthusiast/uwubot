const Discord = require("discord.js");
let sendSuccess= require("../../util/success"),sendError= require("../../util/error")
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
    const Channel = message.member.voice.channel;

    if (!Channel) return message.channel.send("JOIN TO A VOICE CHANNEL");

    const Queue = message.client.queue.get(message.guild.id);

    if (!Queue)
      return sendError("There is nothing playing in this server.", message.channel);
    
    const Current = await Queue.songs.shift();
    
    Queue.Songs = Queue.songs.sort(() => Math.random() - 0.5);
    await Queue.songs.unshift(Current);
    
    sendSuccess("<:hikariok:801419553841741904> | Queue Has Been Shuffled", message.channel)
    
  }
};
