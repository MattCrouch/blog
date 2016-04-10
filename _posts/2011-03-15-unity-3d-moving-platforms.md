---
layout: post
title: Unity 3D – Moving Platforms
date: 2011-03-15 21:57:20
tags:
- game
- Spangles
- trigger
- Unity
---
<p>That title may make me sound like the most square, nerdy individual you've probably come to expect if you've read this blog more than the once, but hey, I'll give myself a chance to redeem any shortfalls in my social life.</p>
<p>For the past what seems like forever, we've been working on a game called <em>Spangles Speed Sprint </em>which I'm sure you've heard <a href="http://mattcrouch.net/blog/category/ba-imp/spangles-rebrand/">something</a> about, even if you haven't heard a lot in the past month. It's because we've been hard at work, and I thought now is a good time to shine a light on something basic – what to do on a moving platform.</p>
<p><img style="display: block; float: none; margin-left: auto; margin-right: auto;" title="moving platform" alt="moving platform" src="{{ site.baseurl }}/assets/moving-platform-2-300x153.png" width="343" height="176" /></p>
<p>Here's a little side-fact for you – a lot of the functionality in <em>Spangles Speed Sprint </em>is just done through triggers. You pass through a certain trigger with the appropriate tag and something will happen. For example, when you jump on a trampoline, it's the trigger sitting just above it that forces the player up again, not the actual trampoline itself.</p>
<p>In the case of the moving platform, it's the platform (modelled in Cinema 4D) and a trigger both a child of an empty GameObject to keep it in a nice little package. It's the GameObject that moves, moving all the children with it.</p>
<p>Now detecting whether the player is actually on the platform is simple – whenever they enter the trigger, they're on the platform, and when they're not, they're not. Right?</p>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  <span style="color: #0000ff;">if</span>(object.gameObject.tag == "<span style="color: #8b0000;">movingPlatform</span>"){</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">    Debug.Log("<span style="color: #8b0000;">MOVING PLATFORM!</span>");</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">    transform.<span style="color: #0000ff;">parent</span> = object.gameObject.transform.<span style="color: #0000ff;">parent</span>;</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"></pre>
<p>  </p>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">}</pre>
<p>This is the code appearing in the <span style="font-family: 'Lucida Console';">OnTriggerEnter</span> function. To move the player along with the platform and so they don't fall through it or slide off it, all that's needed to be done is add it as a parent. It's not the best practice – especially if you're doing a more complex game – but it's simple enough for ours and it works. Sweet.</p>
<p>But we've got a problem. When the player jumps off the platform, they'll still be a child of the GameObject. That's not cool. They'll be sliding all over the shop.</p>
<p>Now I tried all manner of solutions and the one that we arrived at that gave us a consistent result is a few lines in the <span style="font-family: 'Lucida Console';">Update()</span> function.</p>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  <span style="color: #0000ff;">if</span> (!controller.isGrounded) {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">    transform.<span style="color: #0000ff;">parent</span> = <span style="color: #0000ff;">null</span>;</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">    transform.rotation.z = 0;</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  }</pre>
<p>Basically, if the player is on the ground, it's not a child of anything, regardless of whether they were just on a moving platform or not. The only time it has a parent is when it's on a moving platform. Short and sweet, if not a little hacky.</p>
<p>And that's it, really for the actual mechanism of the thing, there's just one more thing about the movement.</p>
<p><img style="display: block; float: none; margin-left: auto; margin-right: auto;" title="animation" alt="animation" src="{{ site.baseurl }}/assets/animation-2-300x97.png" width="451" height="147" /></p>
<p>Of course, there's many ways you can make something move, but the most simple way for our game was animation. It's a highly under-rated tool in terms of game development, and the editor within Unity doesn't get the respect it deserves. So if you're looking for anything that has basic movement, then certainly give it a looksie.</p>
<p>Just click the object you want to animate, then head to Window –&gt; Animation (Or Ctrl/Cmd + 6). Click the red record button in the top left of the window and you're off. If you've ever used Flash or anything like that, it's not a million miles away. It's all about keyframes. You can trigger code using it too, so it's double fab.</p>
<p>That's it! The game will be playable soon (I'm sure I'll let you know when) but for now, it's all about keeping you up to date with how stuff works!</p>
