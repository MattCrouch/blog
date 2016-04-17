---
layout: post
title: Gravitum (Previously The Sun Game) - Generating Orbits
date: 2010-12-05 01:21:08
image: 2010-12-05-gravitum-previously-the-sun-gamegenerating-orbits/mc-orbital-mc-ring.png
tags:
- AS3
- development
- Flash
- game
- Gravitum
- The Sun Game
---
If you haven't already noticed, there's now a working version of Gravitum out in the ether. It's evolved from what was codenamed *The Sun Game* (back when it well, involved a sun…) into an atom-based game where you collect the good electrons and avoid the bad ones.

But I've had a couple of people ask me how the orbits work. Seeing as they're a core part of the game and aren't likely to change any time soon, I'm sure I could show you.

[![mcOrbital mcRing][mcOrbital mcRing]][mcOrbital mcRing]

In the Library there's a movieclip called <code>mcOrbit</code>. In it, sit two other movieclips – <code>mcOrbital</code> and <code>mcRing</code>. Their instance names within the movieclip are <code>mcOrbitalOrbit</code> and <code>mcRingOrbit</code>. That's not really important, just so you'll understand the mass of code later on…

<code>mcRing</code> is just a movieclip with an empty circle in it. The scale on the line is set to 'None' because, well, I don't want it to scale. It stays at 4px thick no matter what size it is, which is important later on.

Jump back to our <code>main.as</code> ActionScript (which holds the class for the main timeline), we've got a lot of variables, but let's just jump to an important section first…

{% highlight actionscript %}
private function releaseOrbit():void {
	var orbit:MovieClip;
	orbit=new mcOrbit(this);
	orbit.name="mcOrbit"+orbitsArray.length;
	addChildAt(orbit,getChildIndex(mcBG)+1);
	orbit.x=300;
	orbit.y=300;
	orbitsArray.push(orbit);
	trace("orbits...");
	trace(orbitsArray.length);
	countdownToOrbit.reset();
	countdownToOrbit.start();
	stage.addEventListener(Event.ENTER_FRAME,hitTester);
}
{% endhighlight %}

This function is called every time the timer ticks a specific number of times (depending on the level) but that'll be covered in another post. You'll just have to keep tuning in for that one, I'm afraid.  What this is doing is creating a blank movieclip, loading into that an instance of <code>mcOrbit</code> (which is defined earlier on in the script), gives it a unique name based on it's position in the array (which is used for hittesting, which we'll come to), places it and positions it in the centre of the stage, puts it into the array, does a couple of traces (to show it's done it all) resets the timer and adds an event listener which runs every frame to make sure it tests hits on it.  Phew, that's a lot of stuff it's doing at once, but it's necessary to get that all out the way so we can generate countless orbits when the game gets harder with more than one orbital.  So now we've got an orbit on the stage. But it's not going to move unless we tell it to. This is where <code>mcOrbit.as</code> comes into play, which loads every time <code>mcOrbit</code> does.

{% highlight actionscript %}
package {
 	import flash.display.MovieClip;
 	import flash.events.*;
 	import flash.utils.Timer;
 	import flash.ui.Keyboard;

 	public class mcOrbit extends MovieClip {
 		public var main:MovieClip;
 		public function mcOrbit(_stage):void {
 			main=_stage;
 			this.addEventListener(Event.ENTER_FRAME,moveOut);
 			addEventListener(Event.ADDED_TO_STAGE,init);
 		}

 		private function init(event:Event):void {
 			stage.addEventListener(KeyboardEvent.KEY_DOWN, startMove);
 		}

 		public function moveOut(event:Event):void {
 			if (main.livesLeft <= 0 || main.coinsCollected >= main.noOfCoins) {
 				parent.removeChild(this);
 				this.removeEventListener(Event.ENTER_FRAME,moveOut);
 			}

 			if (this.mcRingOrbit.width>650) {
 				parent.removeChild(this);
 				removeEventListener(Event.ENTER_FRAME,moveOut);
 				trace("removed orbital");
 				main.removedOrbits++;
 				if (main.removedOrbits>=main.noOfOrbits) {
 					main.nextLevel();
 				}
 			} else {
 				this.mcRingOrbit.width+=main.speedOfOrbitExpand;
 				this.mcRingOrbit.height+=main.speedOfOrbitExpand;
 				//this.mcOrbitalOrbit.y -= (main.speedOfOrbitExpand / 2) - ((main.speedOfOrbitExpand / 2)/this.mcRingOrbit.height
 				this.mcOrbitalOrbit.y = (-(this.mcRingOrbit.height/2) + ((this.mcRingOrbit.scaleY * 2)));
 			}
 		}

 		public function startMove(event:KeyboardEvent):void {
 			switch (event.keyCode) {
 				case Keyboard.LEFT :
 					this.rotation-=(3000 / this.width);
 					this.mcOrbitalOrbit.rotation+=(3000 / this.width);
 					break;
 				case Keyboard.RIGHT :
 					this.rotation+=(3000 / this.width);
 					this.mcOrbitalOrbit.rotation-=(3000 / this.width);
 					break;
 			}
 		}
 	}
}
{% endhighlight %}

(It's in a scroll box to save your sanity, but it's there. All of it.)

I'll sum it up as this – when it loads, every frame it's on the stage, it will grow by a certain amount dictated by a variable inside the <code>main.as</code> file (to do with the level you're on and some other complex sounding maths…), usually somewhere between 1-6 pixels a frame, until it reaches a maximum width of around 650 pixels, where it will remove itself from the stage and add one to a counter that keeps track of how many have gone through. When that counter equals the amount released, the level is over and the user has completed it successfully, so on to the next one.

But if you resize the whole <code>mcOrbit</code> movieclip, everything will get bigger, including the orbital (the little red dot you control, if you didn't know. :)). The solution is to actually resize <code>mcRingOrbit</code> and have <code>mcOrbitalOrbit</code> stick onto that. There's some strange looking code in there that does that in what looks like a totally backwards and stupid way, but it's needed thanks to the way the no scaling of lines works. Essentially, the width is reported as if it was being scaled, so you need to compensate for that with its relation to its <code>ScaleX</code> and <code>ScaleY</code> values. It's a bit random, but it works, so…

That's pretty much it. When the user pushes the left and right arrow keys it's not the orbital moving but the whole movieclip rotating. The speed of its rotation depends on how far from the centre it is (kind of like a normal gravitational thing, really) so you need to take extra care when playing.

And that's how they work. Nothing exciting, just how it works if anyone ever needs to make one.

[mcOrbital mcRing]:{{ site.baseurl }}/assets/2010-12-05-gravitum-previously-the-sun-gamegenerating-orbits/mc-orbital-mc-ring.png