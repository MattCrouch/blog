---
layout: post
title: Polymer Summit
date: 2016-10-18 18:00:00
tags:
- Polymer
- Summit
- Conference
- JavaScript
- Framework
---
Over the 17th and 18th of October, Google ran their [Polymer Summit][Polymer Summit] over in Tobacco Dock in London. While I couldn't go in person, I kept up to date with the live stream. Here's what happened.

<iframe width="640" height="360" src="https://www.youtube.com/embed/VBbejeKHrjg?list=PLNYkxOF6rcICc687SxHQRuo9TVNOJelSZ" frameborder="0" allowfullscreen></iframe>

## The Polymer Framework

For the uninitiated, [Polymer][Polymer] is a JavaScript framework that makes heavy use of the Web Components specification. Web Components themselves are a fantastic leap forward for the web, so anything that facilitates their usage is great in my books. I've even [written a tutorial][Build an Autocomplete Component with Polymer] on how to get going with Polymer 1.0 not so long ago.

Well, now they've announced Polymer 2.0. While not much changes on the face of it the framework now uses more of the standardised Web Component framework now it's more cemented in modern browsers.

There's even a migration layer you can use so Polymer components created on 1.0 can use 2.0 until you get round to updating them. Always handy.

## Supercharged Live

<iframe width="640" height="360" src="https://www.youtube.com/embed/r94IxRRKR0A" frameborder="0" allowfullscreen></iframe>

In general, one of my favourite learning resources is the [Google Chrome Developers][Google Chrome Developers] channel on YouTube. There's plenty of videos that go on there from Chrome release information to Polymer tutorials and accessibility tips.

On of the top shows they have is [Supercharged][Supercharged] hosted by Paul Lewis and Surma. They set out to build a component of some sort and stream a live coding session to do it with the audience.

At the summit they did Supercharged Live, which as the name suggests was the same concept, just in front of an actual audience. They make a nice flipable option button that's well worth the watch if you get the chance.

## The Mobile Web and Performance

<iframe width="640" height="360" src="https://www.youtube.com/embed/K1SFnrf4jZo?rel=0" frameborder="0" allowfullscreen></iframe>

Another interesting talk (and perhaps the most sobering) was Alex Russell's "Adapting to the Mobile Web future/present", which delves into what you really need to be doing to support mobile browsers. It extends more to just testing responsiveness on your expensive laptop.

The £600 phone you have in your pocket isn't the £100 the "next set of customers" will have. It's not as simple as 1/6th the value 1/6th the performance and you need to be testing on these devices with the audience that use them in order to be successful on mobile.

## PRPL, and other acronyms

It wasn't just Polymer, however. They addressed important issues and concerns with the web today. Alongside the usual performance, service workers and code-splitting chatter you *know* you should be doing, they also shared a few useful acronyms to remember.

It's always useful to remember the colour "PRPL" in application design. That is:

- **Push** necessary elements critical for loading
- **Render** the initial route
- **Pre-cache** any remaining important routes
- **Lazy-load** any other routes

While the Google team focus this in regards to Polymer, it's very useful to keep in mind for any application you might make for the web. Having these things right from the off make everyone happy.

The Google team are very fond of their acronyms. If you get the chance, take a look at [RAIL][RAIL] and [FLIP][FLIP] from Paul Lewis.

So take a look at Polymer and the Polymer Summit. Even if you don't come out of it making use of the framework itself, the lessons it teaches are second to none right now.

[Polymer Summit]:https://www.polymer-project.org/summit/
[Polymer]:https://www.polymer-project.org/1.0/
[Build an Autocomplete Component with Polymer]:{{ site.baseurl }}/2016/09/autocomplete-component-with-polymer/
[Google Chrome Developers]:https://www.youtube.com/channel/UCnUYZLuoy1rq1aVMwx4aTzw
[Supercharged]:https://www.youtube.com/playlist?list=PLNYkxOF6rcIBz9ACEQRmO9Lw8PW7vn0lr
[RAIL]:https://developers.google.com/web/fundamentals/performance/rail
[FLIP]:https://aerotwist.com/blog/flip-your-animations/