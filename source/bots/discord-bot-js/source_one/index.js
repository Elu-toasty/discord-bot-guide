// we require the discord.js module from our node package
const Discord = require("discord.js");

// we then createw a new Discord client
const client = new Discord.Client();

// declears the config file path
const config = require("./config.json");

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
	console.log("Im Online!");
});

// Calling the message event from client and listening for messages
client.on("message", (message) => {
	// reply to all messages with "!hello"
	if (message.content === "!hello") {
		// reply back with the String of "world"
		message.channel.send("Hello World!");
	}
	// log the message interations
	console.log(message.content);
});

// login the client(your bot) with Discord using your bot token
client.login(config.TOKEN);
