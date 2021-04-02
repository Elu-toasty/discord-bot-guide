const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.once("ready", () => {
	console.log("Im Online!");
});

client.on("message", (message) => {
	if (message.content === `${config.PREFIX}hello`) {
		message.channel.send("Hello World!");
	} else if (message.content === `${config.PREFIX}world`) {
		message.channel.send("Goodbye World!");
	} else if (message.content === `${config.PREFIX}server`) {
		message.channel.send(
			`\`\`\`Guild name: ${message.guild.name} \n Guild ID: ${message.guild.id} \n Total Members: ${message.guild.memberCount}\`\`\``
		);
	} else if (message.content === `${config.PREFIX}user-info`) {
		message.channel.send(
			`Your username: ${message.author.username}\nYour ID: ${message.author.id}`
		);
	} else if (message.content === `${config.PREFIX}avatar`) {
		// Send the user's avatar URL
		message.reply(message.author.displayAvatarURL());
	}
});

client.login(config.TOKEN);
