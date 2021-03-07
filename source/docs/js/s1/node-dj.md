---
id: doc-dj-node
title: First Steps
sidebar_label: Installing node js & Discord
author: ThatGuyJamal
---

---

<!--? importing the tab dunction  -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />; -->

<Tabs
groupId="operating-systems"
defaultValue="win"
values={[
{label: 'Windows', value: 'win'},
{label: 'macOS', value: 'mac'},
{label: 'Linux', value: 'linux'}
]
}>

<!--! Windows 10 Data  -->
<TabItem value="win">

# Installing Node | Windows

Before we can jump into the fun parts we must inatall the necessary technologies.

## What is nodejs? | Windows nav

> Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
>
> Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.

_[Quote Source](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)_

You can learn more about [nodejs here](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm) or on the official site [here](https://nodejs.org/en/).

First we will install [nodejs](https://nodejs.org/en/). If your using windows to develop then this is very simple. Just go to the website and run the `exe` file.

:::caution

You need to have the lasted version of Nodejs installed. _Anything below 12.0 will not work._ Discord.js v12 requires Node 12.0 or higher to function properly.

:::

To check if you have node installed on your computer run

```
node -v
```

in your terminal. We also recommend downloading this [windows terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) as it is better than normal `cmd` for most cases.

If everything went well then you should see:

![node version check picture](/img/js/shot-nodejs-check.png)

### Installing Discordjs

Now that you have node install we can install Discord Js. To start this project we must create a folder to store all our files. This

Navigate to a place on your computer were you want to store and have easy access to the bot. Now create a new folder like normal. _(Or pro users can do `mkdir project-name`)_. Next, whatever name you inputed for the _project name_ you will run the command: `cd project-name`. For this tutorial we will be using `discord-bot` as our project name.

![Mkdir exmaple image](/img/js/shot-mkdir-js.png)

### Final steps

Now that we have our project folder set up you will want to open your text editor. This is the place where you will edit and test your code. For this tutorial i will be using [Vscode](https://code.visualstudio.com/Download). Its a personal favoite and created by microsoft.

To lanch vs-code easily run `code .` in your termianl. Next we will set-up our development environment. Run `npm init` in the terminal. This command will ask you a few questions about your project. _If your not sure about something just hit enter to skip it._

:::

:::tip You can specify an optional title

Want to get started without being asked questions? Simply run `npm init -y`. This command will skip all the questions. You can edit them later in the package.json file.

:::

Now we are ready to install Discord.js. In the terminal run `npm install discord.js`.

If eveything went well you should something simular to this. You

![discord install folder example](/img/js/shot-dir-djs.png)

And now were done! Soon we will be righting our first command.

### Installing a linter

> Linters help you get more productive and save you time and money. They drive your team to better decisions (those oriented by data) and share ownership over the quality.

While its not required, depending on how you setup your project it can be very helpful. Read more about [Linters](https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it) here.

Linter docs page: [click me](/docs/js/s1/installings/doc-linter)

</TabItem>

<!--!  Mac Data -->
<TabItem value="mac">

# Installing Node | Mac OS

Before we can jump into the fun parts we must inatall the necessary technologies.

## What is nodejs? | Mac nav

> Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
>
> Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.

_[Quote Source](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)_

You can learn more about [nodejs here](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm) or on the official site [here](https://nodejs.org/en/).

If you are developing on Mac you have a few options to install node. You can go to [nodejs.com](https://nodejs.org/en/) or you can use a package manager such as [HomeBrew](https://brew.sh/).

:::caution

You need to have the lasted version of Nodejs installed. _Anything below 12.0 will not work._ Discord.js v12 requires Node 12.0 or higher to function properly.

:::

To check if you have node installed on your computer run

```
node -v
```

in your terminal. We also recommend downloading this [windows terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) as it is better than normal `cmd` for most cases.

If everything went well then you should see:

![node version check picture](/img/js/shot-nodejs-check.png)

### Installing Discordjs

Now that you have node install we can install Discord Js. To start this project we must create a folder to store all our files. This

Navigate to a place on your computer were you want to store and have easy access to the bot. Now create a new folder like normal. _(Or pro users can do `mkdir project-name`)_. Next, whatever name you inputed for the _project name_ you will run the command: `cd project-name`. For this tutorial we will be using `discord-bot` as our project name.

![Mkdir exmaple image](/img/js/shot-mkdir-js.png)

### Final steps

Now that we have our project folder set up you will want to open your text editor. This is the place where you will edit and test your code. For this tutorial i will be using [Vscode](https://code.visualstudio.com/Download). Its a personal favoite and created by microsoft.

To lanch vs-code easily run `code .` in your termianl. Next we will set-up our development environment. Run `npm init` in the terminal. This command will ask you a few questions about your project. _If your not sure about something just hit enter to skip it._

:::

:::tip You can specify an optional title

Want to get started without being asked questions? Simply run `npm init -y`. This command will skip all the questions. You can edit them later in the package.json file.

:::

Now we are ready to install Discord.js. In the terminal run `npm install discord.js`.

If eveything went well you should something simular to this. You

![discord install folder example](/img/js/shot-dir-djs.png)

And now were done! Soon we will be righting our first command.

## Installing a linter

> Linters help you get more productive and save you time and money. They drive your team to better decisions (those oriented by data) and share ownership over the quality.

While its not required, depending on how you setup your project it can be very helpful. Read more about [Linters](https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it) here.

Linter docs page: [click me](/docs/js/s1/installings/doc-linter)

</TabItem>

<!--! Linux Data -->
<TabItem value="linux">

# Installing Node | linux

Before we can jump into the fun parts we must inatall the necessary technologies.

### What is nodejs? | Linux nav

> Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
>
> Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.

_[Quote Source](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)_

You can learn more about [nodejs here](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm) or on the official site [here](https://nodejs.org/en/).

Hello my fellow linux user. If your developing on linux I will asume you are comfortable with the terminal. As there are many different option in linux I will only go over the basics of terminal commands.

:::caution

You need to have the lasted version of Nodejs installed. _Anything below 12.0 will not work._ Discord.js v12 requires Node 12.0 or higher to function properly.

:::

To check if you have node installed on your computer run

```
node -v
```

in your terminal. We also recommend downloading this [windows terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) as it is better than normal `cmd` for most cases.

If everything went well then you should see:

![node version check picture](/img/js/shot-nodejs-check.png)

### Installing Discordjs

Now that you have node install we can install Discord Js. To start this project we must create a folder to store all our files. This

Navigate to a place on your computer were you want to store and have easy access to the bot. Now create a new folder like normal. _(Or pro users can do `mkdir project-name`)_. Next, whatever name you inputed for the _project name_ you will run the command: `cd project-name`. For this tutorial we will be using `discord-bot` as our project name.

![Mkdir exmaple image](/img/js/shot-mkdir-js.png)

### Final steps

Now that we have our project folder set up you will want to open your text editor. This is the place where you will edit and test your code. For this tutorial i will be using [Vscode](https://code.visualstudio.com/Download). Its a personal favoite and created by microsoft.

To lanch vs-code easily run `code .` in your termianl. Next we will set-up our development environment. Run `npm init` in the terminal. This command will ask you a few questions about your project. _If your not sure about something just hit enter to skip it._

:::

:::tip You can specify an optional title

Want to get started without being asked questions? Simply run `npm init -y`. This command will skip all the questions. You can edit them later in the package.json file.

:::

Now we are ready to install Discord.js. In the terminal run `npm install discord.js`.

If eveything went well you should something simular to this. You

![discord install folder example](/img/js/shot-dir-djs.png)

And now were done! Soon we will be righting our first command.

### Installing a linter

> Linters help you get more productive and save you time and money. They drive your team to better decisions (those oriented by data) and share ownership over the quality.

While its not required, depending on how you setup your project it can be very helpful. Read more about [Linters](https://sourcelevel.io/blog/what-is-a-linter-and-why-your-team-should-use-it) here.

Linter docs page: [click me](/docs/js/s1/installings/doc-linter)

</TabItem>
</Tabs>

<!--? Keeping for later ## ...

<Tabs
groupId="operating-systems"
defaultValue="win"
values={[
{label: 'Windows', value: 'win'},
{label: 'macOS', value: 'mac'},
{label: 'Linux', value: 'linux'}
]
}>
<TabItem value="win"></TabItem>
<TabItem value="mac"></TabItem>
<TabItem value="linux"></TabItem>
</Tabs> -->
