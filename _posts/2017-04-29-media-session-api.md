---
layout: post
title: Build a Podcast Application that uses the Media Session API
date: 2017-04-29 12:00:00
image: 2017-04-29-media-session-api/media-session-api-tutorial.jpg
thumbnail: 2017-04-29-media-session-api/media-session-api-tutorial-sm.jpg
tags:
- JavaScript
- Tutorial
- Media Session API
- Podcasts
- PWA
---
There's a new issue of [Web Designer][Web Designer] out now. Learn how to make a podcast application in just 21 easy steps... sort of. 

The focus here is on the [Media Session API][Media Session API], currently only available on Android devices. It provides not only more detailed information about the currently playing media to the operating system, but also allows you to create playlists, timeshift interactions, and ultimately a cleaner experience for all involved.

It's being developed as part of a specification - mostly championed by Google - but I hope to see it on multiple platforms in the future. Mobile is a prime target for interactions like this, so I hope iOS gets a sniff of it soon.

In the tutorial we will build out a podcast application, which gets its information from a server cache of podcast feeds. The app then builds out a playlist that will keep running in the background even while not using the browser. It's neat!

While it's not at the minute, this application is primed to become a PWA. Some careful thought needs to be put into managing downloaded episodes, and to make sure those episodes are served as ranged responses, but it would be a great way to take the tutorial further if you want to.

If you've got an Android device to hand, take a look! Even if the whole podcast building thing doesn't suit you, you may have a use for the Media Session API in the future so it's worth keeping an eye on.

[Web Designer]:https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-261/
[Media Session API]:https://developers.google.com/web/updates/2017/02/media-session