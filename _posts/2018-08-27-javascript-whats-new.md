---
layout: post
title: JavaScript - What's new?
date: 2018-08-27 12:00:00
image: 2018-08-27-javascript-whats-new/javascript-whats-new-cover.jpg
thumbnail: 2018-08-27-javascript-whats-new/javascript-whats-new-cover-sm.jpg
tags:
  - JavaScript
  - Feature
  - ES2018
  - Node
  - Angular
  - React
  - Vue
  - Web Designer
---

New things in JavaScript are popping up all the time. From frameworks to features, it never stands still. Keeping up is often a tricky and time-consuming process, but if we don't keep up we risk not making the best product we can.

In the latest issue of [Web Designer][web designer] we take a running jump into the latest and greatest. Not only what's in the latest specification, but the shiny features coming to the frameworks that run the web.

[![JavaScript - What's New?][javascript - what's new?]][javascript - what's new?]

If you're looking at this thinking "I've barely got up to speed with ES6, what's ES2018? Is there a new one every year? 😰" you won't be alone. Thankfully, the updates to the language aren't anywhere near as big as they were a few years ago. Nowadays they are mostly new object methods or edge-case features that are mostly optional. But it's good to be aware of them so they can be reached for in a tight spot.

While most language changes head straight into Node, there is a bit of a delay with some features as they adapt to life server-side. The article delves into what's new in Node how it tackles the tricky issue of asynchronous module loading.

We also go through the major frameworks and their recent updates. There's a focus on Angular, React and Vue in this issue and all have some killer features either ready to play with or on the horizon.

Angular has Angular Elements - a mechanism available to developers of other projects using different frameworks to link into a component made with Angular. Custom elements are a native platform feature with tonnes of potential, but is mostly incompatible with other frameworks. Angular Elements allows those components already written to work with custom elements in the future.

React has revamped the Context API, which allows props to be injected directly into child components rather than passing it down through all of the parents. Some common tools like `react-redux` are already using this API to make things easier for developers. Depending on the project, it may even make state managers like Redux overkill if a similar approach can be built just using the Context API.

But by far my favourite updates to any framework is Vue. Recent updates have not been ground-breaking to say the least (including up until the time of writing this article - damned lead times) but just recently [Vue CLI 3.0][vue cli 3.0] has been released that is a massive win for developers. In short, it allows us to pick and choose integrations like TypeScript or testing tools that work out of the box. There's tonnes more developer-friendly improvements that the article dives right into.

If all that sounds interesting, pick up a copy and we go into a load more detail. Find out not only what's new, but what they might be used for and their benefits for everyone. There's a right mix, so there's something for everyone!

[JavaScript - What's New?]:{{ site.baseurl }}/assets/2018-08-27-javascript-whats-new/javascript-whats-new.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-278/
[vue cli 3.0]: https://medium.com/the-vue-point/vue-cli-3-0-is-here-c42bebe28fbb
