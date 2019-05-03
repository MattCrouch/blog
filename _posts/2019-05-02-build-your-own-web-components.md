---
layout: post
title: Build your own web components
date: 2019-05-02 12:00:00
image: 2019-05-02-build-your-own-web-components/build-your-own-web-components-cover.jpg
thumbnail: 2019-05-02-build-your-own-web-components/build-your-own-web-components-cover-sm.jpg
tags:
  - HTML
  - Feature
  - API
  - CSS
  - JS
  - Web Designer
---

Modern web development takes components for granted. Frameworks like React are built upon their existence and we're integrating their approaches into other parts of the web like CSS.

The native approach - web components - have been around for some time. While they had a bit of a turbulent time along the way, they're now in every major browser.

In the latest [Web Designer][web designer] we dive deep into where web components are at today, along with where to get started.

[![Build your own web components][build your own web components]][build your own web components]

There are four main building blocks to web components - custom elements, shadow DOM, HTML templates and ES modules. All of these become what we know as "web components", but each one is a powerful piece of the puzzle.

Custom elements are what is likely to spring to mind first. These are classes that, when built, live just like any other native HTML element. Attributes form part of an elements API, which allows any website to interact with them. Odds are any framework can work with them too!

Shadow DOM allows us to create the internal markup of a component without having to worry about anything outside of it. For example we could create a `<button>` and style them using `button { ... }` without worrying about the styling affecting all the other buttons on the page. This is so powerful for reusable components that get used in multiple different scenarios.

HTML templates are perhaps the most simple API of the bunch. They define a block of markup that we can stamp out later. While this is great for custom elements, it can be used anywhere that needs a block of HTML ready to go. For example, a modal library could be pointed to a `<template>` block and copy that content when it needs something to display.

That last and perhaps most controversial are ES modules. Originally HTML imports took this spot, but were not well supported across browsers. Using ES modules allows more browsers to take part and be more aligned with other importing standards. There are plans afoot to take the best of both worlds going forward but... well, you'll have to buy a copy and see what that's about!

There are some examples to go along with this. If you're looking to get up and running with web components, there's a couple of examples over at [Codepen][codepen - web components feature].

There's all this and a load more in [Web Designer 287][web designer]. Go pick up a copy and see what you can build!

<p class="codepen" data-height="397" data-theme-id="0" data-default-tab="html,result" data-user="MattCrouchUK" data-slug-hash="NJoJRw" style="height: 397px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="User Comment Autonomous Web Component">
  <span>See the Pen <a href="https://codepen.io/MattCrouchUK/pen/NJoJRw/">
  User Comment Autonomous Web Component</a> by Matt Crouch (<a href="https://codepen.io/MattCrouchUK">@MattCrouchUK</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

[Build your own web components]:{{ site.baseurl }}/assets/2019-05-02-build-your-own-web-components/build-your-own-web-components.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-287/
[codepen - web components feature]: https://codepen.io/collection/DBePOG/
