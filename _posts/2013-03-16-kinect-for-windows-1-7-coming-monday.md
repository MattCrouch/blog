---
layout: post
title: Kinect for Windows 1.7 Coming Monday
image: 2013-03-16-kinect-for-windows-1-7-coming-monday/kinect-fusion.jpg
date: 2013-03-16 23:48:17
tags: [kinect, windows, sdk]
---
Heh, lots of exciting Kinect news coming out recently, and this one certainly took me by surprise and it's something that might just kickstart me back into Kinect development.

1.7 is another stepping stone along the Kinect SDK roadmap which brings in two key features - one of which probably should have been there since day 1. There's more detail on the [MSDN blog][MSDN - New Version of Kinect SDK], but here's my take on the important bits.

Kinect Interactions are exactly what they sound like. There's finally going to be a set of standard interactions pre-built into the SDK that have been heavily pre-tested, error checked and standardised so we can now make great, consistent interactions between Kinect projects. Previously, if you tried any sort of interaction logic with the Kinect, you were opening up an entire can of worms - something I addressed in [my BarCamp talk][Kinect and Why You're a Prick] last weekend.

This update brings not only recognition of standard gestures, but also screen mechanics as well. Coupling those together, we can simulate button presses on screen for example with little development time from our side and we can benefit from all those calculations being done at a lower level for quicker processing.

[![Kinect Fusion][Kinect Fusion]][Kinect Fusion]

The second important inclusion is Kinect Fusion - tech that was demoed a while back which would turn the Kinect into a 3D scanner more than a control mechanism. It would scan a scene and allow you to export that data to other systems for use in games modelling, 3D printing, or whatever you felt it necessary to use it in. It's clever enough to know when a scenes changed and modify the data accordingly rather than just duplicating it. It can also compare two scenes, find what's been added and export a model of just useful for you.

There's a couple of other things included, but they're what are being billed as the big hitters, and rightly too. All this coming to Kinect developers Monday morning, so don't forget to update! Any projects all the way back from v1.0 will still work, so it can't hurt to at least benefit from any performance updates it brings.

[Kinect Fusion]:{{ site.baseurl }}/assets/2013-03-16-kinect-for-windows-1-7-coming-monday/kinect-fusion.jpg

[MSDN - New Version of Kinect SDK]:http://blogs.msdn.com/b/kinectforwindows/archive/2013/03/16/kinect-for-windows-announces-new-version-of-sdk-coming-march-18.aspx
[Kinect and Why You're a Prick]:http://mattcrouch.net/blog/2013/03/kinect-and-why-youre-a-prick-barcamp-bournemouth-talk/