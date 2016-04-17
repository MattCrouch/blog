---
layout: post
title: Gravitum - Scoring Points
date: 2010-12-05 01:57:29
image: 2010-12-05-gravitum-scoring-points/coin-map-and-enemy-map.png
tags:
- AS3
- development
- Flash
- game
---
Next on the "Oh, blimey, how does that work?" is the point scoring system currently going on within Gravitum. By the time you're reading this, it may have changed entirely, but this is how it's currently implemented. I dare say there's a more recent one than this if it has changed, so if there isn't, it hasn't. Excellent.

Before I get to the scoring points bit, I best mention a bit about how each level is made. Whenever the previous level is completed and the user clicks the button to the next game, a function is ran which takes the level number they're about to play and puts it through a load of mathematical functions to generate the number of 'coins' (the green electrons and 'enemies' (the red electrons), amongst other things, before it starts to draw out the new level.

[![coinMap and enemyMap][coinMap and enemyMap]][coinMap and enemyMap]

With this information, it will then run two other functions – <code>placeCoins</code> and <code>placeEnemies</code>. These both practically do the same thing, so I'll only go into <code>placeCoins</code>. You can use your imagination to do the other. Ooh, creativity!

{% highlight actionscript %}
public function placeCoins():void {
	addChildAt(coinMap,getChildIndex(mcBG)+1);
	var coin:MovieClip;
	for (var i:int=0; i < noOfCoins; i++) {
		coin = new mcCoin();
		coin.name="mcCoin"+i;
		coinMap.addChild(coin);
		var tempX:int = (Math.random() * 450) + 75;
		var tempY:int = (Math.random() * 450) + 75;
		while ((tempX > 250 && tempX < 350) || (tempY > 250 && tempY < 350)) {
			tempX = (Math.random() * 500) + 50;
			tempY = (Math.random() * 500) + 50;
		}
		coin.x=tempX;
		coin.y=tempY;
		coinArray.push(coin);
	}
}
{% endhighlight %}

The code places a currently blank movieclip <code>coinMap</code> onto the stage, which holds all the coins for the level.This is to aid the removal of them at the end of the level. The new coin movieclip is instantiated, given a unique name given it's position in the for loop, then positions it randomly.

Here's where it gets somewhat interesting. We can't have coins appearing outside the field of play (which is a radius of 650px from the centre of the stage) and, at the same time, we can't have them appearing right in the middle of the stage where the orbits can't reach them. That's no use to anyone. So we generate a random X and Y position for each coin so it's somewhere between 75px and 525px, which is inside the play area. It then does a check to see if it's inside the middle portion of the stage and, if it is, it will reposition it until it isn't. Then it sets the X and Y for that coin and moves on. Sorted.

That's all well and good, but how do you actually score points? That's where hit tests come in, and when there's lots of coins, enemies and orbits to sort out and no predetermined amount of them in the game, it gets confusing.

We use arrays to store the amount of coins, enemies and orbits there are in the current level. Every time one is generated, it will be pushed to an array. It essentially contains a list of what's on the stage right now that needs to have hit tests run against it.

{% highlight actionscript %}
public function hitTester(event:Event):void {
	if (coinsCollected>=noOfCoins) {
		nextLevel();
	}
	
	for (var i:int=0; i < orbitsArray.length; i++) {
		for (var j:int=0; j < coinArray.length; j++) {
			if (orbitsArray[i].mcOrbitalOrbit.hitTestObject(coinArray[j])) {
				coinArray[j].x=300;
				coinArray[j].y=300;
				levelPoints++;
				coinsCollected++;
				coinArray[j].visible=false;
				mcGUIText.txtLevelPoints.text=String(levelPoints);
			}
		}

		for (var k:int=0; k < enemyArray.length; k++) {
			if (orbitsArray[i].mcOrbitalOrbit.hitTestObject(enemyArray[k])) {
				enemyArray[k].x=300;
				enemyArray[k].y=300;
				levelPoints--;
				loseALife();
				trace("LOST A LIFE!");
				enemyArray[k].visible=false;
				mcGUIText.txtLevelPoints.text=String(levelPoints);
			}
		}
	}
}
{% endhighlight %}

This function runs every frame there's an orbit on the stage. First it checks that you haven't already completed the level and got all the coins you can (if you do, then why bother? :P), but if you haven't, it'll enter into this for loop fest. It'll check over the orbits currently on stage by first checking to see if it's currently hitting any coins, then if it's hitting any enemies. It will cycle through any possibility on the stage at that moment every frame, which is a surprisingly efficient function. It doesn't slow down the game at all thanks to the way ActionScript deals with For loops.

Whenever it detects a hit with a coin and the orbital (the red dot attached to the orbit), it moves that coin to the centre where it can't be collected any more (I had problems getting it to be removed completely), gets turned invisible, adds a point to the score and to a variable that counts the coins collected (for the first part of the function), then finally updates the screen to show that new point.

Enemies are the same, but opposite. It will take a point off, and the player loses a life also (lost three lives and the atom becomes too unstable and explodes).

And that's how points are calculated. It's nothing exciting, when you look at it, but I hope that's helped someone stuck with something similar – such as hit tests with multiple objects. That's a fun thing to do…

[coinMap and enemyMap]:{{ site.baseurl }}/assets/2010-12-05-gravitum-scoring-points/coin-map-and-enemy-map.png