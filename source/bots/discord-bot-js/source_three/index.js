// All code here used the https://deepwebdevelopers.github.io/discord-bot-guide/docs/js/s2/installings/doc-cmd-args Section of our docs.

const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

client.once("ready", () => {
	console.log("Im Online!");
});

client.on("message", (message) => {
	if (!message.content.startsWith(config.PREFIX) || message.author.bot) return;

	const args = message.content.slice(config.PREFIX.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

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
	} else if (command === "args-info") {
		if (!args.length) {
			return message.channel.send(
				`You didn't provide any arguments, ${message.author}!`
			);
		} else if (args[0] === "food") {
			message.channel.send("is good!");
			message.channel.send(`First argument: \`${args[0]}\``);
			return;
		}
		message.channel.send(`Command name: ${command}\n\n Arguments: \`${args}\``);
	} else if (command === "member-info") {
		// grab the "first" mentioned user from the message content
		// this will return a `User` object, just like `message.author`
		let taggedTarget = message.mentions.users.first();

		if (!taggedTarget) return message.reply("You did not mention a target!");

		message.reply(
			`Information about this user. \n **Users Name:** \`${taggedTarget.username},\` \n  **UserTag:** \`${taggedTarget.tag}\` \n **UserID:** \`${taggedTarget.id}\``
		);
	} else if (command === "avatar") {
		if (!message.mentions.users.size) {
			return message.channel.send(
				`Your avatar: <${message.author.displayAvatarURL({
					format: "png",
					dynamic: true,
				})}>`
			);
		}

		const avatarList = message.mentions.users.map((user) => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({
				format: "png",
				dynamic: true,
			})}>`;
		});

		// send the entire array of strings as a message
		// by default, discord.js will `.join()` the array with `\n`
		message.channel.send(avatarList);
	} else if (command === "prune") {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply("that doesn't seem to be a valid number.");
		} else if (amount <= 1 || amount > 100) {
			return message.reply("you need to input a number between 2 and 100.");
		}

		message.channel.bulkDelete(amount, true).catch((err) => {
			console.error(err);
			message.channel.send(
				"there was an error trying to prune messages in this channel!"
			);
		});
		message.channel.send(
			`I have deleted \`${amount}\` messages from ${message.channel.name}!`
		).then((m) => {
			m.delete({timeout: 5000})
		})
	}
});

client.login(config.TOKEN);
