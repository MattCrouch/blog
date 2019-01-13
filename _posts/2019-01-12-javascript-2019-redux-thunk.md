---
layout: post
title: JavaScript in 2019 and working with Redux Thunk
date: 2019-01-12 12:00:00
image: 2019-01-12-javascript-2019-redux-thunk/javascript-2019-cover.jpg
thumbnail: 2019-01-12-javascript-2019-redux-thunk/javascript-2019-cover-sm.jpg
excerpt: It's a double header from me in this month's Web Designer. My choice of JavaScript APIs that are going to make an appearance in 2019, plus part two of my Redux series.
tags:
  - Tutorial
  - Feature
  - Web Designer
  - Redux Series
  - JavaScript
  - React
  - Redux
  - Thunk
  - Frameworks
  - APIs
---

It's 2019! 🎉 While those dark January evenings continues to drag themselves out, now is a great time to start learning something new. It's a bit more fun than diet or exercise, anyway.

Now is a great time to pick up the latest issue of [Web Designer][web designer]. There's plenty of things to wrap our head around, including a couple of pieces by me!

## JavaScript in 2019

[![JavaScript in 2019][javascript in 2019]][javascript in 2019]

It seems like there's always some new coming to browsers. Getting events from different sensors, grabbing payment details, customising animations... there's even access to USB devices now. But how much of that is actually useful?

Turns out there's loads. There's so many new JavaScript APIs coming to browsers in 2019 that I've compiled a list of the ones I find the most interesting.

There's a shout out to Houdini and the suite of APIs that are going to be making their way to browsers this year. The Paint API is a great one to try out and dip our feet into JavaScript enhanced CSS. The Layout API isn't far off either. If there's something to keep an eye on in 2019 Houdini would be it.

I also shine a light on a few tools to do more with JavaScript in the year ahead. My favourite is [Prettier][prettier] (but it has been for a while now), but there's plenty of movement in the [TypeScript][typescript] world too. Microsoft's roadmap for [TypeScript in 2019][typescript in 2019] is looking very promising - including making improvements to approachability and user experience, which is desperately needed!

There's also a look at the year ahead for the most popular application frameworks to see what they can add.

I was pleasantly surprised by [Svelte][svelte]. It's not a framework I have had much exposure to, but as it managed to be the best of the rest in the [2018 State of JS survey][state of js - other libraries] it's not easy to ignore. It's deliberately simple and that's what I love.

It's a shame to see [Polymer][polymer] sent to pasture, but it's for the best reason - there's cross-browser support for web components now! The benefits of Polymer are getting smaller and smaller, but that's by design. There is a future in LitElement and `lit-html`, which are both great pieces of tech.

## Manage Actions with Redux Thunk

[![Manage Actions with Redux Thunk][manage actions with redux thunk]][manage actions with redux thunk]

Alongside all of that, there's part two of my Redux series. This time, we're dealing with asynchronous actions with Redux Thunk.

Pretty much all React applications require some kind of database call. That on its own is enough to stir panic in some developers, but throwing Redux in to the mix? That's no fun at all.

Thunks are little pre-programmed operations that can be chained together. Bundle up the process of adding a comment into one function we can call and have everything else work in turn. The `redux-thunk` package is a binding to add this behaviour to dispatched Redux actions.

This issue goes through how adding thunks into an application drastically simplifies things. Making a database call? Set a loading state, make the request, then set a success or failure state. Done.

We also take a look at other solutions, such as Sagas. These are all acceptable approaches - it's just what makes sense to the project.

This tutorial continues the work on PhotoShare and lifts off from where we left the [first one][manage react application data with redux]. If you didn't catch it that's no problem - just download the files for this tutorial and pick it up from there!

There's plenty to keep thinking about through January! Pick up a copy of [Web Designer 283][web designer] and get learning!

[JavaScript in 2019]:{{ site.baseurl }}/assets/2019-01-12-javascript-2019-redux-thunk/javascript-in-2019.jpg
[Manage Actions with Redux Thunk]:{{ site.baseurl }}/assets/2019-01-12-javascript-2019-redux-thunk/manage-actions-with-redux-thunk.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-283/
[prettier]: https://prettier.io/
[typescript]: https://www.typescriptlang.org/
[typescript in 2019]: https://github.com/Microsoft/TypeScript/issues/29288
[svelte]: https://svelte.technology/
[state of js - other libraries]: https://2018.stateofjs.com/front-end-frameworks/other-libraries/
[polymer]: https://www.polymer-project.org/
[manage react application data with redux]: https://mattcrouch.github.io/blog/2018/12/manage-react-application-data-with-redux/
