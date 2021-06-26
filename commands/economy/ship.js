const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    }

    let balance = db.get(`account.${message.author.id}.balance`);

    if (!user) return message.mentionReply("Please mention the user or input the user ID.");
    if (user.bot || user === client.user) return message.mentionReply("This user is a bot.");
    if (user.id === message.author.id || user === message.author) return message.mentionReply("You cant give cookies to yourself, silly. UwU <3");

    let amount = parseInt(args[1]);
    if (!amount) return message.mentionReply("Input an amount of cookies that you would like to give, silly. UwU <3");
    if (isNaN(amount)) return message.mentionReply("Please input a valid number.");
    // isNaN = is Not a Number.

    if (!balance || balance == 0) return message.mentionReply("Your cookie-wallet is empty.");
    if (amount > balance) return message.mentionReply("You don't have enough cookies to give, try an amount you have. `?bal - to view how much cookies you have`");
    if (amount === 0) return message.mentionReply("You can't give nothing, silly. UwU <3");

    await db.add(`account.${user.id}.balance`, amount);
    await db.subtract(`account.${message.author.id}.balance`, amount);

    return message.noMentionReply(`<a:Checkmark:858154320117235742> | You have given (${user.tag}) ${amount} cookies, aww you're so nice! UwU <3`);
}

exports.info = {
    name: "transfer",
    aliases: ["tf", "ship", "give"],
    description: "Transfer a cookies to the user.",
    usage: "transfer <user_id_or_mention> <amount>",
    example: "transfer @t404owo#2452 900"
}

exports.conf = {
    cooldown: 15,
  dm: "no"
}