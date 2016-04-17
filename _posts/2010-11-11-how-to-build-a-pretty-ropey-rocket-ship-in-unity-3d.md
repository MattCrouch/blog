---
layout: post
title: How to build a (pretty ropey) rocket ship in Unity 3D
date: 2010-11-11 15:22:59
image: 2010-11-11-how-to-build-a-pretty-ropey-rocket-ship-in-unity-3d/rocket-diagram.png
tags:
- particle
- rigidbody
- skinning
- spaceship
- Unity
---
**As per usual, this is a development blog. It's supposed to be filled with noob-like ways of which to achieve things. Feel free to comment on better ways to do what I've done. xthxbai**

During the making of *Spaced* one thing was constantly worrying me – how on Earth (pun intended) am I supposed to make a spaceship in this program without learning some complex 3D modelling program? I was looking all over for free premade ones I could use but I settled on just joining a few things together as one to make something that looks vaguely like a spaceship.

[![Rocket][Rocket]][Rocket]

The ship is essentially a bunch of primitive shapes all parent-and-child-ed up. It looks like this in my hierarchy:

[![Rocket Diagram][Rocket Diagram]][Rocket Diagram]

It's a bit of a messy diagram, but the message gets across. The parent object is an empty gameObject I've called 'shipHolder'. It's on this the 'moveShip' script lives which – you guessed it – makes the ship move. Because it's the parent, everything else will move with it, including the camera.

The rest of them are just resized capsules made to the vague shape of a rocket ship. The 'ship' piece – the actual body of the ship – is the only part with a collider and rigidbody component on it. It's with this the collision detection with the 'coins' is detected, but that code lives on the coins themselves, not the ship.

The particle systems are just normal, bog standard particle systems with a few settings changed on them. I've made it so the particles aren't very big but they have a fair amount of energy so it looks like it's giving out some sort of thrust. It's minimum and maximum emission settings are both set to 50 so we get a steady stream of them flying out because, well, I would want my boosters to do that if I were in a spaceship, after all. The light is there to brighten it up so it looks like it's bright light it's firing out rather than just a few blobs of light colour.

## The 'moveShip' code

That's it for it's construction. Now to see how it moves.

{% highlight csharp %}
var speed : float = 100;
var isPlaying : boolean = false;

function Update () {
	if (isPlaying) {
		var updown : float = Input.GetAxis(“Vertical”);
		var leftright : float = Input.GetAxis(“Horizontal”);

		//ACTUAL SHIP ROTATION
		//LEFT-RIGHT
		transform.Rotate(Vector3(0,1,0) * leftright);
		//UP-DOWN
		//This for full 360 movement
		//transform.Rotate(Vector3(0,0,updown));
		//This control for easier movement
		transform.Translate(Vector3(0,updown,0));

		//TILT IN AIR EFFECT
		//gameObject.Find(“ship”).transform.Rotate(Vector3(0,1,0) * leftright);
		//gameObject.Find(“ship”).transform.Rotate(Vector3(1,0,0) * leftright);

		//FORWARDS MOVEMENT
		transform.Translate(Vector3(speed,0,0) * Time.deltaTime);
	}
}
{% endhighlight %}

It's speed is set as a variable as it means it can be made to go slower or faster easily from a build point of view, and it also allows the game to change it if there's a need for that (for example a power up). The other variable 'isPlaying' is what it sounds like. It's set when the game is actually being played i.e. not on the splash screen or the player ran out of time. When it's false, it will just stop the game in it's tracks.

Whatever's in the <code>Update()</code> function will run every keyframe. In this case, if the game is being played, it will grab whatever directional button's being pushed and move it in that direction. Up and down movements get translated because originally the game was going to be a straight forward, on-rails kind of thing. (This is how the game controls looked just before the revision) The left and right arrow keys will rotate the whole body around, thus turning the ship.

The tilt in air effect you see there is left over code from what I was trying to do before, which was to make the ship glide in and out of its turns but this just disrupted the path of the ship, making it unplayable. If anyone wants to build that bit for me, feel free.

The forwards movement section is exactly that, it will move it forward by whatever the speed is set to every time it updates.

## 'stayNearCoins'

The only other code on the ship is the 'stayNearCoins' script which, believe it or not, makes sure you stay near the coins.

{% highlight csharp %}
var justTeleported : boolean = false;
function Update () {
	if (transform.position.x > 1000 || transform.position.x < -1000 || transform.position.z > 1000 || transform.position.z < -1000) {
		tooFarWarning();
	}

	if (transform.position.y > 700) {
		tooHighWarning();
	}

	if (transform.position.y < -600) {
		tooLowWarning();
	}

	if (transform.position.x > 1250 || transform.position.x < -1250 || transform.position.z > 1250 || transform.position.z < -1250 || transform.position.y > 950 || transform.position.y < -850) {
		teleportToOrigin();
	}

	if (transform.position.x <= 1000 && transform.position.x >= -1000 && transform.position.z <= 1000 && transform.position.z >= -1000 && transform.position.y <= 700 && transform.position.y >= -600) {
		if (!justTeleported) {
			gameObject.Find(“guiTextAlert”).GetComponent(GUIText).text = “”;
			gameObject.Find(“guiTextAlert”).GetComponent(GUIText).enabled = false;
		}
	}
}

function tooFarWarning() {
	Debug.Log(“YOU’RE ABOUT TO DIE OH NOES!”);
	gameObject.Find(“guiTextAlert”).GetComponent(GUIText).enabled = true;
	gameObject.Find(“guiTextAlert”).GetComponent(GUIText).text = “TURN AROUND! \n Leaving area”;
}

function teleportToOrigin() {
	Debug.Log(“TELEPORT TO ORIGIN!”);
	justTeleported = true;
	transform.position = Vector3(0, 0, 0);
	transform.rotation = Quaternion.identity;
	gameObject.Find(“guiTextAlert”).GetComponent(GUIText).enabled = true;
	gameObject.Find(“guiTextAlert”).GetComponent(GUIText).text = “TELEPORTED \n For your own safety”;
	yield WaitForSeconds(2);
	gameObject.Find(“guiTextAlert”).GetComponent(GUIText).enabled = false;
	justTeleported = false;
}

function tooHighWarning() {
	Debug.Log(“YOU’RE GOING TOO HIGH!”);
	gameObject.Find(“guiTextAlert”).GetComponent(GUIText).enabled = true;
	gameObject.Find(“guiTextAlert”).GetComponent(GUIText).text = “PULL DOWN! \n Too high altitude”;
}

function tooLowWarning() {
	Debug.Log(“YOU’RE GOING TOO LOW!”);
	gameObject.Find(“guiTextAlert”).GetComponent(GUIText).enabled = true;
	gameObject.Find(“guiTextAlert”).GetComponent(GUIText).text = “PULL UP! \n You’re about to crash”;
}
{% endhighlight %}

It might look a bit complex, but it's pretty straight forward.

There's a GUIObject on screen at all times, called <code>guiTextAlert</code>. When it's not in use, it's disabled, but when it's needed it's enabled and it gets it's value changed accordingly.

The ship starts off at the world origin. If it goes too far away from the play area, it will send out an appropriate warning to <code>guiTextAlert</code> to allow the player to take evasive action, but if they don't it will teleport them back to the origin so they stay in game.

The function names are pretty descriptive as to what they do, but if not what it prints to the console should give away what it does. It picks the right one for the error that's happening, and will reset it when they're back in relatively safe grounds with the if statement just after the extreme checking code at the start.

And that's it. That's how the spaceship works in Unity. If it gets updated, so will you, so keep your ears pinned back!

[Rocket]:{{ site.baseurl }}/assets/2010-11-11-how-to-build-a-pretty-ropey-rocket-ship-in-unity-3d/rocket.png
[Rocket Diagram]:{{ site.baseurl }}/assets/2010-11-11-how-to-build-a-pretty-ropey-rocket-ship-in-unity-3d/rocket-diagram.png