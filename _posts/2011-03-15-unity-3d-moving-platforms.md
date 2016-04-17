---
layout: post
title: Unity 3D – Moving Platforms
date: 2011-03-15 21:57:20
image: 2011-03-15-unity-3d-moving-platforms/animation.png
tags:
- game
- Spangles
- trigger
- Unity
---
That title may make me sound like the most square, nerdy individual you've probably come to expect if you've read this blog more than the once, but hey, I'll give myself a chance to redeem any shortfalls in my social life.

For the past what seems like forever, we've been working on a game called *Spangles Speed Sprint* which I'm sure you've heard something about, even if you haven't heard a lot in the past month. It's because we've been hard at work, and I thought now is a good time to shine a light on something basic – what to do on a moving platform.

[![Moving Platform][Moving Platform]][Moving Platform]

Here's a little side-fact for you – a lot of the functionality in *Spangles Speed Sprint* is just done through triggers. You pass through a certain trigger with the appropriate tag and something will happen. For example, when you jump on a trampoline, it's the trigger sitting just above it that forces the player up again, not the actual trampoline itself.

In the case of the moving platform, it's the platform (modelled in Cinema 4D) and a trigger both a child of an empty GameObject to keep it in a nice little package. It's the GameObject that moves, moving all the children with it.

Now detecting whether the player is actually on the platform is simple – whenever they enter the trigger, they're on the platform, and when they're not, they're not. Right?

{% highlight csharp %}
if(object.gameObject.tag == "movingPlatform"){
    Debug.Log("MOVING PLATFORM!");
    transform.parent = object.gameObject.transform.parent;
}
{% endhighlight %}

This is the code appearing in the <code>OnTriggerEnter</code> function. To move the player along with the platform and so they don't fall through it or slide off it, all that's needed to be done is add it as a parent. It's not the best practice – especially if you're doing a more complex game – but it's simple enough for ours and it works. Sweet.

But we've got a problem. When the player jumps off the platform, they'll still be a child of the GameObject. That's not cool. They'll be sliding all over the shop.

Now I tried all manner of solutions and the one that we arrived at that gave us a consistent result is a few lines in the <code>Update()</code> function.

{% highlight csharp %}
if (!controller.isGrounded) {
	transform.parent = null;
	transform.rotation.z = 0;
}
{% endhighlight %}

Basically, if the player is on the ground, it's not a child of anything, regardless of whether they were just on a moving platform or not. The only time it has a parent is when it's on a moving platform. Short and sweet, if not a little hacky.

And that's it, really for the actual mechanism of the thing, there's just one more thing about the movement.

[![Animation][Animation]][Animation]

Of course, there's many ways you can make something move, but the most simple way for our game was animation. It's a highly under-rated tool in terms of game development, and the editor within Unity doesn't get the respect it deserves. So if you're looking for anything that has basic movement, then certainly give it a looksie.

Just click the object you want to animate, then head to Window –> Animation (Or Ctrl/Cmd + 6). Click the red record button in the top left of the window and you're off. If you've ever used Flash or anything like that, it's not a million miles away. It's all about keyframes. You can trigger code using it too, so it's double fab.

That's it! The game will be playable soon (I'm sure I'll let you know when) but for now, it's all about keeping you up to date with how stuff works!

[Moving Platform]:{{ site.baseurl }}/assets/2011-03-15-unity-3d-moving-platforms/moving-platform.png
[Animation]:{{ site.baseurl }}/assets/2011-03-15-unity-3d-moving-platforms/animation.png