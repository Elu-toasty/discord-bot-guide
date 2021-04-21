---
id: doc-cmd-handler
title: Command Handling
---

:::tip
Before getting deep into this topic I recommend read our section on [improving your development enviroment](/docs/js/s3/dev/doc-dev-nodemon). 
:::

Command handling is a great way to organize your discord project and help declutter your `index.js` file. You don't generally one a giant if/else chain of commands.

Here is the template code we will be using for this section.

```js
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
  } 
  // other commands
});

client.login(config.TOKEN);
```

:::note
We are following the [previous page](/docs/js/s2/installings/doc-cmd-args) from this section. But to keep the code short we are omiting previous code.
:::

## Individual command files

Your bot folder should look something like this.

![image](/img/js/cmd/234923847nuehfi38.png)

In this same folder, create a new folder and name it `Commands`. You can run `mkdir commands` in your terminal to get the same result.

The `commands` folder is where all of your future commands will go. In side of this folder create a new file and name it `ping.js`. Then copy and paste the following code: 

```js
module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute(message, args) {
    message.channel.send('Pong.');
  },
};
```

You can do the same thing for the rest of your current commands and put their login inside of the `execute()` function. 

:::tip
`module.exports` is how you export data in Node.js so that you can require() it in other files. 
:::

:::tip
If you need to access your client instance from inside one of your command files, you can access it via `message.client`. If you need to access external files, modules, etc, you should re-require them at the top of the file.
:::

## reading command files

next, in your main file. Add these to lines of code:

```diff
const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json")

+ const fs = require('fs');


+ client.commands = new Discord.Collection();
```
:::tip
Don't worry about installing `fs`. That is a native file system module with nodejs. Read more about it [here](https://nodejs.org/api/fs.html).
:::

The next step is to call the fs module to read our files:

```js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
```

The `fs.readdirSync()` method will return an array of all the file names in that directory, e.g. `['ping.js']`. The filter is there to leave out any non-JavaScript files from the array. With that array, you can loop over it and dynamically set your commands to the Collection you made above.

```js
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}
```

Your final code should look something like this.

```js
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

// other client.on('...') events and other code below
```

And that's it for this section! On the next page, we will learn how to execute our commands folder.