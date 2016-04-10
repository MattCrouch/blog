---
layout: post
title: Updates to Moto and other such things
date: 2012-11-06 21:32:41
image: 2012-11-06-updates-to-moto-and-other-such-things/moto-korea-class.jpeg
tags: [moto, kinect, update]
---

It's been a while since this blog got updated. Mostly you have the end of my uni project to blame for that one. But I thought it best to update this blog to tell you where I'm at with Moto and development as a whole. Don't worry, I'll try and not make it dull.

## Moto

The biggest staple of this blog by far for the past year has been Moto - the Kinect application that lets you play music with your body.

Well, that got a 2:1, which is great. Considering it's experimental, using a coding language I never used before and broke when my tutors tried to use it, that's awesome.

But what now? Could I continue developing Moto? Possibly. But the problem is exactly what I've just said - It was my first project in C# and, while it worked, it didn't work very well. Most of it works and if something was changed, it would break completely. It's also using WPF, a display-level language which isn't exactly suited to situations like the Kinect (especially Moto).

The aim is to completely rewrite Moto to work with XNA, which is Microsoft's gaming platform. It's more suited to what Moto became and, to be honest, it's what it should have been coded in had it not been too late to change it for university.

### But what about the Koreans?

Half of why I want to rewrite Moto is because there's a class in Korea who's using Moto as an example of an implementation of the Kinect SDK. I've had comments here asking how to achieve things in XNA and I just have to reply "I don't know", followed by "...but I really want to know".

To those guys, I'm flattered. Thanks for the [pictures in the Moto gallery][Moto Gallery photo]. I'll try to help you guys when I develop it in XNA. Hope you come back to see how it progresses.

[![Moto Gallery photo][Moto Korea Class]][Moto Gallery photo]

## Other projects

But, of course, I've got other things to do. One can't just jump into XNA and assume it's all going to come out great. Which is why I've got another Kinect project up my sleeve. Or, rather, a collection of them.

### Kinexperiments

I've had a few ideas as to what I want to do next with the Kinect. Whether it's small projects, or bigger one, I've got a few different ones.

But they all share a similar underlying message - they all interact with the web somehow. Inspired somewhat by the [Google Web Lab][Google Web Lab] I wanted to make a bunch of things which you can use with the Kinect, but also online wherever you are.

Kinexperiments is designed to be a hub for different Kinect projects where they interact with the public. One of those, for example, is a data mosh generator. You move about in front of the Kinect, it captures that data and spits out a gif of a [data mosh][Data Most].

While that's not particularly interactive, it's the start of a bunch of ideas which I would be a fool to reveal on a single blog such as this.

So stay tuned. More stuff's coming. It's predominantly Kinect based, but it's got to interact with the web somehow. So it's no doubt going to involve some kind of web tech too. How exciting!

[Moto Korea Class]:{{ site.baseurl }}/assets/2012-11-06-updates-to-moto-and-other-such-things/moto-korea-class.jpeg

[Moto Gallery photo]:http://mattcrouch.net/moto/image/175
[Google Web Lab]:http://www.sciencemuseum.org.uk/visitmuseum/galleries/weblab.aspx
[Data Mosh]:http://www.youtube.com/watch?v=tYytVzbPky8