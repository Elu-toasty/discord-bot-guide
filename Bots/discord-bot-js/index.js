const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.once("ready", () => {
	console.log("Im Online!");
});

client.on("message", (message) => {
	if (message.content === "!hello") {
		// reply back with the String of "world"
		message.channel.send("Hello World!");
	}

	console.log(message.content);
});

client.login(config.TOKEN);
