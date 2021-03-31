---
id: doc-buildingfirstbot-ts
title: Discord Development Portal
sidebar_label: Creating a bot
---

## Before we begin

Before we start actually coding, we have to create an application first. Head over to the [Dev Portal](https://discord.com/developers/applications).

Once logged in (make sure to have a Discord account), you will see something like this:

![Dev Portal](/img/ts-docs/sc-1.png)

Click on `New Application` to register a new bot. Fill out the respective fields, and click `Create`. Once you have created it, you will see something like this:

![Dev Portal](/img/ts-docs/sc-2.png)

Feel free to give a description for your bot! However, this is just an application. We haven't registered the application as a bot. To do this, click on the `Bot` tab on the right. You will see something like this:

![Dev Portal](/img/ts-docs/sc-3.png)

Click `Add Bot` and confirm. Congrats! You have registered the application as a bot! Now

### Gateway intents

Now, on the same tab, scroll down a bit and you will stumble upon this:

![Dev Portal](/img/ts-docs/sc-4.png)

Enable both options, and click save changes. This is really important, especially later on when we code, so that way, we don't get any errors! Now, on the left side of the screen, you will see another tab called `OAuth2`. Click on it. Lets invite the bot now.

### Inviting the bot

Once you have clicked on the tab, you will see something like this:

![Dev Portal](/img/ts-docs/sc-5.png)

Click on the `Bot` option in the check fields area, and then copy that link. Paste it in another tab, and invite the bot. You should have something like this:

![Dev Portal](/img/ts-docs/sc-5.png)

Great! Invite the bot to whatever server. We will come back to this later to get access to our token. Lets set up our project now, and start coding!

:::tip Relaxed and focused!

Quick tip! Try not to be stressed throughout the building of the project. Take a break if you don't feel good. This might not sound quite helpful, but trust me, throughout the process of building a bot, it can be annoying when we encounter problems and errors. If you ever encounter any problems, let us know! If you feel ready, continue on! If not, take a break, and come back later!

:::
