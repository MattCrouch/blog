---
layout: post
title: CSS Houdini
date: 2019-10-15 12:00:00
excerpt: CSS is the go-to technology for making sites look how we want. But there's a new box of tricks coming to JavaScript that could make styling that little bit more unique.
image: 2019-10-15-css-houdini/css-houdini-cover.jpg
thumbnail: 2019-10-15-css-houdini/css-houdini-cover-sm.jpg
tags:
  - CSS
  - Houdini
  - API
  - Feature
  - Web Designer
---

CSS is great at handling all the visual bits of the web. With just a couple of lines, the browser knows exactly how we intend to layout the site. Changing one line can drastically change the appearance of hundreds of elements. It's possible to get pretty far on CSS alone by being very clever indeed.

But try as we might, there's plenty of things CSS isn't great at doing. If we want any special kind of layout, animation or visual effect we need the help of JavaScript. When used sparingly and efficiently, this is no bad thing. The problem is that JavaScript wasn't really built to handle repetitive visual tasks quite like CSS.

Soon that will all change. Enter Houdini.

[![CSS Houdini][css houdini]][css houdini]

What we refer to as "Houdini" is actually a collection of APIs making their way to browsers. Just like the magician himself, they are all designed to break out the magic of CSS into JavaScript and make it accessible and approachable for regular web developers.

In order to get pixels on the screen, most browsers go through the same process. They workout how things should be laid out, draw them and then stick them all together. This layout ➡️ paint ➡️ composite process is known as the rendering pipeline.

The three big Houdini APIs - the Layout API, Paint API and animation worklets make it easier for us to control the rendering at all stages of the pipeline. The Paint API is ready to play around with in browsers now, with the others still in the works.

In the latest [Web Designer][web designer] we take look at exactly what Houdini is, how it helps the web and how to start using it today. It's not all ready for prime-time, but we're closer now than ever before.

This is also the final issue of Web Designer. Over the past three years, I've covered a bunch of topics for them and learned a lot along the way myself. While I'm sad to see it go, I'm glad I got the chance to feature in the final issue. It's a shame to see it leave, but glad it helped so many people over the 293 issues.

[CSS Houdini]:{{ site.baseurl }}/assets/2019-10-15-css-houdini/css-houdini.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-293/
