---
layout: post
title: My first Kinect app
date: 2011-10-10 18:42:54
tags:
- C#
- code
- experiment
- Kinect
- Visual Studio
---
<p>Let me get this out from the off – I am not a software developer. I’m an Interactive Media Producer which means… a lot of things. But what I’m used to is developing for the web. Your HTMLs, your JavaScripts, your PHPs. This C# malarkey is alien to me.</p>
<p>But I think I’m up for a challenge, so I got myself stuck in with the SDK first hand the other day. Here’s how I found it…</p>
<p><a href="http://www.mattcrouch.net/blog/images/My-first-Kinect-app_1031A/My-First-App.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="My First App" alt="My First App" src="{{ site.baseurl }}/assets/My-First-App_thumb.png" width="391" height="172" /></a></p>
<p>It’s nothing particularly exciting, but it’s Kinect specific code right there. The thing on the left is the normal RGB camera on the device, the right image is a visualisation of the depth data received by the device. The slider in the middle is simply the elevation of the Kinect motor. Put in for good measure so you could see my pretty face. lucky you.</p>
<p>A lot of this stuff is covered in the <a href="http://channel9.msdn.com/Series/KinectSDKQuickstarts" target="_blank">Channel 9 Quickstarts</a> available since the SDK came out. But I thought I’d learn how to do the motor angle myself without any help from those as, well, what am I going to learn by following a tutorial in a language I’ve never really used before?</p>
<p>First impressions of C#? Hectic. I’m from an ActionScript background if anything, which literally does most basic actions in a single line. This you have to churn through all the bit stream and bosh the image up pixel by pixel. So there’s loads of code for a simple device, which scares me. </p>
<p>But C# is – like most “decent” languages – event-driven, which is a massive, massive help. When the Kinect is ready, do something, for example. When the button is clicked, change the elevation to the position of the slider. That bit I picked up surprisingly quickly. </p>
<p>I think I’ve got the foundations of C# nailed. That is, I’m from a coding background and, if my placement was anything to go by, I’ve got a ‘coding mind’, which is always useful. I was able to guess my way through most of the things I wanted to do in that app that wasn’t documented in the Quickstarts. Probably not best practice but hey, I’ll pick that stuff up as I go, right?</p>
<p>Baby steps, I know. But if I’m going to build the most awesome indie music game on the Kinect, then that’s the direction I’m to go!</p>
