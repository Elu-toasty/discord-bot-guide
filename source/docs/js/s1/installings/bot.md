---
id: doc-bot
title: Getting Bot Token
author: ThatGuyJamal
---

---

:::info
Thanks for choosing the JavaScript Documentation! Let's get started.
:::

## How To create your bot token

When creating a Discord Bot there are a few steps we much complete before we can start coding it. The first one is getting the bot token. The bot token is simply a string of random numbers and letters or a super long password to connect to the Discord API. In short, it's your bot's personal password.

### Token

First head over to the [Discord developers](https://discord.com/developers/applications) website. Here you will need to log in with your discord account.

Next, you want to create a new application. Don't worry about the other buttons, we will explore them later.

![Discord Application example image](/img/js/s1/discord-new-apply.png)

After hitting `New Application` you can enter the information you want for your bot. For this tutorial, we will be using the name **JavaScript Bot**. Feel free to use anything you like, you can always change it later.

Now that we have our discord bot registered, we can just about start coding. Navigate into the root directory of your bot folder. For us its `discord-bot` with was shown how to set up [here](/docs/js/s1/doc-dj-node). Create a new file called `config.json`.

Navigate to your bot configuration on the discord developer website.

![discord bot nav exmaple img](/img/js/s1/misc-djs-img1.png)

After clicking you want to add your new application as a bot. _keep in mind this can't be undone, but that's okay for this tutorial._

![Bot created exmaple](/img/js/s1/misc-djs-bot-creation.png)

### Adding to your server

And we are done, our bot is complete and the last thing to do is copy and paste your `TOKEN` into your code editor. In the config.json file we created above you should have something similar to this inside of it.

```json
{
	"TOKEN": "YOUR-BOT-TOKEN-HERE"
}
```

:::danger
Sharing your bot token is extremely dangerous, it can allow other users to log in to your bot and do malicious things to it. If it ever gets leaked reset it immediately!
:::
