---
layout: post
title: Create a modal system with React and Redux
date: 2017-10-19 12:00:00
image: 2017-10-19-react-redux-modal/react-redux-modal.jpg
thumbnail: 2017-10-19-react-redux-modal/react-redux-modal-sm.jpg
tags:
- JavaScript
- Tutorial
- React
- Redux
- Modal
- Reducer
- Dispatch

---

It's another React special in the latest edition of [Web Designer][Web Designer]! But this one's a little different. It's bringing Redux along for the ride.

React is one of the most versatile and easy to understand frameworks I've worked with. I can't seem to get enough of it. It can do virtually anything you throw at it.

I've had a lot of fun using it when redesigning Cinolla's customer facing portal. It's 100% React, with a bunch of other little helpers like Redux to make dealing with a wealth of courses and customer data a breeze. It's lovely.

Of course, with Redux it's best to go all-in with state. Internal state is fine to keep component-level information on track, but anything more than that can be quite confusing. It's a lot easier (especially with server rendering) to keep everything in Redux. Including modal windows.

Wait, what?

Love them or hate them, modal windows are a mainstay of the web. If handled well enough, they can be a helpful way to grab a user's attention.

But how do you handle modal windows in a React application? I would imagine it gets quite messy trying to create modal windows at a component level. Ideally you want one top level component to delegate all that messy behaviour to. That's exactly what's built in this issue.

You can have a [play with the final product][React Redux Modal], but ultimately this tutorial deals with all the behind-the-scenes data stuff with React and Redux. What you're playing with here is just... a modal window.

But by going through the tutorial, you can learn how to use any component as a modal window, or even create a generic one that gets filled with content that's dispatched at the same time. It's very handy and something that's in use inside Cinolla's new portal right now, so you know it's got real world uses!

[Web Designer]:https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-267/
[React Redux Modal]:http://mattcrouch.github.io/reactmodal/