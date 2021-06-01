let discord = require("discord.js");

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'y.help') {
    msg.reply('Check out my commands here: https://docs.google.com/document/d/1ckSnvVqVQnGhI36xMlw4fGX_eqpan83RNUZu7sffKeI');
  }
});

client.login('ODI1MTE2NzcxOTk2MTM5NTMw.YF5P4A.ZaC9nFVMcBgN62x-EnU-Rl700cg');

exports.info = {
  name: "help",
  aliases: [
    "h",
    "command",
    "commands",
    "commandlist",
    "commandslist",
    "cmd",
    "cmds",
    "cmdlist",
    "cmdlists"
  ],
  usage: "(<command>)",
  description: "Get the information of a command or get the help list"
};
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
