---
layout: post
title: Ward 413 – Making an interactive panorama
date: 2010-06-05 12:00:00
image: 2010-06-05-ward-413-making-an-interactive-panorama/panorama-image.jpg
tags:
- AS3
- interactive
- panorama
---
Once we all had collected the idea of what our collaborative project would have as it’s video content, the interactive element was kind of pushed to the side-line. We were left to try and make the story that was told through the video seem interactive to the visitor.

So we came up with a mystery adventure kind of deal in Flash. The idea would be people would be able to explore scenes we had filmed at looking for clues as to what could happen next. If enough people found a clue, solved a riddle or something, they would in essence be able to ‘alert’ characters in the webisodes as to what’s really going on.

Of course we couldn’t film every scenario, so we thought of a way to steer people towards coming up with the final outcome as filmed, but have it seem like it was a totally unpredictable series of events. 

[![Panorama Image][Panorama Image]][Panorama Image]

So entered the idea of a panorama. My camera has the ability to just merge three shots into one to create a long, narrow image. Our aim is to get people actively scrolling from side to side looking for clues in the panorama and get them involved.

But how exactly would you create this in Flash? Well, it took a few attempts, but I finally got a solution to work.

[![Stage and Scrolling][Stage and Scrolling]][Stage and Scrolling]

We’ve got a long image starting from the left on the stage. It’s within it’s own movie clip which we’ll just call “image”. In this “image” movie clip, the panorama is on one layer and transparent clickable buttons are layered on top of it, which trigger events on the main timeline (like a drop down box, for example).

But to slide it round, we needed to set a restraint on the panorama so it didn’t extend beyond the stage width, then an eventListener was added to detect when the mouse moved. When it did, it worked out whether how far it was left or right of the stage centre to determine speed of panning, as well as work out how much panorama image there was left to pan and adjust it’s speed accordingly.

As a result, it glides across and it’s what you will see to some degree when the website finally goes live. 

Other interactive elements within this project will follow, as soon as they’ve been designed and created. :)

[Panorama Image]:{{ site.baseurl }}/assets/2010-06-05-ward-413-making-an-interactive-panorama/panorama-image.jpg
[Stage and Scrolling]:{{ site.baseurl }}/assets/2010-06-05-ward-413-making-an-interactive-panorama/stage-and-scrolling.png