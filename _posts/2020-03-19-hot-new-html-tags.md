---
layout: post
title: Hot new HTML tags
date: 2020-03-19 12:00:00
image: 2020-03-19-hot-new-html-tags/hot-new-html-tags-cover.jpg
thumbnail: 2020-03-19-hot-new-html-tags/hot-new-html-tags-cover-sm.jpg
tags:
  - HTML
  - Element
  - Net Magazine
  - Feature
---

All the momentum is with JavaScript these days. Granted, frameworks are enabling some of the biggest sites out there, but they all rely on one core language - HTML.

It's often more capable than we realise. There's some great elements out there that provide complex functionality without a single line of JavaScript. In the latest issue of [Net Magazine][net magazine] we go over some of those unsung heroes.

[![Hot New HTML Tags][hot new html tags]][hot new html tags]

Using the right element for the job is of great importance. One problem with frameworks is that they make using the wrong one too easy. React can just as easily bind a click event to a `<div>` or a `<button>`, but only one of these is keyboard-focusable by default. Without even thinking, we could be excluding a whole set of visitors from ever viewing our sites and applications.

Some elements have pre-defined behaviour already built in. There's no need to worry about whether it behaves as the user expects or that it gets announced correctly to a screenreader user as these problems are abstracted away for us right from the start. HTML's API is beautifully simple and if you hook up the required pieces correctly, everything else falls into place.

There's also the added benefit of sending less code down to the user. Sure, coding up a panel that opens and closes in JavaScript is fairly trivial these days, but with `<details>` and `<summary>` elements there's no need for any JavaScript at all.

In this issue, we go through some really useful HTML elements that don't get the praise they deserve. Depending on your experience not all elements will be new to you - I get that. But hopefully somewhere there will be a little nugget of information that surprises you about an element you use every day.

For me, that was using different media queries inside `<picture>` elements to provide content more appropriate for different situations other than just screen width. For example, you could provide a less bright image for users in dark mode or a still image instead of an animated GIF for those who prefer reduced motion. All of this just works without JavaScript - even fallback content!

Pick up a copy of [Net Magazine][net magazine] today and see what you could learn!

[Hot New HTML Tags]:{{ site.baseurl }}/assets/2020-03-19-hot-new-html-tags/hot-new-html-tags.jpg

[net magazine]: https://www.myfavouritemagazines.co.uk/design/net-magazine-back-issues/net-may-2020-issue-351/
