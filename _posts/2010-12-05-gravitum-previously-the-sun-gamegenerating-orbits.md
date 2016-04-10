---
layout: post
title: Gravitum (Previously The Sun Game) - Generating orbits
date: 2010-12-05 01:21:08
tags:
- AS3
- development
- Flash
- game
---
<p>If you haven't already noticed, there's now a working version of <a href="http://www.mattcrouch.net/portfolio/insight.php?p=gravitum">Gravitum</a> out in the ether. It's evolved from what was codenamed <em>The Sun Game (</em>back when it well, involved a sun…) into an atom-based game where you collect the good electrons and avoid the bad ones.</p>
<p>But I've had a couple of people ask me how the orbits work. Seeing as they're a core part of the game and aren't likely to change any time soon, I'm sure I could show you.</p>
<p style="text-align: center;"><a href="http://www.mattcrouch.net/blog/images/b0847eba0b03_8FE/mcOrbital-mcRing.png"><img class="aligncenter" title="mcOrbital-mcRing" src="{{ site.baseurl }}/assets/mcOrbital-mcRing_thumb.png" border="0" alt="mcOrbital-mcRing" width="244" height="207" /></a></p>
<p>In the Library there's a movieclip called <em>mcOrbit</em>. In it, sit two other movieclips – <em>mcOrbital </em>and <em>mcRing</em>. Their instance names within the movieclip are <em>mcOrbitalOrbit </em>and <em>mcRingOrbit</em>. That's not really important, just so you'll understand the mass of code later on…</p>
<p><em>mcRing </em>is just a movieclip with an empty circle in it. The scale on the line is set to 'None' because, well, I don't want it to scale. It stays at 4px thick no matter what size it is, which is important later on.</p>
<p>Jump back to our <em>main.as </em>ActionScript (which holds the class for the main timeline), we've got a lot of variables, but let's just jump to an important section first…</p>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  1: 		<span style="color: #0000ff;">private</span> <span style="color: #0000ff;">function</span> releaseOrbit():<span style="color: #0000ff;">void</span> {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  2: 			<span style="color: #0000ff;">var</span> orbit:MovieClip;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  3: 			orbit=<span style="color: #0000ff;">new</span> mcOrbit(<span style="color: #0000ff;">this</span>);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  4: 			orbit.<span style="color: #0000ff;">name</span>="<span style="color: #8b0000;">mcOrbit</span>"+orbitsArray.<span style="color: #0000ff;">length</span>;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  5: 			addChildAt(orbit,getChildIndex(mcBG)+1);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  6: 			orbit.x=300;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  7: 			orbit.y=300;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  8: 			orbitsArray.push(orbit);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  9: 			trace("<span style="color: #8b0000;">orbits...</span>");
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 10: 			trace(orbitsArray.<span style="color: #0000ff;">length</span>);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 11: 			countdownToOrbit.reset();
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 12: 			countdownToOrbit.start();
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 13: 			stage.addEventListener(Event.ENTER_FRAME,hitTester);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100.13%; font-family: consolas,'Courier New',courier,monospace; height: 18px; font-size: 12px;"> 14: 		}
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 15:</pre>
<p>This function is called every time the timer ticks a specific number of times (depending on the level) but that'll be covered in another post. You'll just have to keep tuning in for that one, I'm afraid.  What this is doing is creating a blank movieclip, loading into that an instance of <em>mcOrbit</em> (which is defined earlier on in the script), gives it a unique name based on it's position in the array (which is used for hittesting, which we'll come to), places it and positions it in the centre of the stage, puts it into the array, does a couple of traces (to show it's done it all) resets the timer and adds an event listener which runs every frame to make sure it tests hits on it.  Phew, that's a lot of stuff it's doing at once, but it's necessary to get that all out the way so we can generate countless orbits when the game gets harder with more than one orbital.  So now we've got an orbit on the stage. But it's not going to move unless we tell it to. This is where <em>mcOrbit.as </em>comes into play, which loads every time <em>mcOrbit </em>does.</p>
<pre style="border: 1px solid #cecece; padding: 5px; background-color: #fbfbfb; min-height: 40px; width: 702px; height: 259px; overflow: auto;">
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  1: <span style="color: #0000ff;">package</span> {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  2: 	<span style="color: #0000ff;">import</span> flash.display.MovieClip;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  3: 	<span style="color: #0000ff;">import</span> flash.events.*;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  4: 	<span style="color: #0000ff;">import</span> flash.utils.Timer;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  5: 	<span style="color: #0000ff;">import</span> flash.ui.Keyboard;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  6:
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  7: 	<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">class</span> mcOrbit <span style="color: #0000ff;">extends</span> MovieClip {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  8: 		<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">var</span> main:MovieClip;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">  9: 		<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">function</span> mcOrbit(_stage):<span style="color: #0000ff;">void</span> {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 10: 			main=_stage;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 11: 			<span style="color: #0000ff;">this</span>.addEventListener(Event.ENTER_FRAME,moveOut);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 12: 			addEventListener(Event.ADDED_TO_STAGE,init);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 13: 		}
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 14:
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 15: 		<span style="color: #0000ff;">private</span> <span style="color: #0000ff;">function</span> init(event:Event):<span style="color: #0000ff;">void</span> {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 16: 			stage.addEventListener(KeyboardEvent.KEY_DOWN, startMove);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 17: 		}
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 18:
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 19: 		<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">function</span> moveOut(event:Event):<span style="color: #0000ff;">void</span> {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 20: 			<span style="color: #0000ff;">if</span> (main.livesLeft &lt;= 0 || main.coinsCollected &gt;= main.noOfCoins) {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 21: 				<span style="color: #0000ff;">parent</span>.removeChild(<span style="color: #0000ff;">this</span>);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 22: 				<span style="color: #0000ff;">this</span>.removeEventListener(Event.ENTER_FRAME,moveOut);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 23: 			}
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 24: 			<span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">this</span>.mcRingOrbit.width&gt;650) {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 25: 				<span style="color: #0000ff;">parent</span>.removeChild(<span style="color: #0000ff;">this</span>);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 26: 				removeEventListener(Event.ENTER_FRAME,moveOut);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 27: 				trace("<span style="color: #8b0000;">removed orbital</span>");
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 28: 				main.removedOrbits++;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 29: 				<span style="color: #0000ff;">if</span> (main.removedOrbits&gt;=main.noOfOrbits) {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 30: 					main.nextLevel();
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 31: 				}
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 32: 			} <span style="color: #0000ff;">else</span> {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 33: 				<span style="color: #0000ff;">this</span>.mcRingOrbit.width+=main.speedOfOrbitExpand;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 34: 				<span style="color: #0000ff;">this</span>.mcRingOrbit.height+=main.speedOfOrbitExpand;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 35: 				<span style="color: #008000;">//this.mcOrbitalOrbit.y -= (main.speedOfOrbitExpand / 2) - ((main.speedOfOrbitExpand / 2)/this.mcRingOrbit.height);</span>
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 36: 				<span style="color: #0000ff;">this</span>.mcOrbitalOrbit.y = (-(<span style="color: #0000ff;">this</span>.mcRingOrbit.height/2) + ((<span style="color: #0000ff;">this</span>.mcRingOrbit.scaleY * 2)));
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 37: 			}
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 38: 		}
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 39:
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 40: 		<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">function</span> startMove(event:KeyboardEvent):<span style="color: #0000ff;">void</span> {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 41: 			<span style="color: #0000ff;">switch</span> (event.keyCode) {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 42: 				<span style="color: #0000ff;">case</span> Keyboard.LEFT :
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 43: 					<span style="color: #0000ff;">this</span>.rotation-=(3000 / <span style="color: #0000ff;">this</span>.width);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 44: 					<span style="color: #0000ff;">this</span>.mcOrbitalOrbit.rotation+=(3000 / <span style="color: #0000ff;">this</span>.width);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 45: 					<span style="color: #0000ff;">break</span>;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 46: 				<span style="color: #0000ff;">case</span> Keyboard.RIGHT :
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 47: 					<span style="color: #0000ff;">this</span>.rotation+=(3000 / <span style="color: #0000ff;">this</span>.width);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 48: 					<span style="color: #0000ff;">this</span>.mcOrbitalOrbit.rotation-=(3000 / <span style="color: #0000ff;">this</span>.width);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 49: 					<span style="color: #0000ff;">break</span>;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 50: 			}
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 51: 		}
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 52: 	}
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"> 53: }</pre>
<p>(It's in a scroll box to save your sanity, but it's there. All of it.)</p>
<p>I'll sum it up as this – when it loads, every frame it's on the stage, it will grow by a certain amount dictated by a variable inside the <em>main.as </em>file (to do with the level you're on and some other complex sounding maths…), usually somewhere between 1-6 pixels a frame, until it reaches a maximum width of around 650 pixels, where it will remove itself from the stage and add one to a counter that keeps track of how many have gone through. When that counter equals the amount released, the level is over and the user has completed it successfully, so on to the next one.</p>
<p>But if you resize the whole <em>mcOrbit </em>movieclip, everything will get bigger, including the orbital (the little red dot you control, if you didn't know. :)). The solution is to actually resize <em>mcRingOrbit</em> and have <em>mcOrbitalOrbit </em>stick onto that. There's some strange looking code in there that does that in what looks like a totally backwards and stupid way, but it's needed thanks to the way the no scaling of lines works. Essentially, the width is reported as if it was being scaled, so you need to compensate for that with its relation to its <span style="font-family: Lucida Console;">ScaleX </span>and <span style="font-family: Lucida Console;">ScaleY</span> values. It's a bit random, but it works, so…</p>
<p>That's pretty much it. When the user pushes the left and right arrow keys it's not the orbital moving but the whole movieclip rotating. The speed of its rotation depends on how far from the centre it is (kind of like a normal gravitational thing, really) so you need to take extra care when playing.</p>
<p>And that's how they work. Nothing exciting, just how it works if anyone ever needs to make one.</p>
