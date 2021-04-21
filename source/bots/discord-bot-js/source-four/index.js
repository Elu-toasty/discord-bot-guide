// All code here used the https://deepwebdevelopers.github.io/discord-bot-guide/docs/js/s2/installings/doc-cmd-args Section of our docs.

const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

const fs = require('fs');

client.commands = new Discord.Collection();

client.once("ready", () => {
	console.log("Im Online!");
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("message", (message) => {
	if (!message.content.startsWith(config.PREFIX) || message.author.bot) return;

	const args = message.content.slice(config.PREFIX.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (message.content === `${config.PREFIX}hello`) {
		message.channel.send("Hello World!");
	} else if (message.content === `${config.PREFIX}world`) {
		message.channel.send("Goodbye World!");
	} 
	// other commands
});

client.login(config.TOKEN);
