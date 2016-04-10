---
layout: post
title: Basic character selection in Unity 3D
date: 2011-02-02 21:02:37
tags:
- development
- fun
- game
- Unity
---
<p>As a major part of our rebrand of Spangles in this university project, we need to do a game. Our idea, as you <a href="http://mattcrouch.net/blog/2011/01/what-makes-doritos-crash-course-so-playable/">may have seen</a>, was a Sonic-like game with Total Wipeout tendencies. </p>
<p>But of course, every game needs to start somewhere, so we're in the process of making some prototypes in Unity 3D. They aren't the most riveting of elements, but it's only the building blocks. </p>
<p>We've taken a few of our steps alongside some elements talked about in <a href="http://unity3d.com/support/resources/tutorials/2d-gameplay-tutorial">Unity's 2D Gameplay Tutorial</a>, with such things like the death area and prefab panels, but we'll come to those in a later post.</p>
<p><img style="margin: ; display: block; float: none" title="Character Selection" alt="Character Selection" src="{{ site.baseurl }}/assets/Character-Selection.png" width="301" height="142" /></p>
<p>The game starts with the character selection screen. Our game allows you to play as five fruits competing to be the new flavour in a packet of Spangles. We've got a GameObject which contains five numbered cubes (placeholders for when we get the characters made). The cubes are numbered 1-5, but internally referenced as 0-4. Bit of an oversight on my part, I apologise.</p>
<p>The GameObject has a rotation animation on it, which is designed to stop as each cube hits the foreground. Basically, it rotates 72 degrees and stops in whatever direction you push on your keyboard.</p>
<pre style="border-bottom: #cecece 1px solid; border-left: #cecece 1px solid; padding-bottom: 5px; background-color: #fbfbfb; min-height: 40px; padding-left: 5px; width: 600px; padding-right: 5px; overflow: auto; border-top: #cecece 1px solid; border-right: #cecece 1px solid; padding-top: 5px"><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">static</span> <span style="color: #0000ff">var</span> currentCharacter : <span style="color: #0000ff">int</span> = 4;</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">function</span> Start() {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  animation[&quot;<span style="color: #8b0000">spin around</span>&quot;].speed = 0;</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">}</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">function</span> Update() {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">if</span> (Input.GetKeyDown(&quot;<span style="color: #8b0000">left</span>&quot;)) {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    Debug.Log(&quot;<span style="color: #8b0000">LEFT</span>&quot;);</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    startTurning(&quot;<span style="color: #8b0000">left</span>&quot;);</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  } <span style="color: #0000ff">else</span> <span style="color: #0000ff">if</span> (Input.GetKeyDown(&quot;<span style="color: #8b0000">right</span>&quot;)) {</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    Debug.Log(&quot;<span style="color: #8b0000">RIGHT</span>&quot;);</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    startTurning(&quot;<span style="color: #8b0000">right</span>&quot;);</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  }</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  </pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">if</span>(Input.GetButtonDown(&quot;<span style="color: #8b0000">Jump</span>&quot;)) {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    startTheGame();</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  }</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">}</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">function</span> stopTurning(characterNo : <span style="color: #0000ff">int</span>) {</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">if</span>(characterNo != currentCharacter) {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  animation[&quot;<span style="color: #8b0000">spin around</span>&quot;].speed = 0;</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">if</span> (currentCharacter &lt; 4) {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    currentCharacter++; </pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  } <span style="color: #0000ff">else</span> {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    currentCharacter = 0;</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  }</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  currentCharacter = characterNo;</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  Debug.Log(&quot;<span style="color: #8b0000">CurrentCharacter: </span>&quot; + currentCharacter);</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  }</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">}</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">function</span> startTurning(theDirection:<span style="color: #0000ff">String</span>) {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #008000">//animation.Play(&quot;spin around&quot;);</span></pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">if</span> (theDirection == &quot;<span style="color: #8b0000">left</span>&quot;) {</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    animation[&quot;<span style="color: #8b0000">spin around</span>&quot;].speed = -1;</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  } <span style="color: #0000ff">else</span> <span style="color: #0000ff">if</span> (theDirection == &quot;<span style="color: #8b0000">right</span>&quot;) { </pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    animation[&quot;<span style="color: #8b0000">spin around</span>&quot;].speed = 1;</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  }</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">}</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">function</span> startTheGame() {</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  Application.LoadLevel(&quot;<span style="color: #8b0000">test</span>&quot;);</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">}</pre>
<p>Lots of friendly code, there. But I'll explain it somewhat.</p>
<p>We've got a variable called <font face="Lucida Console">currentCharacter</font> which stores the number of the Spangle chosen. It defaults to 4 because of where the animation starts.</p>
<p><img style="margin: ; display: block; float: none" title="animation window" alt="animation window" src="{{ site.baseurl }}/assets/animation-window.png" width="589" height="258" /></p>
<p>As said before, the spinning is done through the Animation window. It cycles through 360 degrees in about three seconds, although those measurements aren't to be relied upon. Every 72 degrees (as in, every point the a Spangle is in the foreground) a function is triggered. This function – <font face="Lucida Console">stopTurning</font> – does exactly that and stops the animation if need be. </p>
<p>Functions run by the left and right arrow keys move the character wheel left and right.</p>
<p>Both of the above functions – <font face="Lucida Console">stopTurning</font> and <font face="Lucida Console">startTurning</font> – contain a line of code that relates to the animations speed. <font face="Lucida Console">animation[&quot;NAME&quot;].speed</font> is used to access the speed the animation 'NAME' plays. A value of 1 is normal, straight speed (in this case, spinning to the right). A value of 0 is, therefore, paused. –1 is normal speed, but played backwards (in this case, spinning to the left).</p>
<p>Finally, the function startTheGame() starts the game when the user has made a choice, which is denoted by pressing the spacebar. This then loads the next scene, which contains our game. Our currentCharacter variable is a static, global variable, so we can grab it when needed. Regardless of when the user presses the spacebar, we still have a value to send. </p>
<p>And that's it, really. That's a simple, old-school character selection for you. Of course, this is bare bones work here. Nothing exciting happens. We'll continually develop it when we find more things to add to it, so don't take this for gospel, but feel free to pick bits and pieces for your own work. :)</p>
