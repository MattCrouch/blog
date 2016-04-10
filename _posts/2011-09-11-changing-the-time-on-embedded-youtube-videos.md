---
layout: post
title: Changing the time on embedded YouTube videos
date: 2011-09-11 21:06:44
tags:
- API
- javascript
- video
- youtube
---
<p>It’s been a while since anything was posted here, for which I can only apologise. I’ve been busy partly enjoying this quote-unquote summer we’ve been having and also working on a project I can’t really disclose any details of right now. </p>
<p>So it’s been all hush-hush here but I’ve found time today to test out a few things and an area that I’ve actually got something useful going is the <a href="http://code.google.com/apis/youtube/js_api_reference.html">YouTube JavaScript API</a>. Specifically we’re looking at changing the time within an embedded video and creating a loop within the video so we can hear something inspirational again and again.</p>
<h3>Example</h3>
<p>To see what we’re aiming towards, I’ve knocked up a little page in the past hour with a bunch of controls just to demonstrate some of the features of YouTube’s API. <a href="http://www.mattcrouch.net/experiments/yt-js-time/" target="_blank">Check it out, yo.</a></p>
<p><a href="http://www.mattcrouch.net/experiments/yt-js-time/"><img style="background-image: none; border-right-width: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; float: left; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="screengrab" border="0" alt="screengrab" align="left" src="{{ site.baseurl }}/assets/screengrab.png" width="220" height="240" /></a></p>
<p>That’s all there is too it. I told you it wasn’t fancy, didn’t I. </p>
<p>What we’ve got here is the Internet’s most enthusiastic and inspiring bike rider giving us a morale boost. But if you don’t find it as adorable as a lot of the Internet does, you can use the links below to skip five and ten seconds ahead or back from where you are at the moment, as well as toggle whether the video is playing or not just in case you can’t reach the player’s button for whatever reason.</p>
<p>Following it is a link labelled “Thumbs up!” which will skip to the bit everybody loves regardless of where you are playing currently.</p>
<p>Finally, there’s a counter showing the current time. Because, well, why not.</p>
<h3>Loading in the YouTube video</h3>
<p>There’s a bit of housekeeping to do first. We need to set up everything to load up right. It’s not just a straight-up embed code, you know.</p>
<pre class="csharpcode">  <span class="kwrd">&lt;</span><span class="html">script</span> <span class="attr">type</span><span class="kwrd">="text/javascript"</span> <span class="attr">src</span><span class="kwrd">="swfobject.js"</span><span class="kwrd">&gt;&lt;/</span><span class="html">script</span><span class="kwrd">&gt;</span>    
  &lt;div id=<span class="str">"ytapiplayer"</span>&gt;
    &lt;p&gt;You need Flash player 8+ and JavaScript enabled to view this video.&lt;/p&gt;
  &lt;/div&gt;

  &lt;script type=<span class="str">"text/javascript"</span>&gt;

    <span class="kwrd">var</span> <span class="kwrd">params</span> = { allowScriptAccess: <span class="str">"always"</span> };
    <span class="kwrd">var</span> atts = { id: <span class="str">"myytplayer"</span> };
    swfobject.embedSWF(<span class="str">"http://www.youtube.com/e/eaIvk1cSyG8?enablejsapi=1&amp;playerapiid=ytplayer"</span>,
                       <span class="str">"ytapiplayer"</span>, <span class="str">"425"</span>, <span class="str">"356"</span>, <span class="str">"8"</span>, <span class="kwrd">null</span>, <span class="kwrd">null</span>, <span class="kwrd">params</span>, atts);
<span class="kwrd">&lt;/</span><span class="html">script</span><span class="kwrd">&gt;</span></pre>
<p>That’s the basic code, right there. First off you’re going to need a js file called ‘<a href="http://code.google.com/p/swfobject/">swfobject</a>’. It’s intended for more hardcore uses, but just download that and find the ‘swfobject.js’ file, put it in the same directory as this page and you’ll be fine. You can forget about it from here on out. </p>
<p>You’re then setting up an area to load the YouTube video (setting some fallback text just in case someone views this on a non-compatible device) and then loading it in via JavaScript. The <font face="Consolas">allowScriptAccess</font> is key here. Without it, we won’t be able to access anything the SWF player gives us.</p>
<p>Upload and run that and everything should be dandy. You’ll need to upload it because of limitations within Flash in regards to downloading stuff to a local machine. Bummer.</p>
<h3>Setting up the functions</h3>
<p>Next we’re going to write a bunch of functions to make our lives easier with the controls. The most important one is <font face="Consolas">onYouTubePlayerReady()</font>, which is a default one ran when the player is… well… ready.</p>
<pre class="csharpcode"><span class="kwrd">function</span> onYouTubePlayerReady(playerId) {
      ytplayer = document.getElementById(<span class="str">"myytplayer"</span>);
      ytplayer.playVideo();
    }</pre>
<p>In this function we’re assigning the variable <font face="Consolas">ytplayer</font>, which will act as a pointer towards the video. It just makes things look neater, really. The second part uses that variable then tells the player within that element to start playing. Obvious functions to remember are <font face="Consolas">playVideo()</font>, <font face="Consolas">pauseVideo()</font> and <font face="Consolas">stopVideo()</font>, which do exactly what you think they do.</p>
<pre class="csharpcode"><span class="kwrd">function</span> skip(seconds) {
  <span class="kwrd">if</span> (ytplayer) {
    ytplayer.seekTo(ytplayer.getCurrentTime() + seconds, <span class="kwrd">true</span>);
  }
}</pre>
<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>
<p>The function <font face="Consolas">skip()</font> is going to do most of the controls’ jobs for us. First it checks if we have a player ready, and if it does, it will run the <font face="Consolas">seekTo()</font> function, which will move the playhead to the position in seconds we pass it. The second parameter is asking whether we want to reload the video from that point, which is true for our case. False cases would be if you’re going to be scrubbing the playhead along constantly trying to get an exact time before playing.</p>
<p><font face="Consolas">getCurrentTime()</font> gets the current time, obviously. We’re adding the amount of seconds we pass to the function to that value to get our position. Remember, adding a negative number takes away. Don’t get fooled, now!</p>
<pre class="csharpcode"><span class="kwrd">function</span> pausePlay() {
    <span class="kwrd">if</span> (ytplayer) {
        <span class="kwrd">if</span> (ytplayer.getPlayerState() != 1) {
            ytplayer.playVideo();
        } <span class="kwrd">else</span> {
            ytplayer.pauseVideo();
        }
    }
}</pre>
<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>
<p>For our ‘Pause/Play’ toggle button, we need a fresh new function. It might not look pretty, but <font face="Consolas">pausePlay()</font> does some somewhat swanky stuff.</p>
<p>As before, we’re checking if we have a player ready. If we do, then it jumps into another check. <font face="Consolas">getPlayerState()</font> will return a number depending on what state the video’s currently in. A video that hasn’t started playing at all returns <font face="Consolas">–1</font>, one that has ended returns <font face="Consolas">0</font>, a playing video returns <font face="Consolas">1</font> and a paused video returns <font face="Consolas">2</font>. There are other complex ones, but they aren’t exactly needed here. </p>
<p>We only need to know if it’s playing or not. We’re checking first if it’s not playing, then play it, but if it is then pause it.</p>
<p>That’s it for the core functionality. Put a few links in the HTML to call those functions and you’re laughing!</p>
<pre class="csharpcode"><span class="kwrd">&lt;</span><span class="html">p</span><span class="kwrd">&gt;&lt;</span><span class="html">a</span> <span class="attr">href</span><span class="kwrd">="javascript:void(0);"</span> <span class="attr">onclick</span><span class="kwrd">="skip(-10);"</span><span class="kwrd">&gt;</span><span class="attr">&amp;laquo;</span>10s<span class="kwrd">&lt;/</span><span class="html">a</span><span class="kwrd">&gt;</span> - <span class="kwrd">&lt;</span><span class="html">a</span> <span class="attr">href</span><span class="kwrd">="javascript:void(0);"<br /></span><span class="attr">onclick</span><span class="kwrd">="skip(-5);"</span><span class="kwrd">&gt;</span><span class="attr">&amp;laquo;</span>5s<span class="kwrd">&lt;/</span><span class="html">a</span><span class="kwrd">&gt;</span> - <span class="kwrd">&lt;</span><span class="html">a</span> <span class="attr">href</span><span class="kwrd">="javascript:void(0);"</span> <span class="attr">onclick</span><span class="kwrd">="pausePlay();"</span><span class="kwrd">&gt;</span>Pause/Play<span class="kwrd">&lt;/</span><span class="html">a</span><span class="kwrd">&gt;<br /></span>- <span class="kwrd">&lt;</span><span class="html">a</span> <span class="attr">href</span><span class="kwrd">="javascript:void(0);"</span> <span class="attr">onclick</span><span class="kwrd">="skip(5);"</span><span class="kwrd">&gt;</span><span class="attr">&amp;raquo;</span>5s<span class="kwrd">&lt;/</span><span class="html">a</span><span class="kwrd">&gt;</span> - <span class="kwrd">&lt;</span><span class="html">a</span> <span class="attr">href</span><span class="kwrd">="javascript:void(0);"</span> <br /><span class="attr">onclick</span><span class="kwrd">="skip(10);"</span><span class="kwrd">&gt;</span><span class="attr">&amp;raquo;</span>10s<span class="kwrd">&lt;/</span><span class="html">a</span><span class="kwrd">&gt;&lt;/</span><span class="html">p</span><span class="kwrd">&gt;</span>
</pre>
<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>
<h3>Jump to a specific point</h3>
<p>It’s all well and good scooting across the video <em>hoping </em>to find this kid’s infamous words, but what about jumping straight to them? Well, there’s a function for that.</p>
<pre class="csharpcode"><span class="kwrd">function</span> gotoTime(seconds) {
    <span class="kwrd">if</span> (ytplayer) {
        ytplayer.seekTo(seconds, <span class="kwrd">true</span>);
    }
}</pre>
<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>
<p>I’ve made it a generic function just in case you ever wanted to jump to another point in the video. It checks if the video is ready, and will then move the playhead to the amount of seconds you asked for. Simple.</p>
<p>If you were paying attention above, you would have seen you’ve used <font face="Consolas">seekTo()</font> before. This one is just taking a raw number to jump to. In other words, it’s easier. </p>
<h3>Creating a loop</h3>
<p>If you were playing about with my example and left it playing in the background, you may have accidently felt a little bit more awesome. That’s because our bicycle brethren has his infamous words looped at the end of the video thanks to a cheeky bit of JavaScript. It’s by no means essential, but I can just tell you want the extra credit from teacher.</p>
<p>First off, I’ll let you know how we get our counter working on the page.</p>
<pre class="csharpcode">setInterval(updateTime, 10);

<span class="kwrd">function</span> updateTime() {
    <span class="kwrd">if</span> (<span class="kwrd">typeof</span> ytplayer != <span class="str">"undefined"</span>) {
        currentTime = ytplayer.getCurrentTime();
        document.getElementById(<span class="str">'current-time'</span>).innerHTML = currentTime;
        <span class="kwrd">if</span> (currentTime &gt;= 53) {
            gotoTime(48);
        }
    }
}</pre>
<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>
<p>We’re writing a function that will update the <font face="Consolas">&lt;span&gt;</font> on the page with the current time of the video and a <font face="Consolas">setInterval</font> – a timer, if you will – that will make sure it updates every 10 milliseconds. Bit excessive, I know, but it shows what it does.</p>
<p>The first check looks a little different to the usual. Really, all the previous functions could use this format, but it’s only essential on this function. <font face="Consolas">typeof</font> is asking the type of variable <font face="Consolas">ytplayer</font> is. All we’re asking is if it’s set. So if it’s not undefined, then it’s defined and we can carry on. There’s logic there somewhere. Honest.</p>
<p>The rest is obvious if you’re a code-head. We’re setting the variable <font face="Consolas">currentTime</font> to the… well… current time, which is then sent to the <font face="Consolas">&lt;span&gt;</font> on the page.</p>
<p>The next three lines are where it kicks off the loop. Every time this function is ran, if the current time is over 53 seconds – the end of the wee kid’s speech – then we run our previously defined function <font face="Consolas">gotoTime()</font> to pop to 48 seconds – the start of it.</p>
<p>We’ve generated an indefinite loop. You can exit that loop if you like, but that’s outside what we’re covering here, fool.</p>
<h3>Conclusion</h3>
<p>That’s all there is to it. The <a href="http://code.google.com/apis/youtube/getting_started.html">YouTube API</a> is fantastic in other areas too, so I suggest you look at it in more detail. Come back here every so often to see what this stuff could lead to in my projects down the line. You never know, it could end up being quite useful for you too.</p>
<style type="text/css">.csharpcode, .csharpcode pre<br />
{<br />
	font-size: small;<br />
	color: black;<br />
	font-family: consolas, "Courier New", courier, monospace;<br />
	background-color: #ffffff;<br />
	/*white-space: pre;*/<br />
}<br />
.csharpcode pre { margin: 0em; }<br />
.csharpcode .rem { color: #008000; }<br />
.csharpcode .kwrd { color: #0000ff; }<br />
.csharpcode .str { color: #006080; }<br />
.csharpcode .op { color: #0000c0; }<br />
.csharpcode .preproc { color: #cc6633; }<br />
.csharpcode .asp { background-color: #ffff00; }<br />
.csharpcode .html { color: #800000; }<br />
.csharpcode .attr { color: #ff0000; }<br />
.csharpcode .alt<br />
{<br />
	background-color: #f4f4f4;<br />
	width: 100%;<br />
	margin: 0em;<br />
}<br />
.csharpcode .lnum { color: #606060; }<br />
</style>
