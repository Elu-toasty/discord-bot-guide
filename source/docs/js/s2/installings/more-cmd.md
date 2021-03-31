---
id: doc-bot-more-cmd
title: Adding more commands
---

---

A bot with only one command is a bit boring. In this section we will create a command prefix system for your bot.

## Basic Command Structure

On the last page we created a simple if statment that checks messages for our *hello world* command.

To add another command we can simply use the `else if` operator in javascript.

```javascript {3}
if (message.content === "!hello") {
		message.channel.send("Hello World!");
	} else if (message.content === "world") {
		message.channel.send("Goodbye World!");
	}
```
Now if you want to add more commands you start with the if statment and then add a chain of else statments. 

```js

if ( ... ) {
    // code
} else if ( ... ) {
    // code
} else if ( ... ) {
    // code
} else if ( ... ) {
    // code
}
```

<h4>Problems with this command system</h4>

For a simple bot with very few commands this method is acceptable. But if your trying to create a complex bot you will want something called a command hanlder. We will cover than in another section. 

## Adding a prefix system

A bot prefix is simply a ** keyboard character** that triggers a reply from the bot. 

:::note 

Even though the prefix can be anything, try to make it a symbol that works good on both PC and Mobile devices. 

Exmaple: [ ! ] , [ ? ] , [ . ] , etc.
::: 

Applying a prefix to the code is very simple. First we can destructure the variable `PREFIX` from our config.json file. 

Locate your config.json file where you bot token is and make a new line. Name it prefix and save. 

```json
{
  "TOKEN": "BOT_TOKEN_HERE",
  "PREFIX": "!"
}
```

:::tip
Becuase we decleared config we can do inline destructuring of any variable from our config.json file.
:::

make these changes:

```diff
- 	if (message.content === "!hello") 
+ if (message.content === `${config.PREFIX}


- else if (message.content === "world")
+ else if (message.content === `${config.PREFIX}world`)
```

After changing this code you should see:

![Prefix_setup_success_img](/img/js/s2/prefix_success_img.png)

Remember to save your file and re-run your bot for the changes to apply.

### Code so far

```js
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
	}
});

client.login(config.TOKEN);

```

Now the ping command will trigger whenever the message *starts with* `!hello`!

## Information Commands

Let's start displaying some real data. For now, we'll be displaying basic member/server info.

:::tip
When dealing with the discord api. Servers are refered to as "guilds". Whenever you see someone say "guild", they mean server.
:::

### Server Command

```js
else if (message.content === `${config.PREFIX}server`) {
	message.channel.send(`This server's name is: \`\`\`${message.guild.name}\`\`\``);
}
```

The code above should result in:

![server command exmaple img](/img/js/s2/server_cmd_success_img.png)

We can also find the total ammount of members in the guild and its ID. 

```js
else if (message.content === `${config.PREFIX}server`) {
		message.channel.send(
			`\`\`\`Guild name: ${message.guild.name} \n Guild ID: ${message.guild.id} \n Total Members: ${message.guild.memberCount}\`\`\``
		);
	}
```

And you will get:

![server_command_updates](/img/js/s2/server_cmd_update_success.png)

Of course, you can modify this to your liking. You may also want to display the date the server was created or the server's region. You would do those in the same manner–use `message.guild.createdAt` or `message.guild.region`, respectively.

### Member info command

Want to fetch information on a user? 

```js
else if (message.content === `${config.PREFIX}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
```

This will display the message author's username (not nickname, if they have one set), as well as their user ID.

![user-info-command-ex](/img/js/s2/user-info-cmd-success-img.png)

:::tip
`message.author`refers to the user who sent the message. For a full list of all the properties and methods for the author object (a member of the User class), check out [the discord.js docs](https://discord.js.org/#/docs/main/stable/class/User).
:::

### Avatar Command

In this last exmaple for this page we will fetch a users avatar. 

```js
else if (message.content === `${config.PREFIX}user-info`) {
		// Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
	}
```

This will result in the bot sending your avatar back in the channel.

![avatar_command_img](/img/js/s2/user-avatar-command-success-img.png)

## The problem with if / else if

If you plan on making a small bot with very few commands using if / else will be sufficient becuase your working with a small project. However, for most of us this is not the case.

You probably want your bot to be feature-rich and easy to configure and develop, right? Using a giant if/else if chain won't let you achieve that; it will only hinder your development process.

<h4>Arguments</h4>

After you read about [Arguemnts](/docs/js/s2/installings/doc-cmd-args) we will dive into something called a "command handler" - a system used to handler commands much more efficiently.

Before continuing, here's a small list of reasons why you shouldn't use if/else if chains for anything that's not a small project:

 - Takes longer to find a piece of code you want.
 - Difficult to maintain as it grows.
 - Difficult to debug.
 - Difficult to organize.
 - General bad practice.


### Resulting code 

To see the resulting code [click here](https://github.com/DeepWebDevelopers/discord-bot-guide/blob/alpha/source/bots/discord-bot-js/source_two/index.js).