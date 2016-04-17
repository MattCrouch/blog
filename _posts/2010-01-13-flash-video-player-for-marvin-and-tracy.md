---
layout: post
title: Flash Video Player for Marvin and Tracy
date: 2010-01-13 20:42:50
image: 2010-01-13-flash-video-player-for-marvin-and-tracy/dev-screenshot.png
tags:
- AS2
- Flash
- video
---
As part of my course, we have to create a video channel website full of interesting and fun things to do on that site relating to a series of fictional and non-fictional video content. Our group’s project centres around creating a parody of already comical TV series [Gavin and Stacey][Gavin and Stacey].

The objective is to make three short clips of scenes both featured in the Gavin and Stacey episodes and original material, alongside a behind-the-scenes short video introducing the cast and brief interviews with them.

This project is centred around teamwork. Different members of our 6-person team were assigned different roles. My roles centred around the design of the website and creation of some of the content, such as character profiles, downloadable backgrounds and alike. 

[![Marvin and Tracey Site Design][Marvin and Tracey Site Design]][Marvin and Tracey Site Design]

This was our initial Photoshop mock-up of the site after [drawing up a plan][drawing up a plan]. While the design has changed and will change further, this was what I went on when creating the Flash video player, which is going to be set up as the main feature where the big image is, Marvin and Tracy-style.

Another member of my group was coding an AJAX script to control what Flash video showed up when clicking on one of the four images which would appear in the white box underneath the video, ala iPlayer. 

The aim for this player was to be quick loading, simple to use, keep with the style of the website and be externally editable – that is – to be able to hot-swop what video was to be played by changing a couple of lines in the embedding code.

This wasn’t something I had tried before. I took a look at other video sites such as the iPlayer and YouTube and looked to see what made theirs work. I came to the assumption it needed to be the biggest video play space possible with a simple play, rewind and scrubber for the video. It also required volume controls, but I had worked with them in previous projects.

Originally the plan was to create this in ActionScript 3 but after soon realising that even after over a year or two of mainstream use, ActionScript 3 isn’t well documented yet and the basic things I learned in AS 2 had dramatically changed in AS 3, so I decided to continue working in AS 2 until I had time to work out the inners of AS 3.

[![Development Screenshot][Development Screenshot]][Development Screenshot]

The player works by initiating a NetStream inside a NetConnection, which will play the video supplied by the FlashVars in the embedding code when the user hits one of the two play buttons – one each for regular and high definition.

[![Timeline][Timeline]][Timeline]

The video is pulled in through FlashVars, so it is only necessary for other members of the team to change a bit of the HTML rather than coming through me and publishing a new Flash file for each new video. This also means that the player need only be downloaded once from our server, and only once by the visitor.

The ActionScript is kept to one keyframe on one layer for the most part. This makes it easier for me or anyone else to edit in the future if need be. It also keeps the flash file a small size to download. Everything in the file is simple vector graphics – no images are used and so no hefty download file. Smiles all round.

The scrubber is kept minimal to keep in with the rest of the look. The user can click anywhere along it and play will jump there and continue playing. They can’t click on a point which hasn’t loaded as the scrubber bar extends out to 100% when it has fully loaded. 

Videos are streamed from the server in FLV format encoded straight from the HD source using Media Encoder. Two copies are made and uploaded for standard and high-definition. The file will only load the version selected by the user.

[![Video Player In Use][Video Player In Use]][Video Player In Use]

This is a screenshot from a working version of the video player, feeding from a few lines of embedding code from an otherwise blank HTML file. It still needs testing on the site when we get round to filming the video content, but so far so good. It’s now being tested by people ‘trying their hardest to break it’, but so far it’s holding up.

A bit of spit and polish and it should be up and shining as soon as we have the video content for it to serve. It’s easily dynamic, also, so I can use it in future projects if need be.

[Development Screenshot]:{{ site.baseurl }}/assets/2010-01-13-flash-video-player-for-marvin-and-tracy/dev-screenshot.png
[Marvin and Tracey Site Design]:{{ site.baseurl }}/assets/2010-01-13-flash-video-player-for-marvin-and-tracy/marvin-tracey-site-design.png
[Timeline]:{{ site.baseurl }}/assets/2010-01-13-flash-video-player-for-marvin-and-tracy/timeline.png
[Video Player In Use]:{{ site.baseurl }}/assets/2010-01-13-flash-video-player-for-marvin-and-tracy/video-player-in-use.png
[Drawn Plan]:{{ site.baseurl }}/assets/2010-01-13-flash-video-player-for-marvin-and-tracy/drawn-plan.jpg

[Gavin and Stacey]:http://en.wikipedia.org/wiki/Gavin_&amp;_Stacey