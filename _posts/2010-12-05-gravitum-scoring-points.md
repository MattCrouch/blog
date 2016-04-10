---
layout: post
title: Gravitum - Scoring Points
date: 2010-12-05 01:57:29
tags:
- AS3
- development
- Flash
- game
---
<p>Next on the "Oh, blimey, how does that work?" is the point scoring system currently going on within Gravitum. By the time you're reading this, it may have changed entirely, but this is how it's currently implemented. I dare say there's a more recent one than this if it has changed, so if there isn't, it hasn't. Excellent.</p>
<p>Before I get to the scoring points bit, I best mention a bit about how each level is made. Whenever the previous level is completed and the user clicks the button to the next game, a function is ran which takes the level number they're about to play and puts it through a load of mathematical functions to generate the number of 'coins' (the green electrons and 'enemies' (the red electrons), amongst other things, before it starts to draw out the new level.</p>
<p style="text-align: center;"><a href="http://www.mattcrouch.net/blog/images/Gravitum---Scoring-Points_13D7/coinMap-and-enemyMap.png"><img class="aligncenter" title="coinMap and enemyMap" src="{{ site.baseurl }}/assets/coinMap-and-enemyMap_thumb.png" border="0" alt="coinMap and enemyMap" width="244" height="244" /></a></p>
<p>With this information, it will then run two other functions – <em>placeCoins </em>and <em>placeEnemies</em>. These both practically do the same thing, so I'll only go into <em>placeCoins</em>. You can use your imagination to do the other. Ooh, creativity!</p>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">		<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">function</span> placeCoins():<span style="color: #0000ff;">void</span> {
</pre>
<pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">			addChildAt(coinMap,getChildIndex(mcBG)+1);
</pre>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">			<span style="color: #0000ff;">var</span> coin:MovieClip;
</pre>
<pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">			<span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> i:<span style="color: #0000ff;">int</span>=0; i &lt; noOfCoins; i++) {
</pre>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				coin = <span style="color: #0000ff;">new</span> mcCoin();
</pre>
<pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				coin.<span style="color: #0000ff;">name</span>="<span style="color: #8b0000;">mcCoin</span>"+i;
</pre>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				coinMap.addChild(coin);
</pre>
<pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				<span style="color: #0000ff;">var</span> tempX:<span style="color: #0000ff;">int</span> = (<span style="color: #0000ff;">Math</span>.random() * 450) + 75;
</pre>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				<span style="color: #0000ff;">var</span> tempY:<span style="color: #0000ff;">int</span> = (<span style="color: #0000ff;">Math</span>.random() * 450) + 75;
</pre>
<pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				<span style="color: #0000ff;">while</span> ((tempX &gt; 250 &amp;&amp; tempX &lt; 350) || (tempY &gt; 250 &amp;&amp; tempY &lt; 350)) {
</pre>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">					tempX = (<span style="color: #0000ff;">Math</span>.random() * 500) + 50;
</pre>
<pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">					tempY = (<span style="color: #0000ff;">Math</span>.random() * 500) + 50;
</pre>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				}
</pre>
<pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				coin.x=tempX;
</pre>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				coin.y=tempY;
</pre>
<pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				coinArray.push(coin);
</pre>
<pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">			}
</pre>
<pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">		}</pre>
<p>The code places a currently blank movieclip <em>coinMap</em> onto the stage, which holds all the coins for the level.This is to aid the removal of them at the end of the level. The new coin movieclip is instantiated, given a unique name given it's position in the for loop, then positions it randomly.</p>
<p>Here's where it gets somewhat interesting. We can't have coins appearing outside the field of play (which is a radius of 650px from the centre of the stage) and, at the same time, we can't have them appearing right in the middle of the stage where the orbits can't reach them. That's no use to anyone. So we generate a random X and Y position for each coin so it's somewhere between 75px and 525px, which is inside the play area. It then does a check to see if it's inside the middle portion of the stage and, if it is, it will reposition it until it isn't. Then it sets the X and Y for that coin and moves on. Sorted.</p>
<p>That's all well and good, but how do you actually score points? That's where hit tests come in, and when there's lots of coins, enemies and orbits to sort out and no predetermined amount of them in the game, it gets confusing.</p>
<p>We use arrays to store the amount of coins, enemies and orbits there are in the current level. Every time one is generated, it will be pushed to an array. It essentially contains a list of what's on the stage right now that needs to have hit tests run against it.</p>
<pre style="border: 1px solid #cecece; padding: 5px; background-color: #fbfbfb; min-height: 40px; width: 663px; height: 391px; overflow: auto;">
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;"><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">function</span> hitTester(event:Event):<span style="color: #0000ff;">void</span> {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">			<span style="color: #0000ff;">if</span> (coinsCollected&gt;=noOfCoins) {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				nextLevel();
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">			}
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">			<span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> i:<span style="color: #0000ff;">int</span>=0; i &lt; orbitsArray.<span style="color: #0000ff;">length</span>; i++) {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				<span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> j:<span style="color: #0000ff;">int</span>=0; j &lt; coinArray.<span style="color: #0000ff;">length</span>; j++) {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">					<span style="color: #0000ff;">if</span> (orbitsArray[i].mcOrbitalOrbit.hitTestObject(coinArray[j])) {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						coinArray[j].x=300;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						coinArray[j].y=300;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						levelPoints++;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						coinsCollected++;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						coinArray[j].visible=<span style="color: #0000ff;">false</span>;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						mcGUIText.txtLevelPoints.text=<span style="color: #0000ff;">String</span>(levelPoints);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">					}
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				}
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				<span style="color: #0000ff;">for</span> (<span style="color: #0000ff;">var</span> k:<span style="color: #0000ff;">int</span>=0; k &lt; enemyArray.<span style="color: #0000ff;">length</span>; k++) {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">					<span style="color: #0000ff;">if</span> (orbitsArray[i].mcOrbitalOrbit.hitTestObject(enemyArray[k])) {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						enemyArray[k].x=300;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						enemyArray[k].y=300;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						levelPoints--;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						loseALife();
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						trace("<span style="color: #8b0000;">LOST A LIFE!</span>");
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						enemyArray[k].visible=<span style="color: #0000ff;">false</span>;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">						mcGUIText.txtLevelPoints.text=<span style="color: #0000ff;">String</span>(levelPoints);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">					}
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">				}
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,'Courier New',courier,monospace; font-size: 12px;">			}
</pre>
<p>This function runs every frame there's an orbit on the stage. First it checks that you haven't already completed the level and got all the coins you can (if you do, then why bother? :P), but if you haven't, it'll enter into this for loop fest. It'll check over the orbits currently on stage by first checking to see if it's currently hitting any coins, then if it's hitting any enemies. It will cycle through any possibility on the stage at that moment every frame, which is a surprisingly efficient function. It doesn't slow down the game at all thanks to the way ActionScript deals with For loops.</p>
<p>Whenever it detects a hit with a coin and the orbital (the red dot attached to the orbit), it moves that coin to the centre where it can't be collected any more (I had problems getting it to be removed completely), gets turned invisible, adds a point to the score and to a variable that counts the coins collected (for the first part of the function), then finally updates the screen to show that new point.</p>
<p>Enemies are the same, but opposite. It will take a point off, and the player loses a life also (lost three lives and the atom becomes too unstable and explodes).</p>
<p>And that's how points are calculated. It's nothing exciting, when you look at it, but I hope that's helped someone stuck with something similar – such as hit tests with multiple objects. That's a fun thing to do…</p>
