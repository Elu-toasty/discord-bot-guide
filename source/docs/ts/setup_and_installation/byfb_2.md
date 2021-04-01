---
id: doc-buildingfirstbot-ts-2
title: Setting up our project
sidebar_label: Installation of main packages
---

---

:::note

Alright, welcome! Make sure to check out the last doc before you move onto this one. Now, we are going to actually setup our project and start coding the bot. Follow the instructions down below, and you should be good. Lets go.

:::

## Create a new folder

![Installation](/img/ts-docs/sc-7.png)

Lets create a new folder where the source of our code will be stored. Personally, I like creating the new folder in my Downloads folder. To do that, go to `File explorer` > `Downloads` then right click, click `New` and click `Folder`. Rename the folder to whatever you would like. Open the folder in vscode or whatever text editor you would like.

### Text editor and Node JS

For this project, I will be using Visual Studio Code. Its my personal favorite text editor, but you can use whatever you like, it doesn't matter too much. Other ones you can install could be Atom, Sublime Text, Vim, etc. We also need to download Node JS if you haven't already. Links will be down below. Once you have a text editor and Node JS installed, continue on to the next portion.

**Download Links:**

- [VSCODE](https://code.visualstudio.com/download)
- [Node JS](https://nodejs.org/en/download/)

## Configuration

Alright, now that we have a text editor and Node JS installed, lets continue. Open up the folder in your editor and we need to install some packages. For the package manager, you can use npm or yarn, but I will be using npm for this video. Open up your terminal. You can do this (in vscode) by going to the top left and click `Terminal` and then click `New Terminal`. Your terminal should then pop up.

![Installation](/img/ts-docs/sc-8.png)

One last thing before we begin is to initialize node js in our project. To do this, type `npm init` to initialize this process. Follow the steps below and add what you would like.

![Installation](/img/ts-docs/sc-9.png)

Now that we have initialized it, we can install packages.
Great, lets install packages now. Right now, we only need two, Discord.js and Typescript. Run the following command:

For npm:

```ts title="Terminal"
npm i discord.js typescript -g
```

For yarn:

```ts title="Terminal"
yarn discord.js typescript -g
```

Nice, we have installed the main two packages to get started!

## Tsconfig and specifying properties

Lets create a folder called `src`. This will store all of our Typescript files to be compiled.

Once you have done that, go back to the root directory and create another file called `tsconfig.json` so we can specify properties. Or, you can run `tsc --init` in the terminal to create one for you. Once inside the file, delete everything that may be there, and add the following properties:

```ts
{
	"compilerOptions": {
		"target": "ES6",
		"lib": ["ES2015", "ESNext"],
		"module": "CommonJS",
		"allowJs": true,
		"checkJs": true,
		"outDir": "./dist",
    "rootDir": "./src",
		"removeComments": true,
		"noEmit": false,
		"noEmitOnError": false,
		"noImplicitAny": false,
		"noImplicitThis": true,
		"experimentalDecorators": true,
		"emitDecoratorMetadata": true,
		"esModuleInterop": true,
		"strictPropertyInitialization": false,
		"moduleResolution": "node",
		"forceConsistentCasingInFileNames": true
	},
}
```

This specifies the properties for the Typescript project we are about to create. Mainly, we are specifying a rootDir which is our `src` folder, and saying that all the compiled Javascript should go in the `dist` folder. You can call it what you like, some call it build as well! Great, now that we have this done, we are ready to move onto the next step: Coding!

:::tip Time to code!

🚀 Its time to code! Again, please make sure that you have a basic understanding of Typescript in order to follow this tutorial, and especially ES6 Javascript as well. Check the previous doc for more information. If you are ready, lets continue!

:::
