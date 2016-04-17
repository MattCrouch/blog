---
layout: post
title: Changing the time on embedded YouTube videos
date: 2011-09-11 21:06:44
image: 2011-09-11-changing-the-time-on-embedded-youtube-videos/youtube-time-screenshot.png
tags:
- API
- javascript
- video
- youtube
---
It’s been a while since anything was posted here, for which I can only apologise. I’ve been busy partly enjoying this quote-unquote summer we’ve been having and also working on a project I can’t really disclose any details of right now. 

So it’s been all hush-hush here but I’ve found time today to test out a few things and an area that I’ve actually got something useful going is the [YouTube JavaScript API][YouTube Javascript API]. Specifically we’re looking at changing the time within an embedded video and creating a loop within the video so we can hear something inspirational again and again.

Example

To see what we’re aiming towards, I’ve knocked up a little page in the past hour with a bunch of controls just to demonstrate some of the features of YouTube’s API. [Check it out, yo][YouTube Javascript Example].

[![Youtube Time Screenshot][Youtube Time Screenshot]][Youtube Javascript Example]

That’s all there is too it. I told you it wasn’t fancy, didn’t I. 

What we’ve got here is the Internet’s most enthusiastic and inspiring bike rider giving us a morale boost. But if you don’t find it as adorable as a lot of the Internet does, you can use the links below to skip five and ten seconds ahead or back from where you are at the moment, as well as toggle whether the video is playing or not just in case you can’t reach the player’s button for whatever reason.

Following it is a link labelled “Thumbs up!” which will skip to the bit everybody loves regardless of where you are playing currently.

Finally, there’s a counter showing the current time. Because, well, why not.

Loading in the YouTube video

There’s a bit of housekeeping to do first. We need to set up everything to load up right. It’s not just a straight-up embed code, you know.

{% highlight html %}
<script type="text/javascript" src="swfobject.js"></script>    
  <div id="ytapiplayer">
    <p>You need Flash player 8+ and JavaScript enabled to view this video.</p>
  </div>

  <script type="text/javascript">

    var params = { allowScriptAccess: "always" };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("http://www.youtube.com/e/eaIvk1cSyG8?enablejsapi=1&playerapiid=ytplayer",
                       "ytapiplayer", "425", "356", "8", null, null, params, atts);
</script>
{% endhighlight %}

That’s the basic code, right there. First off you’re going to need a js file called [swfobject][swfobject]. It’s intended for more hardcore uses, but just download that and find the ‘swfobject.js’ file, put it in the same directory as this page and you’ll be fine. You can forget about it from here on out. 

You’re then setting up an area to load the YouTube video (setting some fallback text just in case someone views this on a non-compatible device) and then loading it in via JavaScript. The <code>allowScriptAccess</code> is key here. Without it, we won’t be able to access anything the SWF player gives us.

Upload and run that and everything should be dandy. You’ll need to upload it because of limitations within Flash in regards to downloading stuff to a local machine. Bummer.

Setting up the functions

Next we’re going to write a bunch of functions to make our lives easier with the controls. The most important one is <code>onYouTubePlayerReady()</code>, which is a default one ran when the player is… well… ready.

{% highlight javascript %}
function onYouTubePlayerReady(playerId) {
	ytplayer = document.getElementById("myytplayer");
	ytplayer.playVideo();
}
{% endhighlight %}

In this function we’re assigning the variable <code>ytplayer</code>, which will act as a pointer towards the video. It just makes things look neater, really. The second part uses that variable then tells the player within that element to start playing. Obvious functions to remember are <code>playVideo()</code>, <code>pauseVideo()</code> and <code>stopVideo()</code>, which do exactly what you think they do.

{% highlight javascript %}
function skip(seconds) {
	if (ytplayer) {
		ytplayer.seekTo(ytplayer.getCurrentTime() + seconds, true);
	}
}
{% endhighlight %}

The function <code>skip()</code> is going to do most of the controls’ jobs for us. First it checks if we have a player ready, and if it does, it will run the <code>seekTo()</code> function, which will move the playhead to the position in seconds we pass it. The second parameter is asking whether we want to reload the video from that point, which is true for our case. False cases would be if you’re going to be scrubbing the playhead along constantly trying to get an exact time before playing.

<code>getCurrentTime()</code> gets the current time, obviously. We’re adding the amount of seconds we pass to the function to that value to get our position. Remember, adding a negative number takes away. Don’t get fooled, now!

{% highlight javascript %}
function pausePlay() {
    if (ytplayer) {
        if (ytplayer.getPlayerState() != 1) {
            ytplayer.playVideo();
        } else {
            ytplayer.pauseVideo();
        }
    }
}
{% endhighlight %}

For our ‘Pause/Play’ toggle button, we need a fresh new function. It might not look pretty, but <code>pausePlay()</code> does some somewhat swanky stuff.

As before, we’re checking if we have a player ready. If we do, then it jumps into another check. <code>getPlayerState()</code> will return a number depending on what state the video’s currently in. A video that hasn’t started playing at all returns <code>–1</code>, one that has ended returns <code>0</code>, a playing video returns <code>1</code> and a paused video returns <code>2</code>. There are other complex ones, but they aren’t exactly needed here. 

We only need to know if it’s playing or not. We’re checking first if it’s not playing, then play it, but if it is then pause it.

That’s it for the core functionality. Put a few links in the HTML to call those functions and you’re laughing!

{% highlight html %}
<p>
	<a href="javascript:void(0);" onclick="skip(-10);">&laquo;10s</a> -
	<a href="javascript:void(0);" onclick="skip(-5);">&laquo;5s</a> - 
	<a href="javascript:void(0);" onclick="pausePlay();">Pause/Play</a> -
	<a href="javascript:void(0);" onclick="skip(5);">&raquo;5s</a> -
	<a href="javascript:void(0);" onclick="skip(10);">&raquo;10s</a>
</p>
{% endhighlight %}

## Jump to a specific point

It’s all well and good scooting across the video *hoping* to find this kid’s infamous words, but what about jumping straight to them? Well, there’s a function for that.

{% highlight javascript %}
function gotoTime(seconds) {
	if (ytplayer) {
		ytplayer.seekTo(seconds, true);
	}
}
{% endhighlight %}

I’ve made it a generic function just in case you ever wanted to jump to another point in the video. It checks if the video is ready, and will then move the playhead to the amount of seconds you asked for. Simple.

If you were paying attention above, you would have seen you’ve used <code>seekTo()</code> before. This one is just taking a raw number to jump to. In other words, it’s easier. 

Creating a loop

If you were playing about with my example and left it playing in the background, you may have accidently felt a little bit more awesome. That’s because our bicycle brethren has his infamous words looped at the end of the video thanks to a cheeky bit of JavaScript. It’s by no means essential, but I can just tell you want the extra credit from teacher.

First off, I’ll let you know how we get our counter working on the page.

{% highlight javascript %}
setInterval(updateTime, 10);

function updateTime() {
    if (typeof ytplayer != "undefined") {
        currentTime = ytplayer.getCurrentTime();
        document.getElementById('current-time').innerHTML = currentTime;
        if (currentTime >= 53) {
            gotoTime(48);
        }
    }
}
{% endhighlight %}

We’re writing a function that will update the <code>span</code> on the page with the current time of the video and a <code>setInterval</code> – a timer, if you will – that will make sure it updates every 10 milliseconds. Bit excessive, I know, but it shows what it does.

The first check looks a little different to the usual. Really, all the previous functions could use this format, but it’s only essential on this function. <code>typeof</code> is asking the type of variable <code>ytplayer</code> is. All we’re asking is if it’s set. So if it’s not undefined, then it’s defined and we can carry on. There’s logic there somewhere. Honest.

The rest is obvious if you’re a code-head. We’re setting the variable <code>currentTime</code> to the… well… current time, which is then sent to the <code>span</code> on the page.

The next three lines are where it kicks off the loop. Every time this function is ran, if the current time is over 53 seconds – the end of the wee kid’s speech – then we run our previously defined function <code>gotoTime()</code> to pop to 48 seconds – the start of it.

We’ve generated an indefinite loop. You can exit that loop if you like, but that’s outside what we’re covering here, fool.

Conclusion

That’s all there is to it. The [YouTube API][YouTube API] is fantastic in other areas too, so I suggest you look at it in more detail. Come back here every so often to see what this stuff could lead to in my projects down the line. You never know, it could end up being quite useful for you too.

[Youtube Time Screenshot]:{{ site.baseurl }}/assets/2011-09-11-changing-the-time-on-embedded-youtube-videos/youtube-time-screenshot.png

[YouTube Javascript API]:http://code.google.com/apis/youtube/js_api_reference.html
[YouTube Javascript Example]:http://www.mattcrouch.net/experiments/yt-js-time/
[swfobject]:http://code.google.com/p/swfobject/
[YouTube API]:http://code.google.com/apis/youtube/getting_started.html