---
layout: post
title: Web Progressions
date: 2016-05-09 19:00:00
image: 2016-05-09-web-progressions/pokemon-cipher.jpg
image-credit: https://twitter.com/torgo/status/729712714684243968
tags:
- Conference
- Campus London
- Event
- Progressive
- Web
---
I only seem to make conferences when they're a) at a weekend and/or b) when they're free. So it's a rare treat for me to head along to [Web Progressions][Web Progressions] over at Google's Campus London.

It's run by [three lovely people][Bruce Lawson - Post Event Drink] - Daniel, Natasha and Bruce - who were more than welcoming to a lot of eager developers.

While I'm in the process (Like I always am...) of bringing my skills up to date, I figured maybe it's time to get one step ahead for a change. That's exactly what Web Progressions was all about. Well... mainly about service workers, I guess. But there were other things featured alongside.

[![Bruce Lawson - Progressive Web Introduction][Bruce Lawson - Progressive Web Introduction]][Twitter - Bruce Lawson - Progressive Web Introduction]

## Service Workers

Service workers are great. They are little bits of code that sit between your browser and the network and help the developer have a bit more control over what's downloaded when.

An obvious benefit - and one touted most often - is the ability to grab certain files and store them locally. It's not quite a cache but not far off. You can specify what to do if your site is accessed when offline or what content is available in that situation.

It runs on its own thread, with no direct DOM access. So it means there's no chugging trying to grab all the extra data in the background. It's all taken care of by the browser.

It can explicitly defines necessary assets so you can even get it sitting on your phone's home screen looking like an app ready to roll.

The best bit? It's available in one form or another on [around 53% of browsers][caniuse.com - Service Worker] right now. Certainly worth giving a shot. Take a look at the [Service Worker API on MDN][Service Worker API] if you think it's something you want to take on right now.

The Guardian have had a stab at it. Half their visitors on various platforms visiting using a browser that supported service workers, but only a third of people using the cached resources found in their app. While they say it's too early to say if it's been a success or not, offline access to any news content already seems like a win in my book. You can see how they got on on their [development blog][Guardian Development Blog - Service Worker].

## Web MIDI

Aside from the service worker stuff, we were treated to an introduction to Web MIDI (and MIDI in general) by [Ruth John][Ruth John - Twitter].

If you're anything like me you assumed MIDI was left alongside Geocities and spinning email GIFs in the Internet annals of yore. But it's well and truly alive allowing common conversations between electronic instruments. It's soon making its way into the browser with [47% coverage][caniuse.com - MIDI] at the moment. There's even a spec for show and vision controls, so more devices can get in on the music.

## Physical Web

[Ilario Gressi][Ilario Gressi - LinkedIn] gave us a whistle stop tour of the [Physical Web][Physical Web].

[![Ilario Gressi - Physical Web][Ilario Gressi - Physical Web]][Twitter - Ilario Gressi - Physical Web]

It essentially boils down to a low energy Bluetooth beacon broadcasting a URL (as it stands, at least) at a set interval. Any devices in range can pick it up if it's on and actively looking for them. People can then select an item to look more into from a list on their phone.

It's fairly simple by design, but bridges the gap between physical and digital for the user. No need for scanning QR codes or manually entering in data. Nearby beacons can be filtered and sorted by user's past preferences also, so they aren't bombarded by URLs in the not-to-distant future.

There's nothing particularly *new* about the physical web, just the standardised manner it goes about it. That's always a good thing.

## Other Stuff

There was plenty of other content all looking at various parts of the web at present and in future. From responsive design in 2016, making third-party scripts behave on your site and keeping your server secure, all while setting HTTPS up on a server to play with all the new fun stuff.

In all, a great event and one I'm glad I got to be a part of. Who knows what such a day could be filled with in a few years time?

[Bruce Lawson - Progressive Web Introduction]:{{ site.baseurl }}/assets/2016-05-09-web-progressions/brucel-talk.jpg
[Ilario Gressi - Physical Web]:{{ site.baseurl }}/assets/2016-05-09-web-progressions/ilario-gressi-physical-web.jpg

[Web Progressions]:https://webprogressions.org/
[Bruce Lawson - Post Event Drink]:https://twitter.com/brucel/status/729730156898717696
[caniuse.com - Service Worker]:http://caniuse.com/#feat=serviceworkers
[Twitter - Bruce Lawson - Progressive Web Introduction]:https://twitter.com/torgo/status/729602542817185792
[Service Worker API]:https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
[Guardian Development Blog - Service Worker]:https://www.theguardian.com/info/developer-blog/2015/nov/04/building-an-offline-page-for-theguardiancom
[Ruth John - Twitter]:https://twitter.com/Rumyra
[caniuse.com - MIDI]:http://caniuse.com/#feat=midi
[Ilario Gressi - LinkedIn]:https://www.linkedin.com/in/ilario-gressi-633a503
[Physical Web]:https://google.github.io/physical-web/
[Twitter - Ilario Gressi - Physical Web]:https://twitter.com/torgo/status/729679175892774914