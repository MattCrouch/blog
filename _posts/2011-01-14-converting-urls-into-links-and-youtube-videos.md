---
layout: post
title: Converting URLs into links and YouTube videos
date: 2011-01-14 23:58:48
image: 2011-01-14-converting-urls-into-links-and-youtube-videos/1000words-YouTube-embed.png
tags:
- development
- PHP
- video
---

If you've played around with *1000words* at all recently, you'll notice a neat little trick happens when you post a text message containing a YouTube URL:

[![1000words YouTube Embed][1000words YouTube Embed]][1000Words YouTube Embed]

It creates an embedded player that plays in the post, links back to the video and can even connect through to their YouTube account if they're logged in. It uses an embed code currently in beta from YouTube itself (well, strictly speaking, it's an <code>iframe</code> but who's keeping score…). The code will substitute in a HTML5 player when it's needed and there's a HTML5 standard video format available to them, so it's great for using on a site that may be visited on mobile such as *1000words*.

## Grabbing the code

[![iframe embed code][iframe embed code]][iframe embed code]


Obviously, it's currently in beta, so you'll want to grab the most up to date code you can from YouTube themselves. Go on to any video, click 'Embed' and make sure the "Use iframe embed code" box is checked. It'll generate something not too different to this:

{% highlight html %}
	<iframe title="YouTube video player" class="youtube-player" type="text/html" width="480" height="390" src="http://www.youtube.com/embed/l-DcYZZQlJw" frameborder="0"></iframe>
{% endhighlight %}

It's not the best of code seeing as out of the box we've got frameborder which doesn't validate, but hey ho, worser things have happened. That's what CSS is for. But anyway.


You'll see YouTube have kindly given us an <code>src</code> attribute. That's a URL to what is essentially a [pre-made player][YouTube - Pre-made Player]. It's an iframe, so will just show up how it would in a browser, only smaller. Give it some height and width attributes and you're good to go.


Our job now is to take a link posted and grab the video ID – the bit after the "v=…" bit in a YouTube URL – and place it into the bit just after the '/embed/' in the <code>src</code> of the iframe code. How did I go about doing that?

## Grabbing the video ID

When the user posts a text comment on *1000words* it goes through a PHP script called 'comment-do.php'. Here it will do all the connection to the database, make sure everything's all filled out and if everything's hunky dory, it's posted to the database. 

Here's the code where it jiggles about with the code:

{% highlight php %}
	<?php
		//REPLACE YOUTUBE VIDEO WITH IFRAME HTML5 EMBED
		if (preg_match("#(http://www.youtube.com)?/(v/([-|~_0-9A-Za-z]+)|watch\?v\=([-|~_0-9A-Za-z]+)&?.*?)#i", $newContent)) {
			$vidurl = strstr($newContent,"?v="); //GRAB VIDEO ID
			$vidarray = explode("v=",$vidurl);
			$stripParameters = explode("&",$vidarray[1]);
			$stripBreaks = explode("<br />",$stripParameters[0]);
			$stripSpaces = explode(" ",$stripBreaks[0]);//NICE, CLEAN VIDEO ID
			$viewVideo = '<iframe class="youtube-player" type="text/html" width="430" height="260" src="http://www.youtube.com/embed/' . $stripSpaces[0] . '" frameborder="0"></iframe>';
			$newContent = preg_replace("#(http://www.youtube.com)?/(v/([-|~_0-9A-Za-z]+)|watch\?v\=([-|~_0-9A-Za-z]+)&?.*?)#i",$viewVideo, $newContent);
		}
	?>
{% endhighlight %}

When 'comment-do.php' is ran, it checks whether there's something that resembles a YouTube URL in it somewhere and if there is, it goes through a series of processes to remove everything but the video ID, places it in the relevant place in the iframe code, then puts that in place of the link in whatever was submitted.

The PHP function <code>preg_match()</code> returns true if it finds an example of whatever's in the first parameter within the second parameter. Here I'm using Regular Expressions (or 'Regex', which are far too complex to go into now, but there's [plenty of other people][Regular Expressions Reference] who have taken that joyous task on for you) but as a translation it's looking for anything that takes the form 'http://www.youtube.com/watch?v='.

The next line, the variable <code>$vidarray</code> strips the video ID from the URL parameter. The function <code>explode(a,b)</code> will look through everything in <code>b</code> for an instance of <code>a</code>. Every time it finds <code>a</code>, everything before it goes in one level of an array and everything after it goes in the next one down. Seeing as there should be only two levels in this array, we could put the optional *limit* variable in the function, but there isn't one as I didn't want it to break, quite simply.

There's a succession of variables there that all do similar things. <code>$stripParameters</code> strips… well… parameters from the URL (for example feature=related is a common one, which would mess up the iframe code). <code>$stripBreaks</code> gets rid of anything the user may have written underneath the video. The text will still appear (the iframe code is pasted over the top of the link and nothing more) it's just so no HTML leaks into the code. Finally <code>$stripSpaces</code> gets rid of anything the user may have written to go adjactent to the video, meaning not on a completely separate line. The result, a nice clean video ID without any guff attached to it. Nice.

<code>$viewVideo</code> just holds the code of the iframe so we can easily slot in the video ID and then we replace $newContent (a variable defined earlier on which is essentially what the user typed in) with this code when we see the YouTube link appear.

The PHP function <code>preg_replace()</code> does the same as <code>preg_match()</code> but will replace whatever it's matched with whatever the second parameter is.

Now $newContent holds the user's message, but now with an iframe code in it, which can now be submitted to the database. It doesn't effect the word count of a post (part of the mechanism of *1000words*) as that's calculated before any of this is done. Sorted.

## Wait, what about links?

Links are done in a pretty similar way, just shorter. 

{% highlight php %}
<?php
	//REPLACE 'WWW.' LINKS WITH 'HTTP://WWW.'
	$newContent = preg_replace("/([^\w\/])(www\.[a-z0-9\-]+\.[a-z0-9\-]+)/i", "$1http://$2",$newContent);
	//REPLACE HTTP:// STRINGS WITH LINKS
	$newContent = preg_replace("/([\w]+:\/\/[\w-?&;#~=\.\/\@]+[\w\/])/i","<a target=\"_blank\" href=\"$1\" rel=\"nofollow\">$1</A>",$newContent);
?>
{% endhighlight %}

If you're posting a link to something from memory, you don't tend to put http:// in front of it, you just go www. and type the address. This code will first replace any instance of a word that starts with "www." and attach a "http://" in front of it. 

It then runs the second bit of code, that will detect any word that starts "http://" and put HTML a tags around it to link it up. Then that's posted to the database.

Problem is, this code needs to be the <code>else</code> to your previous <code>if </code>statement if you're implementing the YouTube code above as it will try and transform the <code>src</code> in the iframe into a link otherwise. Drawback being if you post both a YouTube video and a link, the links won't become clickable. If anyone has an idea on how to make that work, leave it in the comments and I'll love you forever.

But that's how it's done in *1000words*! I hope you find it useful and put it in your own projects. Also, if there's a better way, leave a link to it in the comments and I'll gladly update this post about it. 

[1000words YouTube Embed]:{{ site.baseurl }}/assets/2011-01-14-converting-urls-into-links-and-youtube-videos/1000words-YouTube-embed.png
[iframe embed code]:{{ site.baseurl }}/assets/2011-01-14-converting-urls-into-links-and-youtube-videos/iframe-embed-code.png

[YouTube - Pre-made Player]:http://www.youtube.com/embed/l-DcYZZQlJw
[Regular Expressions Reference]:http://www.regular-expressions.info/reference.html