---
layout: post
title: Converting URLs into links and YouTube videos
date: 2011-01-14 23:58:48
tags:
- development
- PHP
- video
---
<p>If you've played around with <em>1000words </em>at all recently, you'll notice a neat little trick happens when you post a text message containing a YouTube URL:</p>
<p><img style="margin: ; display: block; float: none" title="1000words YouTube embed" alt="1000words YouTube embed" src="{{ site.baseurl }}/assets/1000words-YouTube-embed.png" width="324" height="262" /></p>
<p>It creates an embedded player that plays in the post, links back to the video and can even connect through to their YouTube account if they're logged in. It uses an embed code currently in beta from YouTube itself (well, strictly speaking, it's an <font face="Lucida Console">iframe,</font> but who's keeping score…). The code will substitute in a HTML5 player when it's needed and there's a HTML5 standard video format available to them, so it's great for using on a site that may be visited on mobile such as <em>1000words</em>.</p>
<h3>Grabbing the code</h3>
<p><img style="margin: ; display: block; float: none" title="iframe embed code" alt="iframe embed code" src="{{ site.baseurl }}/assets/iframe-embed-code.png" width="393" height="149" /></p>
<p>Obviously, it's currently in beta, so you'll want to grab the most up to date code you can from YouTube themselves. Go on to any video, click 'Embed' and make sure the &quot;Use iframe embed code&quot; box is checked. It'll generate something not too different to this:</p>
<pre><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">&lt;</span> iframe title=&quot;YouTube video player&quot;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">class=&quot;youtube-player&quot;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">type=&quot;text/html&quot;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">width=&quot;480&quot;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">height=&quot;390&quot;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">src=&quot;http://www.youtube.com/embed/l-DcYZZQlJw&quot;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">frameborder=&quot;0&quot;<span style="color: #0000ff">&gt;</span>
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">&lt;/</span> iframe<span style="color: #0000ff">&gt;</span></pre>
<p>&#160;</p>
<p>It's not the best of code seeing as out of the box we've got frameborder which doesn't validate, but hey ho, worser things have happened. That's what CSS is for. But anyway.</p>
<p>You'll see YouTube have kindly given us an <font face="Lucida Console">src</font><font face="Calibri"> attribute. That's a URL to what is essentially <a href="http://www.youtube.com/embed/l-DcYZZQlJw">a premade player</a>. It's an iframe, so will just show up how it would in a browser, only smaller. Give it some height and width attributes and you're good to go. </font></p>
<p>Our job now is to take a link posted and grab the video ID – the bit after the &quot;v=…&quot; bit in a YouTube URL – and place it into the bit just after the '/embed/' in the <font face="Lucida Console">src</font> of the iframe code. How did I go about doing that?</p>
<h3>Grabbing the video ID</h3>
<p>When the user posts a text comment on <em>1000words</em> it goes through a PHP script called 'comment-do.php'. Here it will do all the connection to the database, make sure everything's all filled out and if everything's hunky dory, it's posted to the database. </p>
<p>Here's the code where it jiggles about with the code:</p>
<pre><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">&lt;?</span>php
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #008000">//REPLACE YOUTUBE VIDEO WITH IFRAME HTML5 EMBED</span>
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <a style="color: #0000ff" href="http://www.php.net/if">if</a> (<a style="color: #ffa500" href="http://www.php.net/preg_match">preg_match</a>(&quot;<span style="color: #8b0000">#(http://www.youtube.com)?/(v/([-|~_0-9A-Za-z]+)|watch\?v\=([-|~_0-9A-Za-z]+)&amp;?.*?)#i</span>&quot;, $newContent)) {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    $vidurl = <a style="color: #ffa500" href="http://www.php.net/strstr">strstr</a>($newContent,&quot;<span style="color: #8b0000">?v=</span>&quot;); <span style="color: #008000">//GRAB VIDEO ID</span>
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    $vidarray = <a style="color: #ffa500" href="http://www.php.net/explode">explode</a>(&quot;<span style="color: #8b0000">v=</span>&quot;,$vidurl);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    $stripParameters = <a style="color: #ffa500" href="http://www.php.net/explode">explode</a>(&quot;<span style="color: #8b0000">&amp;</span>&quot;,$vidarray[1]);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    $stripBreaks = <a style="color: #ffa500" href="http://www.php.net/explode">explode</a>(&quot;<span style="color: #8b0000">&lt;br /&gt;</span>&quot;,$stripParameters[0]);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    $stripSpaces = <a style="color: #ffa500" href="http://www.php.net/explode">explode</a>(&quot;<span style="color: #8b0000"> </span>&quot;,$stripBreaks[0]);<span style="color: #008000">//NICE, CLEAN VIDEO ID</span>
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    $viewVideo = '<span style="color: #8b0000">&lt;iframe class=&quot;youtube-player&quot; type=&quot;text/html&quot; width=&quot;430&quot; height=&quot;260&quot; src=&quot;http://www.youtube.com/embed/</span>' . $stripSpaces[0] . '<span style="color: #8b0000">&quot; frameborder=&quot;0&quot;&gt;&lt;/iframe&gt;</span>';
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    $newContent = <a style="color: #ffa500" href="http://www.php.net/preg_replace">preg_replace</a>(&quot;<span style="color: #8b0000">#(http://www.youtube.com)?/(v/([-|~_0-9A-Za-z]+)|watch\?v\=([-|~_0-9A-Za-z]+)&amp;?.*?)#i</span>&quot;,$viewVideo, $newContent);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  }
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">?&gt;</span></pre>
<p>When 'comment-do.php' is ran, it checks whether there's something that resembles a YouTube URL in it somewhere and if there is, it goes through a series of processes to remove everything but the video ID, places it in the relevant place in the iframe code, then puts that in place of the link in whatever was submitted.</p>
<p>The PHP function <font face="Lucida Console">preg_match()</font><font face="Calibri"> returns true if it finds an example of whatever's in the first parameter within the second parameter. Here I'm using Regular Expressions (or 'Regex', which are far too complex to go into now, but there's <a href="http://www.regular-expressions.info/reference.html">plenty of other people</a> who have taken that joyous task on for you) but as a translation it's looking for anything that takes the form 'http://www.youtube.com/watch?v='.</font></p>
<p>The next line, the variable <font face="Lucida Console">$vidarray</font> strips the video ID from the URL parameter. The function <font face="Lucida Console">explode(a,b)</font> will look through everything in <font face="Lucida Console">b</font> for an instance of <font face="Lucida Console">a</font>. Every time it finds <font face="Lucida Console">a</font>, everything before it goes in one level of an array and everything after it goes in the next one down. Seeing as there should be only two levels in this array, we could put the optional <em>limit</em> variable in the function, but there isn't one as I didn't want it to break, quite simply. </p>
<p>There's a succession of variables there that all do similar things. <font face="Lucida Console">$stripParameters</font> strips… well… parameters from the URL (for example feature=related is a common one, which would mess up the iframe code). <font face="Lucida Console">$stripBreaks</font> gets rid of anything the user may have written underneath the video. The text will still appear (the iframe code is pasted over the top of the link and nothing more) it's just so no HTML leaks into the code. Finally <font face="Lucida Console">$stripSpaces</font> gets rid of anything the user may have written to go adjactent to the video, meaning not on a completely separate line. The result, a nice clean video ID without any guff attached to it. Nice.</p>
<p><font face="Lucida Console">$viewVideo</font> just holds the code of the iframe so we can easily slot in the video ID and then we replace $newContent (a variable defined earlier on which is essentially what the user typed in) with this code when we see the YouTube link appear.</p>
<p>The PHP function <font face="Lucida Console">preg_replace()</font> does the same as <font face="Lucida Console">preg_match()</font> but will replace whatever it's matched with whatever the second parameter is.</p>
<p>Now $newContent holds&#160; the user's message, but now with an iframe code in it, which can now be submitted to the database. It doesn't effect the word count of a post (part of the mechanism of <em>1000words</em>) as that's calculated before any of this is done. Sorted.</p>
<h3>Wait, what about links?</h3>
<p>Links are done in a pretty similar way, just shorter. </p>
<pre style="border-bottom: #cecece 1px solid; border-left: #cecece 1px solid; padding-bottom: 5px; background-color: #fbfbfb; min-height: 40px; padding-left: 5px; width: 385px; padding-right: 5px; height: 208px; overflow: auto; border-top: #cecece 1px solid; border-right: #cecece 1px solid; padding-top: 5px"><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">&lt;?</span>php
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #008000">//REPLACE 'WWW.' LINKS WITH 'HTTP://WWW.'</span>
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  $newContent = <a style="color: #ffa500" href="http://www.php.net/preg_replace">preg_replace</a>(&quot;<span style="color: #8b0000">/([^\w\/])(www\.[a-z0-9\-]+\.[a-z0-9\-]+)/i</span>&quot;, &quot;<span style="color: #8b0000">$1http://$2</span>&quot;,$newContent);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #008000">//REPLACE HTTP:// STRINGS WITH LINKS</span>
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  $newContent = <a style="color: #ffa500" href="http://www.php.net/preg_replace">preg_replace</a>(&quot;<span style="color: #8b0000">/([\w]+:\/\/[\w-?&amp;;#~=\.\/\@]+[\w\/])/i</span>&quot;,&quot;<span style="color: #8b0000">&lt;a target=<pre wp-pre-tag-28></pre>quot;_blank<pre wp-pre-tag-28></pre>quot; href=<pre wp-pre-tag-28></pre>quot;$1<pre wp-pre-tag-28></pre>quot; rel=<pre wp-pre-tag-28></pre>quot;nofollow<pre wp-pre-tag-28></pre>quot;&gt;$1&lt;/A&gt;</span>&quot;,$newContent);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">?&gt;</span></pre>
<p>If you're posting a link to something from memory, you don't tend to put http:// in front of it, you just go www. and type the address. This code will first replace any instance of a word that starts with &quot;www.&quot; and attach a &quot;http://&quot; in front of it. </p>
<p>It then runs the second bit of code, that will detect any word that starts &quot;http://&quot; and put HTML a tags around it to link it up. Then that's posted to the database.</p>
<p>Problem is, this code needs to be the <font face="Lucida Console">else</font> to your previous <font face="Lucida Console">if </font>statement if you're implementing the YouTube code above as it will try and transform the <font face="Lucida Console">src</font> in the iframe into a link otherwise. Drawback being if you post both a YouTube video and a link, the links won't become clickable. If anyone has an idea on how to make that work, leave it in the comments and I'll love you forever.</p>
<p>But that's how it's done in <em>1000words</em>! I hope you find it useful and put it in your own projects. Also, if there's a better way, leave a link to it in the comments and I'll gladly update this post about it. </p>
