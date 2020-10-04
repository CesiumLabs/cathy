const Cathy = require("../Cathy");
const bot = new Cathy();
const Discord = require("discord.js");
const client = new Discord.Client({
    disableMentions: "all"
});

client.on("ready", () => console.log("ready"));

client.on("message", message => {
    if (message.author.bot || !message.guild) return;
    if (!message.content) return;

    if (message.channel.id === "762316248653889556") {
        const response = bot.chat(message.cleanContent, message.author.username.length < 3 ? "User" : message.author.username);+
        message.channel.send(response);
    }
});

client.login("xxxxxxxxxxxxxxxxx");