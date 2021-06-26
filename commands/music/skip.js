
const fs = require("fs")
//const skipreq = JSON.parse(fs.readFileSync("./skipreq.json", "utf8"));

module.exports = {
  conf:{
    cooldown: 0,
  dm: "no"
  },
  info: {
    name: "skip",
    description: "To skip the current music",
    usage: "",
    aliases: ["s","next", "n", "nxt"],
  },
//checked, adding something...
  run: async function (client, message, args) {
    const sendError = require("../../util/error");
    const channel = message.member.voice.channel
    if (!channel)return sendError('<a:checkmark:854477462829006858> | You need to join a voice channel to use this command!', message);
    if (message.guild.me.voice.channel !== channel)return sendError('<a:checkmark:854477462829006858> | You need to join voice channel where the bot is to use this command!', message);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("There is nothing playing that I could skip for you.", message);
    
    
    
    
    
        let{vote}=client
    const vcvote = Math.floor(client.guilds.cache.get(message.guild_id).me.voice.channel.members.size / 2)
    const okie = Math.floor(client.guilds.cache.get(message.guild_id).me.voice.channel.members.size / 2 - 1)
    console.log(client.guilds.cache.get(message.guild_id).me.voice.channel.members.size)
    if(!client.guilds.cache.get(message.guild_id).channels.cache.get(message.channel_id).permissionsFor(client.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id)).has("ADMINISTRATOR")&&client.music.vote===true) {
       if(vote.vote > okie) {
         const shiffed = serverQueue.songs.shift();
            if (serverQueue.loop === true) {
                serverQueue.songs.push(shiffed);
            };
    //serverQueue.songs.shift()
    serverQueue.skip = !serverQueue.skip
    serverQueue.connection.dispatcher.end("Skiped the music");
    
    return sendSuccess(`<a:Checkmark:858154320117235742> | The current song has been skipped!`)
       }
       
       if(vote.voters.includes(message.member.user.id)) {
         return message.mentionReply("<:Oops:858157163876319252> | You already voted to skip this song.")
       }
       
       if(vcvote === 2) {
          const shiffed = serverQueue.songs.shift();
            if (serverQueue.loop === true) {
                serverQueue.songs.push(shiffed);
            };
    //serverQueue.songs.shift()
    serverQueue.skip = !serverQueue.skip
    serverQueue.connection.dispatcher.end("Skiped the music");
    return sendSuccess(`<a:Checkmark:858154320117235742> | The current song has been skipped!`)
       }
       
       
       
vote.vote++
       vote.voters.push(message.author.id)
       return sendSuccess(`<a:Checkmark:858154320117235742> | Thanks for vote, we currently need ${Math.floor(vcvote - vote.vote)} more votes to skip.`, message, client)
    
     
     
     
     }else{
    
    
    
    
    
     const shiffed = serverQueue.songs.shift();
            if (serverQueue.loop === true) {
                serverQueue.songs.push(shiffed);
            };
    //serverQueue.songs.shift()
    console.log(serverQueue.loop === true ? "enabled" : "disabled"+ ": !true")

    serverQueue.skip = true
    serverQueue.connection.dispatcher.end("Skiped the music.");
    message.react("801419553841741904")
},
  options:[],
  interaction: async function (client, message, args) {
    const sendError = require("../../util/slash/error"),sendSuccess = require("../../util/slash/success");
    const channel = client.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id).voice.channel
    if (!channel)return sendError('<a:checkmark:854477462829006858> | You need to join a voice channel to use this command!', message);
    if (client.guilds.cache.get(message.guild_id).me.voice.channel !== channel)return sendError('<a:checkmark:854477462829006858> | You need to join voice channel where the bot is to use this command!', message);
    const serverQueue = client.guilds.cache.get(message.guild_id).client.queue.get(message.guild_id);
    if (!serverQueue)return sendError("There is nothing playing that I could skip for you.", message);
    
    
    
    
    let{vote}=client
    const vcvote = Math.floor(client.guilds.cache.get(message.guild_id).me.voice.channel.members.size / 2)
    const okie = Math.floor(client.guilds.cache.get(message.guild_id).me.voice.channel.members.size / 2 - 1)
    console.log(client.guilds.cache.get(message.guild_id).me.voice.channel.members.size)
    if(!client.guilds.cache.get(message.guild_id).channels.cache.get(message.channel_id).permissionsFor(client.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id)).has("ADMINISTRATOR")&&client.music.vote===true) {
       if(vote.vote > okie) {
         const shiffed = serverQueue.songs.shift();
            if (serverQueue.loop === true) {
                serverQueue.songs.push(shiffed);
            };
    //serverQueue.songs.shift()
    serverQueue.skip = !serverQueue.skip
    serverQueue.connection.dispatcher.end("Skiped the music");
    
    return sendSuccess(`<a:Checkmark:858154320117235742> | The current song has been skipped!`)
       }
       
       if(vote.voters.includes(message.member.user.id)) {
         return message.mentionReply("<:Oops:858157163876319252> | You already voted to skip this song.")
       }
       
       if(vcvote === 2) {
          const shiffed = serverQueue.songs.shift();
            if (serverQueue.loop === true) {
                serverQueue.songs.push(shiffed);
            };
    //serverQueue.songs.shift()
    serverQueue.skip = !serverQueue.skip
    serverQueue.connection.dispatcher.end("Skiped the music");
    return sendSuccess(`<a:Checkmark:858154320117235742> | The current song has been skipped!`)
       }
       
       
       
vote.vote++
       vote.voters.push(message.author.id)
       return sendSuccess(`<a:Checkmark:858154320117235742> | Thanks for vote, we currently need ${Math.floor(vcvote - vote.vote)} more votes to skip.`, message, client)
    
     
     
     
     }else{
    
    
    
    
     const shiffed = serverQueue.songs.shift();
            if (serverQueue.loop === true) {
                serverQueue.songs.push(shiffed);
            };
    //serverQueue.songs.shift()
    console.log(serverQueue.loop === true ? "enabled" : "disabled"+ ": !true")

    serverQueue.skip = true
    serverQueue.connection.dispatcher.end("Skiped the music");

     sendSuccess('<a:Checkmark:858154320117235742> | The current song has been skipped!', message, client)
}
  }
};