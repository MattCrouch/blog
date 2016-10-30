---
layout: post
title: Electron app and Web Animations API tutorials
date: 2016-10-30 12:00:00
image: 2016-10-30-electron-web-animations/web-animations-api.jpg
tags:
- JavaScript
- tutorial
- Electron
- Web animations
- API
---
It's a double-whammy of me in the latest edition of [Web Designer][Web Designer]! Aren't you lucky. It's a bit of a mixed bag, too. New developments in two completely separate areas.

## Building an Electron App

[![Electron App Image][Electron App Image]][Electron App Image]

Here's a new one - how can you use your web development skills to create a native application? Well, the team over at [Electron][Electron] can help you do just that.

Originally built for the Atom code editor, Electron allows you to use plain old HTML and CSS to create an application powered by JavaScript. What's more, you don't have to worry about browser inconsistencies as your app ships with an up-to-date version of Chromium built in!

In this tutorial we're making an image resizer application courtesy of a few Node libraries. Yes, you can even include Node in your application and run libraries from npm like you always wanted. It's great fun and worth checking out.

## Web Animations API

[![Web Animations API Image][Web Animations API Image]][Web Animations API Image]

Back to the browser now. For a while we've been using the wonders of CSS animations to get simple animations performing well on whatever device. The problem is that if you wanted to control those animations, you were limited to JavaScript solutions that either killed performance or were impractical for large-scale use.

With the Web Animations API the browser opens up the same CSS animations experience to JavaScript through easy-to-use APIs. It's as simple as keyframes in CSS with the JavaScript interfaces you're used to already.

This tutorial focuses on making a preloading animation. Granted, I'm no graphic designer, but the crude attempts at planets will orbit the sun at a speed depending on the progress made. It's a little bit [Space Jam][Space Jam], but it should help get the ideas across.

[Electron App Image]:{{ site.baseurl }}/assets/2016-10-30-electron-web-animations/electron.jpg
[Web Animations API Image]:{{ site.baseurl }}/assets/2016-10-30-electron-web-animations/web-animations-api.jpg

[Web Designer]:http://www.webdesignermag.co.uk/
[Electron]:http://electron.atom.io/
[Space Jam]:http://www.warnerbros.com/archive/spacejam/movie/jam.htm