---
layout: post
title: 5 Totally Rad New JavaScript APIs
date: 2017-10-16 12:00:00
image: 2017-10-16-5-totally-rad-js-apis/5-totally-rad-js-apis.png
thumbnail: 2017-10-16-5-totally-rad-js-apis/5-totally-rad-js-apis-sm.png
tags:
- Barcamp
- Southampton
- Talk
- JavaScript
- API
---

This weekend saw the latest [Barcamp Southampton][Barcamp Southampton] take place and I gave a couple of talks. While one should never be repeated in polite company, the other one was this - a lightning talk all about some nice APIs lie in the browser now.

This is just a brief snippet (it was only a 5 minute talk, after all) of what the browser is capable of in 2017. There's so much more to go into, but perhaps that's for next year's Barcamp.

Here, in no particular order, are five totally rad APIs that you can start using today.

## Payment Request

<p data-height="265" data-theme-id="0" data-slug-hash="ZXmLje" data-default-tab="js" data-user="MattCrouchUK" data-embed-version="2" data-pen-title="Payment Request API" class="codepen">See the Pen <a href="https://codepen.io/MattCrouchUK/pen/ZXmLje/">Payment Request API</a> by Matt Crouch (<a href="https://codepen.io/MattCrouchUK">@MattCrouchUK</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

It may not be a surprise I mention the Payment Request API first off. I have talked about it a lot in the past, including a [Web Designer tutorial][Payment Request API Tutorial] on it about a year ago. Since then it's competely taken off.

Sites can request payment details using a native interface provided by the browser. While that might not sound like a big deal, if you consider browsers can handle not only card details but also other methods like Apple and Android Pay, that might not sound like a bad thing after all.

While it only deals with the _capture_ of payment details, that shouldn't deter you from giving it a try. Some quick feature detection can let you fall back to the traditional checkout flow if it's not yet supported.

It's available in most browsers. Firefox and Safari are known to be working on it. Hopefully we'll see it finally take off in 2018.

## Intersection Observer

<p data-height="265" data-theme-id="0" data-slug-hash="KXraEN" data-default-tab="js,result" data-user="MattCrouchUK" data-embed-version="2" data-pen-title="Intersection Observer API" class="codepen">See the Pen <a href="https://codepen.io/MattCrouchUK/pen/KXraEN/">Intersection Observer API</a> by Matt Crouch (<a href="https://codepen.io/MattCrouchUK">@MattCrouchUK</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Detect when a page element has come in and out of view with the `IntersectionObserver` API. Yes, it has a limited scope in terms of usefulness, but it's a big improvement on what had to be done to get a similar effect previously.

Checking an element's position on a page can be quite a drag on the browser. If an ad wanted to track screen time, for example, it would have to hook into the `scroll` event. Each call to `getBoundingClientRect()` causes the browser to repaint to check if anything's moved. With `scroll` potentially firing hundreds of times in a few seconds, that's soon going to have an impact on lower end devices.

`IntersectionObserver` reports when an element intersects with either another element, it's scrollable parent, or even the viewport. It can report on thresholds too if you only want to know something like 50% of the element is visible.

This example uses it to lazy-load images as they scroll into view. But, with a bit of clever thinking, we can create infinite scrolling sites and long lists with a performance focus, much like Google/Polymer's [`<iron-list>`][iron-list] component.

It's an API that's been around for a little while. At time of writing, only Safari is missing support. Again, it's easy to fall back to an older technique if this isn't supported.

## window.performance

<p data-height="400" data-theme-id="0" data-slug-hash="oGQZvJ" data-default-tab="js,result" data-user="MattCrouchUK" data-embed-version="2" data-pen-title="window.performance" class="codepen">See the Pen <a href="https://codepen.io/MattCrouchUK/pen/oGQZvJ/">window.performance</a> by Matt Crouch (<a href="https://codepen.io/MattCrouchUK">@MattCrouchUK</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

This one's a little crafty. This is technically a whole object full of various APIs, and it has been around for a while now, but surprisingly few people seem to know about it.

It can be used to report on a number of performance-related metrics - from page load times to memory allocations. Without any prompt at all, checking the performance object on any page shows captured times for events like fetch load start and end, time to interactive, DOM parsing and more. 

With a little bit of careful planning we can mark certain events with `performance.mark`, measure the time between them with `performance.measure` and even see these timeframes in DevTools.

All this data lives in JavaScript, so it's easy to copy out to some external monitoring tool. If a site's time to interactive takes longer than 500ms, for example, automatically file a bug report. It also helps detect issues happening across a much wider variety of devices than you would ever be able to get your hands on in-house.

Browser support is pretty good here. All major browsers have at least an implementation of the basics. There's no reason to look into at least what this might be highlighting already that you may not be aware of.

## Internationalization

<p data-height="400" data-theme-id="0" data-slug-hash="MEzpwE" data-default-tab="js,result" data-user="MattCrouchUK" data-embed-version="2" data-pen-title="Internationalization API" class="codepen">See the Pen <a href="https://codepen.io/MattCrouchUK/pen/MEzpwE/">Internationalization API</a> by Matt Crouch (<a href="https://codepen.io/MattCrouchUK">@MattCrouchUK</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The Web suffers from a chronic lack of internationalisation (i18n) and localisation (l10n) support. Without taking users from other countries into account, dates and number can become ambiguous at best and just plain wrong at worst.

It's been neglected largely because it's quite a pain to implement. While this new API doesn't make everything a walk in the park, it certainly takes the sting out of lots of tricky areas like date, time and string manipulation.

Previously these types of conversions would require some inefficient conversions from bulky libraries. This API shifts a lot of this logic into browser, which is a massive win for developers. I don't envy browser vendors having to keep on top of it all though!

This example just spits out the date in various locale's default formats. It's capable of so much more and is certainly worth checking out.

In terms of browser support, every major browser supports some aspects of i18n. It may be worth checking out which ones support what's required for your site before jumping in, but polyfills and existing libraries can plug the gaps where they appear.

## Web Animations

<p data-height="453" data-theme-id="0" data-slug-hash="MEzpyO" data-default-tab="js,result" data-user="MattCrouchUK" data-embed-version="2" data-pen-title="Web Animations API" class="codepen">See the Pen <a href="https://codepen.io/MattCrouchUK/pen/MEzpyO/">Web Animations API</a> by Matt Crouch (<a href="https://codepen.io/MattCrouchUK">@MattCrouchUK</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Finally, another API that's been around for years but yet largely flown under the radar. Web Animations are essentially CSS animations you control through objects, rather than delicate manipulation of classes.

It's another topic I've done a [Web Designer tutorial][Web Animations API Tutorial] on in the past. While there I channeled my inner [Space Jam][Space Jam], it can be used for so much more.

While it's being targeted at games and fancy animation projects, it has as much an impact on regular sites. Little flairs on adding something to a favourites list or closing a modal window can make an interface much more fun and inviting. The Web Animations API can help with that and more.

Syntax mimics CSS animations - for good reason. It helps to convert complex animations juggling CSS to a more intuitive set of interactions. It uses the same engines as well so performance stays top notch.

Implementations are a bit patchy across browsers, but most do support the `animate` method, which is the core to what most sites would need.

That's that! I hope that serves as a useful starting point for some great implementations in the future. I hope this blog post doesn't age as quickly as some of my Flash work ended up doing back in the day, but I hope I can look back at this next year and see these things being used on the day to day.

[Barcamp Southampton]:http://www.barcampsouthampton.org/
[Payment Request API Tutorial]:{{ site.baseurl }}/2016/12/payment-request-api/
[iron-list]:https://www.webcomponents.org/element/PolymerElements/iron-list
[Web Animations API Tutorial]:{{ site.baseurl }}/2016/10/electron-web-animations/
[Space Jam]:https://www.warnerbros.com/archive/spacejam/movie/jam.htm