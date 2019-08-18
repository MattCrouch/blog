---
layout: post
title: Build a blog with Sapper and Svelte
date: 2019-07-25 12:00:00
image: 2019-07-25-build-a-blog-with-sapper-and-svelte/build-a-blog-with-sapper-and-svelte-cover.jpg
thumbnail: 2019-07-25-build-a-blog-with-sapper-and-svelte/build-a-blog-with-sapper-and-svelte-cover-sm.jpg
tags:
  - Tutorial
  - Web Designer
  - JS
  - Svelte
  - Sapper
---

In the age of frameworks, Webpack and complicated build tools, regular boring JavaScript can easily be overlooked. Gone are the days of sites that only shipped the code they needed right? We need runtimes now to compile our JSX else who knows what will happen.

With [Sapper][sapper], we can create whole websites that compile down to just the HTML, CSS and JS they need. In the latest [Web Designer][web designer] I take a look at how to use it to create a nice, neat blogging site.

[![Build a blog with Sapper and Svelte][build a blog with sapper and svelte]][build a blog with sapper and svelte]

[Sapper][sapper] is a site building tool with an added kick. It does all the things we're used to doing with complicated JavaScript setups like server rendering and code splitting but all out of the box.

The best bit? It's built by the team behind [Svelte][svelte]. Svelte is a fast growing alternative to frameworks such as Vue or React, but it's main differentiator is that it pre-compiles websites and supplies only the JS required to get it to work. No need for a runtime or other parts of the framework we don't make use of. The result? Tiny bundles. _Really_ tiny.

I've covered Svelte before. I think the concept is absolutely sound. It's the best of both worlds. To be able to have an out-of-the-box build tool ready to make websites fast by default can only be a good thing. It's opinionated enough to make sure we can't make any silly performance mistakes, but open enough to make pretty much any site required.

In this issue's tutorial we create a simple blogging site. It follows much a similar line to Sapper's own [template repo][sapper template repo] but we go through all the steps on what makes it work, where the data that powers it come from and how to customise it to our own needs.

The end result is a speedy blogging site that has a few neat tricks up its sleeve. To find out what they are, you'll need to pick up [Web Designer 290][web designer] and follow along. Always leave you wanting more.

[Build a blog with Sapper and Svelte]:{{ site.baseurl }}/assets/2019-07-25-build-a-blog-with-sapper-and-svelte/build-a-blog-with-sapper-and-svelte.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-290/
[sapper]: https://sapper.svelte.dev/https://sapper.svelte.dev/
[svelte]: https://svelte.dev/
[sapper template repo]: https://github.com/sveltejs/sapper-template
