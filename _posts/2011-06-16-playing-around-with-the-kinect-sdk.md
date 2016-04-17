---
layout: post
title: Playing around with the Kinect SDK
date: 2011-06-16 22:56:57
image: 2011-06-16-playing-around-with-the-kinect-sdk/body-point-example.png
tags:
- C#
- code
- experiment
- Kinect
- SDK
---
The Kinect SDK was due to be released "sometime in Spring" and in was announced yesterday almost out of the blue that this day would be today. Awesome. So From about half five this afternoon I've been playing around with a few basics of the SDK.

[![Kinect][Kinect]][Kinect]

I can't really tell you any more than what [Channel 9][Channel 9 Kinect Quickstarts] shows you how to do in it's Quick Start guides as that's all I've done pretty much, assuming you don't count the mashing of two things together that I just did and hoped it works.

When you install the SDK you get a couple of cool demos to play around with, which were both apparently made in about 30 minutes by people who know what they're doing. The Shape Game demonstrates all you can do with the SDK, with things such as skeletal tracking, voice commands and the like. All the code for that is also supplied so you can see how it ticks. 

The Kinect SDK runs in a variety of different languages, but all of similar nature. So don't think you can go and run, say, [Actionscript][Kinect Actionscript Library] and hope they stitch together well. But they've got your C#, C++, Visual Basic (which I dabbled in at school) type things to code with your hearts out.

I haven't touched Visual Basic in donkey's yonks, so I made a choice and went for C# to develop in, mainly because it was the first one I saw. It might turn out to be a good choice, or indeed bite me in the arse.

[![Body Point Example][Body Point Example]][Body Point Example]

Having avoided doing anything like C# before, it's a bit daunting, but like I mentioned before following Channel 9's guides I was quite quickly able to get my head around not only Microsoft Visual C# 2010, but also the ins and outs of the SDK, drawing an image from the bytes and full skeletal tracking. Awesomesauce.

So one tip for you if you've never tried this before, just give it a go. Even if it's just watching the Channel 9 videos (which literally hold your hand through every step) or loading up an example document and changing a few lines of code to get a different results. Who knows, you could be [wob-wob-wob][Kinect Dubstep]'ing your way to the next big thing!

[Kinect]:{{ site.baseurl }}/assets/2011-06-16-playing-around-with-the-kinect-sdk/kinect.jpg
[Body Point Example]:{{ site.baseurl }}/assets/2011-06-16-playing-around-with-the-kinect-sdk/body-point-example.png

[Channel 9 Kinect Quickstarts]:http://channel9.msdn.com/series/KinectSDKQuickstarts/
[Kinect Actionscript Library]:http://www.blog.mpcreation.pl/as3-libraries-for-microsoft-kinect/
[Kinect Dubstep]:http://www.youtube.com/watch?v=lqxUzhDIdqo