let sendSuccess= require("../../util/success"),sendError= require("../../util/error")
module.exports = {
  conf:{
    cooldown: 0,
  dm: "no"
  },
  info: {
    name: "skipto",
    description: "To skip to the specified song",
    usage: "<number>",
    aliases: ["skip-to"],
  },

  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send("**Please Enter A Song Number!**");

    const { channel } = message.member.voice;
    if (!channel) return message.channel.send("JOIN VOICE CHANNEL!");
    const serverQueue = client.queue.get(message.guild.id);
    if (!serverQueue) {
      message.channel.send("Nothing playing in this server");
    }
    if(isNaN(args[0]))return sendError("<:tairitsuno:801419553933492245> | Please use Numerical Values only", message.channel)
    if(args[0]<2||args[0] >= serverQueue.songs.length)return sendError("<:tairitsuno:801419553933492245> | Please give a valid number that is higher than 1", message.channel)

    if (message.guild.me.voice.channel !== message.member.voice.channel) {
      return message.channel.send(
        "You Have To Be In The Same Channel With The Bot!"
      );
    }

    try {
      serverQueue.songs.splice(0, args[0]);
      serverQueue.connection.dispatcher.end();
      return;
    } catch {
      serverQueue.connection.dispatcher.end();
      await channel.leave();
      return message.channel.send("PLEASE TRY AGAIN");
    }
  }
};
