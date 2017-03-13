---
layout: post
title: Build a speedy Universal React site with Next.js
date: 2017-03-05 12:00:00
image: 2017-03-05-react-next-js-tutorial/react-next-js-tutorial.jpg
tags:
- JavaScript
- React
- Next.js
- Tutorial
- Univeral
---
[Web Designer][Web Designer] issue 259 is out now! In this issue I'm talking you through how to create a universal React site with Next.js. Spoiler: It's actually really easy.

React is a view framework for the web. On it's own it's super handy, but its power comes from the amount of external libraries and plugins available for it for all manner of behaviour - from routing to data management, offline support and server-side rendering.

One of the problems with modern React development is the steep learning curve to get all the development tools singing from the same hymn sheet. Server rendering can get complex at the best of times, so adding that into the mix could be a nightmare.

Thankfully, [Next.js][Next.js] is here to help. All that complexity is sorted for you. So long as you stick to a few conventions, pages can be server rendered by default and can be also passed through Babel with Webpack so you don't need to sort that out as well.

There's so much to like about Next.js that it's worth giving a go. The tutorial goes through a simple JSON-driven website about travel tips, but it could easily be something completely different.

Unfortunately this was written before v2 came out, so it's still dealing with a few quirks from v1. Styled components comes to mind. But, it will all still work so you shouldn't worry.

Sidenote: The people behind Next.js - Zeit - also created [Now][Now], which is a quick and easy deployment tool that reads through config files to get all the bits you need. I used its free tier while writing this tutorial and it's a great take on development and deployment flows. Why not try it out alongside the tutorial?

[Web Designer]:https://www.greatdigitalmags.com/view/webdesigner/4853/web-designer-issue-259
[Next.js]:https://zeit.co/blog/next
[Now]:https://zeit.co/now