---
layout: post
title: Animating a SVG with CSS
date: 2014-07-14 09:00:30
image: 2014-07-14-photoshop-to-illustrator-to-svg/cave-animated.gif
tags:
- animation
- cinolla
- css
- CSS3
- illustrator
- photoshop
---

In a [previous post][Photoshop to Illustrator to SVG], I talked about how I was making a little character in SVG for Cinolla's 404 page. The page needed a bit more of a friendly face to it.

But once you've got the SVG, how do you put that to use on a web page?

## Embedding an SVG in a page

You know how to add an image to a page, right? It's pretty much the same, if you just have your SVG to dump in there.

{% highlight html %}
	<img src="my-fancy-image.svg" alt="AWESOME SVG"/>
{% endhighlight %}

...and Bob's your metaphorical uncle. But that doesn't help browsers that don't support SVG. To add a fallback, it's best to add it as an object.

{% highlight html %}
	<object type="image/svg+xml" data="my-fancy-image.svg">
		<img src="my-fancy-image.png" alt="AWESOME SVG"/>
	</object>
{% endhighlight %}


Using this method, you're able to display code to people with browsers that don't support .svg files. Generally that's going to be a static version of that image as a PNG or something. Or just a "Sorry, lol. Can't show you this.' message.

Then you can just style it as you would a standard image. It should scale like an image, too. Although of course as an SVG, it's going to scale nicely with it's vectors rather than the blocky horribleness of old.

## Altering the image with CSS

If you've got this SVG, but you want to change it somehow, that's fine. With standard image icons, for example. A change of colour on hover is going to require either another file, or at least including another coloured version of that file on your system. SVGs can just be styled like a web page, which is certainly handy for icons, but great if you need to show something slightly different if the image gets smaller, for example.

There is one slight caveat, however. You can't just style the elements in the same file as your other CSS unless the contents of the SVG is dumped straight on the page, rather than referenced in an external file and that's not good for reusability.

The other option to use with the way we're embedding the image above is to include a separate CSS file with the SVG and style it that way. The embed code goes right at the top of the SVG, as you would expect.

{% highlight xml %}
	<?xml version="1.0" encoding="utf-8"?>
	<?xml-stylesheet type="text/css" href="/css/svg-anim.css"?>

	<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 762 811" xml:space="preserve" id="cave-404">
{% endhighlight %}

This way you're keeping everything SVG separate, which I guess is a good thing, right? This file is going to act the same way as any other CSS file, with most of the properties to boot. They're not <em>all</em> available to SVG, but they are mostly. The ones you can used are [listed on the W3 site][SVG Styling Properties] should you get stuck.
## Animating an SVG

You guessed it, you can animate SVGs pretty much the same as DOM elements generally. For a intrinsic guide to CSS3 Animation, check out the [document over at MDN][Using CSS Animations] for a crash course in that. But animating an SVG is the same process.

[![Animated Cave Man][Animated Cave Man]][Animated Cave Man]

I gave the <code>svg</code> element an ID of cave-404 so I can keep all the SVG animations together in one file, but target specific SVGs individually where necessary.

I gave the cave dude a fancy head jive, shifty eyes and a slightly blink every so often. It's only a little movement, but it's a good start.

{% highlight css %}
	#cave-404 #Left_Eye, #cave-404 #Right_Eye {
		-webkit-animation: blink 5s infinite cubic-bezier(0,1,0,1), eye_shift 6s infinite;
		animation: blink 5s infinite cubic-bezier(0,1,0,1), eye_shift 6s infinite;
	}

	#cave-404 #Head_1_ {
		-webkit-animation: head_shift 6s infinite;
		animation: head_shift 6s infinite;
	}

	@-webkit-keyframes blink {
		0% {
			opacity: 0.01;
		}
		25% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes blink {
		0% {
			opacity: 0.01;
		}
		25% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
{% endhighlight %}

That's just a snippet of the code. Thanks to vendor prefixes the entire code's a bit beefy to include here, but you get the jist. It's just a case of trial and error with your animations as per usual, but at least this way there's no compiling needed. Not like the [Flash days of yore][Flash Category].

[Animated Cave Man]:{{ site.baseurl }}/assets/2014-07-14-photoshop-to-illustrator-to-svg/cave-animated.gif

[SVG Styling Properties]:http://www.w3.org/TR/SVG/styling.html
[Using CSS Animations]:https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations
[Photoshop to Illustrator to SVG]:{{ site.baseurl }}/2014/07/14/photoshop-to-illustrator-to-svg.html
[Flash Category]:http://mattcrouch.net/blog/category/flash/