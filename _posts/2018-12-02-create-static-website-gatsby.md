---
layout: post
title: Create a static website with Gatsby
date: 2018-12-02 12:00:00
image: 2018-12-02-create-static-website-gatsby/create-static-website-gatsby-cover.jpg
thumbnail: 2018-12-02-create-static-website-gatsby/create-static-website-gatsby-cover-sm.jpg
tags:
  - JavaScript
  - Tutorial
  - React
  - Gatsby
  - Static
  - Net Magazine
---

React is great, but it's quite overkill for most sites. Downloading the framework and the content too before anything shows up? That's no good. Server rendering can help, but it's tricky to set up and is prone to issues if it's not kept on top of. Is there a way to get the composibility of React without any of the icky JS-only website stuff?

Turns out there is.

[![Create a static website with Gatsby][create a static website with gatsby]][create a static website with gatsby]

[Gatsby][gatsby] is a static site generator for React applications. Tell it which are pages and it does the rest for you. Recently v2 came out with a bunch of improvements in speed and setup. In the latest edition of [Net magazine][net magazine] we go through those new features and how to create a site with it.

The thing about server rendered websites was the setup - it terrified me. Things would break that I wasn't expecting, plus you need to worry about data gets fetched and what bundles are needed for what endpoints. Gatsby sets up everything automatically, including making the best code bundles for optimum load times for the end user.

Plus if you're looking for an excuse, it comes with [GraphQL][graphql] support out of the box. It works through a tagged template literal and some _gatsby magic_ 🧙‍. Everything works off of a node and GraphQL queries those nodes for anything you need.

This tutorial goes a little bit further than a Hello World and makes a blogging platform out of Gatsby and it's various plugins. Write posts in Markdown, create a new build and upload the result. That's all you need!

The code behind the tutorial is up on [Github][github]. If you want to see the end result, the [demo][demo] is there to play around with too. It's quite colourful, and you'll learn some bonus tips about Gatsby in the process. Winner!

If it taught _me_ anything, it's that this blog could become a Gatsby-powered one in the future. Right now it's Jekyll as Github Pages seems to love it. It's powered by Ruby, which is a little out of my wheelhouse. Giving it some React love might give it some life...

[create a static website with gatsby]:{{ site.baseurl }}/assets/2018-12-02-create-static-website-gatsby/create-static-website-gatsby.jpg

[net magazine]: https://www.myfavouritemagazines.co.uk/design/net-magazine-back-issues/net-january-2019-issue-314/
[gatsby]: https://gatsbyjs.org
[graphql]: https://graphql.org/
[github]: https://github.com/MattCrouch/gatsby-tutorial
[demo]: https://mattcrouch.github.io/gatsbyblog/
