---
layout: 	post
title:  	"Firefox and SVG Fill with CSS"
date:   	2016-02-06 13:00:00
tags:		[Firefox, SVG, CSS, Fill]
image:		2016-02-06-firefox-svg-fill/svg-starburst-normal.gif
---

As you may have noticed, my site's gone through a bit of a redesign as of late. My portfolio site in particular shows a couple of little ideas I had.

One of those ideas was this pretty little starburst effect on the header with a few abstract shapes coming out of it. 

![Normal SVG Starburst effect]({{ site.baseurl }}/assets/2016-02-06-firefox-svg-fill/svg-starburst-normal.gif "Normal SVG Starburst effect")

There's a fair bit to it, but it boils down to an SVG sprite sheet and referencing those as <code>svg</code> elements with <code>use</code> elements. A bit more versatile than icon fonts, and without the overheads of multiple requests for images. But I digress.

The Issue
---------
This all worked nice enough in the newer browsers until it got to Firefox.

![SVG Starburst effect in Firefox]({{ site.baseurl }}/assets/2016-02-06-firefox-svg-fill/svg-starburst-firefox.gif "SVG Starburst effect in Firefox")

The colours weren't taking hold. Which is a bummer.

The way the colours are determined are fairly simplistic. There's 8 random icons and their colour defaults to orange, with every third one was light blue, and the one after that was navy:

{% highlight css %}
//"Randomise" the colours, based on the order they come out
fill: $color-1;

&:nth-of-type(3n) {
	fill: $color-2;
}

&:nth-of-type(3n+1) {
	fill: $color-3;
}
{% endhighlight %}

It applies fine in the other browsers, just not Firefox. The inspector says they've been applied but they're all still orange.

![Firefox CSS Inspector]({{ site.baseurl }}/assets/2016-02-06-firefox-svg-fill/firefox-dev-tools.png "Firefox CSS Inspector")

Frustrating to say the least. But thankfully the solution was a simple one - even if it did require a romp through the Shadow DOM.

The Solution
---------
The SVG sprite is one big SVG with lots of <code>symbol</code> tags denoting each icon. When Firefox encounters this, it sticks another <code>svg</code> tag in to display the contents of our <code>symbol</code>.

It's supposed to treat it as such, but not quite so literally. There's nothing in the inspector that shows it's doing that. It's doing it all internally. There's no problem with doing that, but it just means our selector isn't picking up the shadow version of our icon. 

A quick addition to our CSS will cover this situation and make sure it gets picked up by Firefox:

{% highlight css %}
//"Randomise" the colours, based on the order they come out
fill: $color-1;

&:nth-of-type(3n), &:nth-of-type(3n) use>svg {
	fill: $color-2;
}

&:nth-of-type(3n+1), &:nth-of-type(3n+1) use>svg {
	fill: $color-3;
}
{% endhighlight %}

The <code>use>svg</code> will pick up the internal <code>svg</code> tag and fill the contents of that directly. Hey presto! Proper colours again!

As always, [Stack Overflow][Stack Overflow] to the rescue! That issue isn't directly related, but the solution remains the same. 

[Stack Overflow]:http://stackoverflow.com/questions/27866893/svg-fill-not-being-applied-in-firefox/27872310#27872310