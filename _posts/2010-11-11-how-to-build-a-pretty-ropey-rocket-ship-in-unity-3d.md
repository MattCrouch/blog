---
layout: post
title: How to build a (pretty ropey) rocket ship in Unity 3D
date: 2010-11-11 15:22:59
tags:
- particle
- rigidbody
- skinning
- spaceship
- Unity
---
<p><em>As per usual, this is a development blog. It's supposed to be filled with noob-like ways of which to achieve things. Feel free to comment on better ways to do what I've done. xthxbai</em></p>
<p>During the making of <em>Spaced </em>one thing was constantly worrying me – how on Earth (pun intended) am I supposed to make a spaceship in this program without learning some complex 3D modelling program? I was looking all over for free premade ones I could use but I settled on just joining a few things together as one to make something that looks vaguely like a spaceship.</p>
<p><a href="http://www.mattcrouch.net/blog/images/ad3af00e65b6_BF2E/Rocket.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border-width: 0px;" title="Rocket" src="{{ site.baseurl }}/assets/Rocket_thumb.png" border="0" alt="Rocket" width="304" height="113" /></a></p>
<p>The ship is essentially a bunch of primitive shapes all parent-and-child-ed up. It looks like this in my hierarchy:</p>
<p><a href="http://www.mattcrouch.net/blog/images/ad3af00e65b6_BF2E/diagram.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border-width: 0px;" title="diagram" src="{{ site.baseurl }}/assets/diagram_thumb.png" border="0" alt="diagram" width="417" height="247" /></a></p>
<p>It's a bit of a messy diagram, but the message gets across. The parent object is an empty gameObject I've called 'shipHolder'. It's on this the 'moveShip' script lives which – you guessed it – makes the ship move. Because it's the parent, everything else will move with it, including the camera.</p>
<p>The rest of them are just resized capsules made to the vague shape of a rocket ship. The 'ship' piece – the actual body of the ship – is the only part with a collider and rigidbody component on it. It's with this the collision detection with the 'coins' is detected, but that code lives on the coins themselves, not the ship.</p>
<p>The particle systems are just normal, bog standard particle systems with a few settings changed on them. I've made it so the particles aren't very big but they have a fair amount of energy so it looks like it's giving out some sort of thrust. It's minimum and maximum emission settings are both set to 50 so we get a steady stream of them flying out because, well, I would want my boosters to do that if I were in a spaceship, after all. The light is there to brighten it up so it looks like it's bright light it's firing out rather than just a few blobs of light colour.</p>
<h3>The 'moveShip' code</h3>
<p>That's it for it's construction. Now to see how it moves.</p>
<blockquote><p><span style="font-family: Lucida Console;">var speed : float = 100;<br />
var isPlaying : boolean = false;</span></p>
<p><span style="font-family: Lucida Console;">function Update () {</span></p>
<p><span style="font-family: Lucida Console;"> if (isPlaying) {</p>
<p>var updown : float = Input.GetAxis("Vertical");<br />
var leftright : float = Input.GetAxis("Horizontal");</p>
<p>//ACTUAL SHIP ROTATION<br />
//LEFT-RIGHT<br />
transform.Rotate(Vector3(0,1,0) * leftright);<br />
//UP-DOWN<br />
//This for full 360 movement<br />
//transform.Rotate(Vector3(0,0,updown));<br />
//This control for easier movement<br />
transform.Translate(Vector3(0,updown,0));</p>
<p>//TILT IN AIR EFFECT<br />
//gameObject.Find("ship").transform.Rotate(Vector3(0,1,0) * leftright);<br />
//gameObject.Find("ship").transform.Rotate(Vector3(1,0,0) * leftright);</p>
<p>//FORWARDS MOVEMENT<br />
transform.Translate(Vector3(speed,0,0) * Time.deltaTime);<br />
}</span></p>
<p><span style="font-family: Lucida Console;"><br />
}</span></p></blockquote>
<p>It's speed is set as a variable as it means it can be made to go slower or faster easily from a build point of view, and it also allows the game to change it if there's a need for that (for example a power up). The other variable 'isPlaying' is what it sounds like. It's set when the game is actually being played i.e. not on the splash screen or the player ran out of time. When it's false, it will just stop the game in it's tracks.</p>
<p>Whatever's in the <span style="font-family: Lucida Console;">Update()</span> function will run every keyframe. In this case, if the game is being played, it will grab whatever directional button's being pushed and move it in that direction. Up and down movements get translated because originally the game was going to be a straight forward, on-rails kind of thing. (This is how the game controls looked just before the revision you can <a href="http://www.mattcrouch.net/portfolio/work/spaced/">currently play</a>) The left and right arrow keys will rotate the whole body around, thus turning the ship.</p>
<p>The tilt in air effect you see there is left over code from what I was trying to do before, which was to make the ship glide in and out of its turns but this just disrupted the path of the ship, making it unplayable. If anyone wants to build that bit for me, feel free.</p>
<p>The forwards movement section is exactly that, it will move it forward by whatever the speed is set to every time it updates.</p>
<h3>'stayNearCoins'</h3>
<p>The only other code on the ship is the 'stayNearCoins' script which, believe it or not, makes sure you stay near the coins.</p>
<blockquote><p><span style="font-family: Lucida Console;">var justTeleported : boolean = false;<br />
function Update () {</p>
<p>if (transform.position.x &gt; 1000 || transform.position.x &lt; -1000 || transform.position.z &gt; 1000 || transform.position.z &lt; -1000) {<br />
tooFarWarning();<br />
}</p>
<p>if (transform.position.y &gt; 700) {<br />
tooHighWarning();<br />
}</p>
<p>if (transform.position.y &lt; -600) {<br />
tooLowWarning();<br />
}</p>
<p>if (transform.position.x &gt; 1250 || transform.position.x &lt; -1250 || transform.position.z &gt; 1250 || transform.position.z &lt; -1250 || transform.position.y &gt; 950 || transform.position.y &lt; -850) {<br />
teleportToOrigin();<br />
}</p>
<p>if (transform.position.x &lt;= 1000 &amp;&amp; transform.position.x &gt;= -1000 &amp;&amp; transform.position.z &lt;= 1000 &amp;&amp; transform.position.z &gt;= -1000 &amp;&amp; transform.position.y &lt;= 700 &amp;&amp; transform.position.y &gt;= -600) {<br />
if (!justTeleported) {<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).text = "";<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).enabled = false;<br />
}<br />
}<br />
}</span></p>
<p><span style="font-family: Lucida Console;">function tooFarWarning() {<br />
Debug.Log("YOU'RE ABOUT TO DIE OH NOES!");<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).enabled = true;<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).text = "TURN AROUND! \n Leaving area";<br />
}</span></p>
<p><span style="font-family: Lucida Console;">function teleportToOrigin() {<br />
Debug.Log("TELEPORT TO ORIGIN!");<br />
justTeleported = true;<br />
transform.position = Vector3(0, 0, 0);<br />
transform.rotation = Quaternion.identity;<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).enabled = true;<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).text = "TELEPORTED \n For your own safety";<br />
yield WaitForSeconds(2);<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).enabled = false;<br />
justTeleported = false;</span></p>
<p><span style="font-family: Lucida Console;">}</span></p>
<p><span style="font-family: Lucida Console;">function tooHighWarning() {<br />
Debug.Log("YOU'RE GOING TOO HIGH!");<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).enabled = true;<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).text = "PULL DOWN! \n Too high altitude";<br />
}</span></p>
<p><span style="font-family: Lucida Console;">function tooLowWarning() {<br />
Debug.Log("YOU'RE GOING TOO LOW!");<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).enabled = true;<br />
gameObject.Find("guiTextAlert").GetComponent(GUIText).text = "PULL UP! \n You're about to crash";<br />
}</span></p></blockquote>
<p>It might look a bit complex, but it's pretty straight forward.</p>
<p>There's a GUIObject on screen at all times, called <span style="font-family: Lucida Console;">guiTextAlert</span>. When it's not in use, it's disabled, but when it's needed it's enabled and it gets it's value changed accordingly.</p>
<p>The ship starts off at the world origin. If it goes too far away from the play area, it will send out an appropriate warning to <span style="font-family: Lucida Console;">guiTextAlert</span> to allow the player to take evasive action, but if they don't it will teleport them back to the origin so they stay in game.</p>
<p>The function names are pretty descriptive as to what they do, but if not what it prints to the console should give away what it does. It picks the right one for the error that's happening, and will reset it when they're back in relatively safe grounds with the if statement just after the extreme checking code at the start.</p>
<p>And that's it. That's how the spaceship works in Unity. If it gets updated, so will you, so keep your ears pinned back!</p>
