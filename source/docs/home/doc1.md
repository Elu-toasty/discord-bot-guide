---
id: doc1
title: Introduction
sidebar_label: Before You begin
author: ThatGuyJamal
slug: /
---

---

## Intro from [DeepWebDevelopers](https://github.com/DeepWebDevelopers)

Before we venture on our journey to becoming amazing Discord Developers you must understand some important concepts about the documentation.

This guide will teach you things such as:

- How to get a bot up and running from scratch;
- How to properly create, organize, and expand on your commands;
- How to use the best practices for common situations;
  and much more.

We are writing from the perspective of _" you already understand the basics"_.
This means, although we will explain and walk you through the concepts, you will **not** be taught the fundamentals of programming. Such as variables, functions, etc. So make sure you have a basic knowledge of your language before jumping into creating a Discord bot.

### Resources

If you want to sharpen your skills before starting the docs we can recommend a few resources.

- [FreeCodeCamp - Many Different languages](https://www.freecodecamp.org/)
- [Node School - Useful Javascript and nodejs information](https://nodeschool.io/)
- [Udemy- Great Courses for Languages](https://www.udemy.com/)
- [Learn python](https://www.learnpython.org/)
- [Code Academy](https://www.codecademy.com/)
- [Or just use google!](https://www.google.com)

After learning your language on a basic level you can have a lot more fun with the documentation!

### Pick Your language

<!-- Sends the user to a guide -->

- If you want to learn [Javascript](js/s1/doc-byb-js)
- If you want to learn [Python](py/s1/doc-py-byb)
- If you want to learn [Java](java/doc-prerequisites-java)
- If you want to learn [Typescript](ts/s1/doc-byb-ts)
- More coming soon!

### Helpful Dev Tools

As a developer, we all work to make life **easy**. If there is some program out there that does "x" 5x faster than I want it!

Here are a few tools that I use on a daily to make life much easier.

| Name                                     | Description                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| [VsCode](https://code.visualstudio.com/) | A professional code editor built and maintained by Microsoft.                        |
| [Github](https://github.com/)            | An Internet hosting platform for software development and version control using Git. |
| [Code-Pen](https://codepen.io/)          | A great way to test and share HTML, CSS, and JavaScript from the browser.            |

** let's get coding!**

![Coding gif](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

```js
// Dont mind this ;)
function start(docs) {
  await docs.load().then((docs) => {
    console.log("Documentation Loaded!")
  }).catch(err) {
    return console.log(`Enjoy the docs :) ${err}`)
  }
}

```
