---
layout: post
title: '"The Sun Game" ideas stage'
date: 2009-12-11 00:07:06
tags:
- AS2
- development
- fun
- game
- ideas
---
<p>Having just come out of making <a href="http://www.kongregate.com/games/stupler/the-ball-game">The Ball Game</a> – my first attempt at a full on web game (and not just a silly thing to amuse my friends with), I learned a lot of key skills in Flash design.</p>
<p>These skills were partly Flash-orientated, what with physics, hitTest workarounds and the like. But some can be easily transferred to and from other projects. The main one was that of organisation. Having a clear idea of what you want to achieve before you go right at it is key.</p>
<p>One of my main flaws with The Ball Game was that it originally started out as a test to see what I could make Flash do as a way of widening my knowledge of ActionScript, but it turned into a fully-fledged game. Now I can make a fresh start with this game – codenamed "The Sun Game" – with a leg up from this project.</p>
<p align="center"><a href="http://www.mattcrouch.net/blog/images/TheSunGameideasstage_14D7A/DSC_0201.jpg"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="Basic game mechanics" src="{{ site.baseurl }}/assets/DSC_0201_thumb.jpg" border="0" alt="Basic game mechanics" width="134" height="200" /></a> <a href="http://www.mattcrouch.net/blog/images/TheSunGameideasstage_14D7A/DSC_0205.jpg"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="Plans and rules within the game" src="{{ site.baseurl }}/assets/DSC_0205_thumb.jpg" border="0" alt="Plans and rules within the game" width="134" height="200" /></a></p>
<p>This was an idea for a game that had been kicking around in my brain and cooking for a while when developing The Ball Game. The premise is a simple one: Rays pulse out from the central Sun and on them are movable characters known as 'orbitals'. They are all controlled at the same time, so you need to make sure you're keeping your eye on all of them. You move them around their orbit collecting points and power-ups and (hopefully) not collecting the power-ups that make life difficult.</p>
<p>Okay, that wasn't 'simple' per se, but let's break it down. Let's draw a similarity. Imagine skipping with two skipping ropes held by a friend at either end. They start off with having just one rope, and you can jump it just fine. Later, they introduce a second rope, but have them moving slowly, so you need to concentrate more, but you know exactly when to jump. They then speed it up and you're constantly having to concentrate more and know exactly when to jump, otherwise you could end up flat on your face.</p>
<p>Chuck a sun and some celestial bodies in there, and you essentially have my game.</p>
<p>One drawback (and a product of not planning ahead) from developing The Ball Game was that every level had to be its own Movie Clip thanks to the way I engineered the hitTests. From planning on paper this time, I've worked out how I can control the level difficulty simply by changing a couple of variables at the start of each level.</p>
<p>One thing I need to get my head around before I start going into this project is the nitty gritty details of trigonometric functions with radians (I had to convert to degrees in The Ball Game) and dynamically loading in Movie Clips. But with a B in A-level Mathematics, that shouldn't be too hard, right?</p>
<p>&lt;/famouslastwords&gt;</p>
