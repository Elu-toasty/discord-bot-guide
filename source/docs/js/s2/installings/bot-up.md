---
id: doc-bot-up
title: Getting Your Bot Up & Running
---

---

## Node Version check

To run your Discord bot make sure to have the lasted version of `Nodejs` installed.

```
node --version
```

After checking that create a new file inside your _discord-bot_ folder called **index.js**. This file can be named anything and will be the source of our bot.

Make sure you have also installed the discord.js package from the other parts of the documentation.

## Logging into Discord

Once you've created a new file, do a quick check to see if you have everything set up properly. Copy & paste the following code into your file and save it. Don't worry if you don't understand it right away—it'll be explained a bit more in-depth after this.

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.once("ready", () => {
	console.log("Im Online!");
});

client.login(config.TOKEN);
```

Next head back over to your console and type `node index.js` (or whatever you named your file.) This will run the bot!

![bot terminal login exmaple](/img/js/s2/terminal-bot-login.png)

:::tip
Open up your package.json file, look for something like **"main": "index.js"**, and change **"index.js"** to whatever your file name is. After saving, you can simply run the `node .` shortcut in your console to start the process!
:::

If everything does well you should see:

![bot success online example img](/img/js/s2/bot-online-success.png)

If not then retry the steps above.

### Example code explained

Here is a commented version of the code with more depth and information.

```js
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

// login the client(your bot) with Discord using your bot token
client.login(config.TOKEN);
```

Although it may be simple, it's important to understand the basics of what your code does. So later down the line, you will feel comfortable with making changes.

So think you're ready to start creating your first command? Let's get started then!

### Listening for messages

The most basic and easiest way to make a command is using the discord.js message event. Before this make sure to `Ctrl + c` in our terminal to end the bot process. Navigate to your code editor and paste the following code above `client.log(...)`

```js
//
client.on("message", (message) => {
	console.log(message.content);
});
```

Notice how the code uses `.on` rather than `.once` like in the ready event. This means that it can trigger multiple times. Save the file, go back to your console, and start the process up again. Whenever a message is sent inside a channel your bot has access to, the message's content will be logged to your console.

:::tip Discord.js is flexible
You can define _client_ as anything you want. This is still basic javascript.

If you wanted to do:

```js
// assumes you have example code above
const PIZZA = new Discord.Client();

PIZZA.once("ready", () => {
	console.log("Im Online!");
});
```

It would still work fine. Just know that you will have to be consistent with the variable names you pick.
:::

### Replying to messages

The next step in creating our first command is replying to user messages.

```js
if (message.content === "!hello") {
	// reply back with the String of "world"
	message.channel.send("Hello World!");
}
```

Restart your bot and then send `!hello` to a channel your bot has access to. If all goes well, you should see something like this:

![hello world bot success example img](/img/js/s2/hello-world-bot-success.png)

Final Code:

```js
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
```

And there is your first hello world in Discord.js! Exciting stuff, isn't it? This is only the beginning, so let's move on to making some more commands.

### Code

Remember that all our code is available for free to view. Simply Visite [here](https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/Bots) for the javascript example bots full source code. Eveything used in the bot is based on this JavaScript documentaion.

For a direct link to the source code in this section [click here](../../../../../Bots/discord-bot-js/source_one/index.js).
