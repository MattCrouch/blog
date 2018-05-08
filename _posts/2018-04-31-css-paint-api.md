---
layout: post
title: Playing with the CSS Paint API
date: 2018-04-31 12:00:00
image: 2018-04-31-css-paint-api/code-dynamic-backgrounds-cover.jpg
thumbnail: 2018-04-31-css-paint-api/code-dynamic-backgrounds-cover-sm.jpg
tags:
- JavaScript
- CSS
- Tutorial
- Houdini
- CSS Paint API
- Image Mask
---

Compared to JavaScript, CSS doesn't seem to get as much _fun stuff_. Sure, there's things like CSS Grid and snap points, but nothing quite on the level of, say, service workers. Well, with Houdini they both come together and that's all going to change. In the latest [Web Designer][web designer], we check out the first piece of the puzzle landing in browsers - the CSS Paint API.

[![CSS Paint API][css paint api]][css paint api]

If you're not familiar, [Houdini][houdini] is a set of specifications designed to fundamentally change how developers use CSS going forward. It's designed to open up some of the _magic_ that browsers do on our behalf, so we can optimise it best for our use-cases. Eventually that will cover things like fonts and layout, but for now we're starting to see the first small morsels that will be built on for the future.

All of Houdini's specs will work with what are called "Worklets" - small, highly specified classes that are really good at doing one job repeatedly. They work away from the main thread, which means no direct DOM manipulation, but means they can run nice and quick without reducing how well the page performs.

If you're thinking "Wait, they sound a lot like web workers..." then you're not wrong. Worklets are just highly specialised web workers doing the work of certain aspects of styling for the browser.

The CSS Paint API is a based around the `PaintWorklet` that - just as it sounds - deals with painting of things in the browser. By using a context similar to when working with `<canvas>` elements we can paint anything we want and have CSS use it just like any other image.

This tutorial plays around with a couple of ideas - one that generates an interactive background image, while the other takes things a step further with the relatively new `image-mask` property to dynamically show and hide an image. It's all great fun.

Here's a preview of the sort of thing you'll be making (assuming you're on a browser that supports it, like Chrome 65):

<p data-height="300" data-theme-id="0" data-slug-hash="GdrjdX" data-default-tab="result" data-user="MattCrouchUK" data-embed-version="2" data-pen-title="CSS Paint API - Mask" class="codepen">See the Pen <a href="https://codepen.io/MattCrouchUK/pen/GdrjdX/">CSS Paint API - Mask</a> by Matt Crouch (<a href="https://codepen.io/MattCrouchUK">@MattCrouchUK</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

But I digress. The CSS Paint API is a lot of fun and it's going to completely change the way we work with CSS. It's worth picking up a copy of [Web Designer][web designer] and getting in on the ground floor. It's a lot of fun!

[![CSS Paint API - Squiggle][css paint api - squiggle]][css paint api - squiggle]

[CSS Paint API]:{{ site.baseurl }}/assets/2018-04-31-css-paint-api/code-dynamic-backgrounds.jpg
[CSS Paint API - Squiggle]:{{ site.baseurl }}/assets/2018-04-31-css-paint-api/css-paint-api-squiggle.gif

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-274/
[houdini]: https://developers.google.com/web/updates/2016/05/houdini
