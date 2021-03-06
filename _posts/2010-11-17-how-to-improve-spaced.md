---
layout: post
title: How to improve Spaced
date: 2010-11-17 15:30:37
image: 2010-11-17-how-to-improve-spaced/spaced-hud.jpg
tags:
- crit
- design
- development
- game
- Spaced
---
A while ago, back when I handed in Spaced for the critical evaluation (the bit at the end of the two weeks intense learning to get feedback for our actual hand-in date) I got a fair chunk of feedback from people playing it and people watching people play it. 

It's only really now I'm looking into it because, in all honesty, I haven't really found the time to. But seeing as we have what is essentially a week off in the middle right now, I thought what better time than to set my game plan for the final hand in.

## So what needs to be improved?


- Well first off the instructions weren't clear enough thanks to the font they were written in.
- Desktop version (for Mac, at least) is super-fast and is pretty much unplayable. 
- The play area is too large for what's going on.
- The 'coins' are too small/too similar colour to the background so you can't tell what to go for.
- It's hard to tell which way is up.
- There's not a lot of replay ability.

## …are there any positives?

- The music is fitting with the old-school vibe going on.
- The concept itself is simple enough to allow someone to just jump in, but it's complex enough to be compelling.

So, back to the drawing board? Not entirely. Sure, it needs a few tweaks here and there, but nothing that is impossible to achieve between now and Christmas time. It just needs to be redesigned to make these things less of a problem and more awesome. So that's exactly what I did.

## Tackling the font

First off (and perhaps the easiest) is to tackle the font issue. In Unity 3D, it's simply a case of swapping out one font file for another and everything will change. In theory, at least. So it's just a case of choosing a font that people can read at whatever resolution – full screen or windowed.

The original font was [Technoid][Technoid] on dafont.com. While it needs to be similar to this – in other words, 'Space-y' – it needs to be clearer.

It needs to be something that will look clear on a background that's mostly black and be pretty wide in it's application. So I decided to go with the free-for-use [Good Times][Good Times] font from dafont.com. It seemed to tick all boxes and, well, we'll see if it's any good when we come to build the thing for the final time.

## But why does it run so fast?

After looking around the Internet, there's three reasons why this could be happening – one of which I have control over, one is a screen refresh problem and the other is a reported bug in Unity. So I'll do what I can to see if that helps at all.

As you saw in my scripts in my [How To Build A Rocket Ship][link reference] post the other day, I use the <code>Update()</code> function quite a bit. It's the function which will run every keyframe and, if you've ever worked with any sort of moving image, keyframes are determined by the hardware on the user's system. 

A way to make sure all the things happen at the same speed on every system (if they're running in the <code>Update()</code> function) is to make sure they're multiplied by a variable called <code>Time.deltaTime</code>. This works out how long it was since the last frame ran. It essentially translate the speed variable (say, travelling at 30 metres every frame) to an independent one (30 metres per second). It should just be a case of finding all of my movement codes and add that little gem in and all should be well.

## Shrinking the play area

When getting Spaced round to how it is now, the idea was you could move around as you like (because, well, it's in space) and limiting the play area to what it is – 1km square – was reasonable enough. But I think the main argument here is that it takes too long to get to what you want. If you realise you missed a coin in the opposite corner of the map, it takes a good 20-30 seconds to get there. If you miss it on your first go, it takes what seems like an age to locate it again.

So what's best? Speed up the rocket, or shrink the play area? I decided to do a bit of both.

Firstly, I reckon I'll make the play area about 750m square. That's not a particularly drastic decrease but hopefully will help somewhat. It will be a case of testing it (with more coins to collect to make it less boring going from A to B) to get the perfect balance.

Secondly, I'll give the rocket boosters. I'm currently undecided whether it's best to make the rocket just go faster when pushing the space bar for example or have the user collect booster packs that give a boost of speed for, say, 5 seconds with a limited number in the play area. Choices, choices. Again, a case of testing to see whether the former makes it too easy to complete the game.

## Making the coins stand out

Currently the coins are modelled after little asteroids which, to me at the time, made more sense than just random coins in space. But because the Skybox currently in use features a moon as a point of reference to which way is up (and also, peculiarly, clouds, but ignore that…), and the coins look like moons, it gets confusing. That and when they're far away you can't tell if they're coins or just dust on the screen. So you could be heading to something you could get rid of with a brush of the screen. 

How do you make them easier to see without making them so big there's no challenge in trying to get them? Answer: a HUD. But we'll get to that in a sec.

## Which way is up?

The problem with space is that there's hardly any reference points. If I assume we're a space ship somewhere in our solar system, I could place the sun at one end and planets at another, but then them being round it doesn't really help. You could be flying upwards when you think you're going straight. Added challenge? True, but it's very disorientating to people who play it.

So I'll encompass that in to a new on-screen HUD that should be coming into it, depending whether or not I can actually make it.

[![Spaced HUD][Spaced HUD]][Spaced HUD]

It's essentially how it is with a few added features like a total amount of coins for this level (note to self: make something awesome happen if they get them all within the time limit), an incline meter (which probably isn't the best implementation, but we'll see) and a top-down view of where everything is in the current map.

Of course, the addition of this could be a double-edged sword. On one hand, it makes it simpler to play the game right off the bat, but is it also making it too easy? Maybe a way for people to turn it off to make it less easy or to declutter the screen? 

Either way I'm hoping this will help fix those other problems. But there's one still poignant point:

## Replay-ability

 It's something that plagues even good games today. How do you make a game – least of all a web-based game – replayable? It's all to do with having something the user would want to actually come back and do again. The draws of games like Mass Effect and Fallout is the fact that you will rarely get the same game play style twice. Sure, the structures the same, but you meet new people, kill those you were friends with etc. But that only really works on a game people will buy and spend a couple of hours at a time playing. Web games have about 10 minutes to impress the player or they're ditched for the next game on. 

There's currently no storyline in Spaced, but there easily could be. Right now you're a spaceship flying into asteroids. What if you were, say, a delivery company flying through space collecting parcels to deliver somewhere? Okay, perhaps shouldn't rip on Futurama, but you see where I'm going with this.

If I give it a narrative, I can give it a chance to fork on the narrative.Say, if you didn't collect enough of the asteroids, they plummet to Earth and kill everyone. As an optimistic game, of course.

It's something I'll have to test out. I know I've been saying that a lot, but I feel getting the basics above sorted beforehand is more important.

[Spaced HUD]:{{ site.baseurl }}/assets/2010-11-17-how-to-improve-spaced/spaced-hud.jpg

[Technoid]:http://www.dafont.com/technoid.font?text=Spaced
[Good Times]:http://www.dafont.com/good-times.font?text=Spaced