---
id: doc-cmd-args
title: Command Arguments
---

Depending on the bot, you may want commands to be dynamic, and depending on the answer give different results.

In this section, we will cover how to extract and extend user inputs from discord. This action is referred to as "arguments" or "args".

## Basic arguments

We'll be covering two things at once here. We will explain along the way, so don't worry if you don't understand immediately.

Go to your main bot file and find the `client.on('message', ...)` section. Then, add the following code at the top of this event listeners callback function (the part we replaced with `...` here).

```js
if (!message.content.startsWith(config.PREFIX) || message.author.bot) return;

const args = message.content.slice(config.PREFIX.length).trim().split(" ");
const command = args.shift().toLowerCase();
```

What's this code doing?

- The first if statement checks if the message either doesn't start with our prefix or the author of the message is a bot itself.
- In the next line we created an `args` variable that slices off the prefix and removes the leftover whitespaces, and lastly splits it into an array by spaces.
- Finally we created a `command` variable by calling `args.shift()`. This will take the first element in the array and return it while also removing the original array (so that you don't have the command name string inside the `arg`s array).

### Args-exmaple command

Let's create a quick command to check out the result of our new addition:

```js
else if (command === "args-info") {
        if (!args.length) {
            return message.channel.send(
                `You didn't provide any arguments, ${message.author}!`
            );
        }

        message.channel.send(`Command name: ${command}\n\n Arguments: \`${args}\``);
    }
```

If the user does not provide any arguments it will result in:

![no_args_exmaple_img](/img/js/s2/invalive_example_img_args.png)

However, when _arguements_ are entered the bot will reply:

![success_args_exmaple_img](/img/js/s2/args_img_success_example.png)

Looks good! Don't worry about the comma separation; that's the expected output when trying to send an array as a string.

### Args Command extended

Now that you have an array of arguments, you can interact with it accordingly! Try out this small addition to the command:

```js
else if (command === "args-info") {
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
```

So if the user sends an argument behind the command `args-info`, the bot will reply with that argument. However if the user inputs `args-info food` The bot will reply _is good_ and also send the argument _food_ back.

### Caveats

Currently, you're using `.split(' ')` to split the command arguments. However, there's a slight issue with this. As is, it'll split the string by every space. Well, what happens if someone accidentally (or even purposely) adds additional spaces? Here's what:

![args_err_img_example](/img/js/s2/args_error_exmaple_cav_img.png)

If you've never done something like this before, this probably isn't what you'd expect, right? Thankfully, there's a simple solution to this issue. The red line is what to remove, and the green line is its replacement.

```diff
- const args = message.content.slice(prefix.length).trim().split(' ');
+ const args = message.content.slice(prefix.length).trim().split(/ +/);
```

![args_err_img_success](/img/js/s2/args_success_img_err.png)

Awesome! Nothing to worry about in that regard about now. This uses something called a "regular expression" (commonly referred to as "regex") to handle that small (but important) bug.

## Common argument uses

Here we will cover some common uses of arguments in guilds.

### Mentions

In this example, we can grab user information based on the targeted member.

```js
else if (command === "member-info") {
        // grab the "first" mentioned user from the message content
        // this will return a `User` object, just like `message.author`
        let taggedTarget = message.mentions.users.first();

        message.reply(
            `Information about this user. \n **Users Name:** \`${taggedTarget.username},\` \n  **UserTag:** \`${taggedTarget.tag}\` \n **UserID:** \`${taggedTarget.id}\``
        );
    }
```

![args_metions_img_exmaple](/img/js/s2/mentions_args_uses_exmaple.png)

This command can help gather basic data on a user's account simply by mentioning the user. However, there are a few bugs with this system.

For one thing, if the user you mention does not exist or cant be found by the bot (for several reasons) the command will throw an error and crash your bot. To avoid this we need another if statement to handle this error.

Add this line right under your taggedTarget declaration:

```js
if (!taggedTarget) return message.reply("You did not mention a target!");
```

This simple line of code will alert the user running the command to mention someone if the bot can't find whatever argument is given.

![this](/img/js/s2/arg_targ_error_exmaple_img.png)

If you are specifically targeting **users** you can also use `message.mentions.users.size`. This will check the `Collection` property of the `user` you're trying to call.

Thus, you can error handle like this:

```js
if (!message.mentions.users.size)
	return message.reply("You did not mention a target!");
```

:::tip
Adding `return` to your if statements can be important for stopping the remaining code from running.
:::

### handling multiple mentions

For this example, we will create an `!avatar` command where it'll display the avatar of all the mentioned users or your avatar if no users were mentioned.

Taking the snippet for the code you just used, you can do it just like this:

```js
 else if (command === 'avatar') {
    if (!message.mentions.users.size) {
        return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    }
    // ...
 }
```

If you provide the `dynamic` option, you will receive a `.gif` URL if the image is animated; otherwise, it will fall back to the specified `format` or its default `.webp`.

That part is simple; recycle the if statement you used in the section above and displaying the link to your avatar.

The next part is where it takes a turn–displaying the avatars of all the mentioned users. But it's simpler than you may think!` message.mentions.users` returns a **Collection** (as previously mentioned), which you can loop over in several different ways. You'll be using `.map()` to loop here since it allows you to easily collect and store data in a variable to send one final message in the end, as opposed to multiple.

```js
else if (command === 'avatar') {
    if (!message.mentions.users.size) {
        return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    }

    const avatarList = message.mentions.users.map(user => {
        return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
    });

    // send the entire array of strings as a message
    // by default, discord.js will `.join()` the array with `\n`
    message.channel.send(avatarList);
}
```

Your command should look like this:

![yes](/img/js/s2/avatar_cmd_success_exmaple_img.png)

Don't worry, later we will example how to work embeds and make image commands look nice. For now, this example showed that you can pass _two_ arguments into a message and the bot will reply with that _data_.

### Number ranges

Sometimes you'll want users to give you input that ranges from X to Y, but nothing outside of that. Additionally, you want to make sure that they give you an actual number and not random characters.

A useful command could be deleting 10 messages from a user who spammed a channel.

The first step would be to check if the input they gave is an actual number.

```js
else if (command === 'prune') {
	const amount = parseInt(args[0]);

	if (isNaN(amount)) {
		return message.reply("You did not enter a valid number.")
	}

	// ...
}
```

So what you need to do next is check if the first argument is between X and Y. Following the idea of a prune command, you'll most likely want to use the .`bulkDelete()` method, which allows you to delete multiple messages in one fell swoop.

With that said, that method does have its limits: you can only delete a minimum of 2 and a maximum of 100 messages (at a time). Fortunately, there are a few ways to deal with that. One of those ways would be to check the value of the `amount` variable, like so:

```js
if (isNaN(amount)) {
	return message.reply("that doesn't seem to be a valid number.");
} else if (amount < 2 || amount > 100) {
	return message.reply("you need to input a number between 2 and 100.");
}

// ...
```

Now all that's left is to delete the messages! It's a simple single line of code:

```js
message.channel.bulkDelete(amount);
```

And you not have a working prune command! Test it out!

### Caveats

You should note that there are a few caveats with the .`bulkDelete()` method. The first would be the trying to delete messages older than two weeks, which would normally error. Here's an easy fix for that:

```js
message.channel.bulkDelete(amount, true);
```

The second parameter in the `.bulkDelete()` method will filter out messages older than two weeks if you give it a truthy value. So if there are 50 messages and 25 of them are older than two weeks, it'll only delete the first 25 without throwing an error. However, if all the messages you're trying to delete are older than two weeks, then it will still throw an error. Knowing this, you should catch that error by chaining a `.catch()`.

```js
message.channel.bulkDelete(amount, true).catch((err) => {
	console.error(err);
	message.channel.send(
		"there was an error trying to prune messages in this channel!"
	);
});
```

:::tip
If you aren't familiar with the .catch() method, it catches errors on Promises. Unsure what Promises are? Google around for more info!
:::

The other caveat with this is that the !prune {number} message you sent will also count towards the amount deleted. This means that if you send !prune 2, it'll delete that message and only one other. There are a couple ways around this, but we'll take the easiest route for the sake of the tutorial. Here are the edits to make to your current code:

```diff
- const amount = parseInt(args[0]);
+ const amount = parseInt(args[0]) + 1;
```

```diff
- else if (amount < 2 || amount > 100) {
-   return message.reply('you need to input a number between 2 and 100.');
- }
+ else if (amount <= 1 || amount > 100) {
+   return message.reply('you need to input a number between 1 and 99.');
+ }
```

<h3>A little extra</h3>

If you like me you want your command to look cool right?

Well here are a few things you can add to your code to make it more advanced than what we did above.

First here is the code were working with. Its the working version of the `prune` command.

```js
 else if (command === "prune") {
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
 }
```

Now if you wanted to check how many messages where deleted we can use arguments again in another message method.

```js
message.channel.send(
			`I have deleted \`${amount}\` messages from ${message.channel.name}!`
		);
```
![yes i did it](/img/js/s2/yes_prune_command_exm.png)

Now you can get a success message with more information on what has happened after running that command.

If you want this success message to delete after a few seconds simply add:

```js
.then((m) => {
			m.delete({timeout: 5000})
		})
```

Now When we run this code after `5000` milliseconds (five seconds) the bots message will delete itself.

Finally code: 

```js
else if (command === "prune") {
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
```

Feel free to change and try out new things! Keep on reading.

## Code

Thanks for reading so far! Remember all the code is avalible in our github repo under [bot exmaples](https://github.com/DeepWebDevelopers/discord-bot-guide/tree/alpha/source/bots).
