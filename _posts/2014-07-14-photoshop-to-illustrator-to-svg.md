---
layout: post
title: Photoshop to Illustrator to SVG
date: 2014-07-14 09:00:05
tags:
- cinolla
- graphics
- illustrator
- photoshop
- svg
---
<p>I'm not really a graphics guy. I pretty much stay away from the stuff unless I have to. But I decided to spruce up Cinolla's error pages with a bit more than it's current 'Something Went Wrong' message to something a bit more user-friendly.</p>
<p>As Cinolla is all about activity centres, I decided I wanted a little guy lost in a cave. Thankfully, all the little promo bits and pieces for Cinolla use a simplistic art style that I think even I could have a stab at replicating. So I jumped into Photoshop and gave it a stab.</p>
<p>Yeah. Photoshop.</p>
<p>[caption id="attachment_381" align="aligncenter" width="281"]<a href="http://mattcrouch.net/blog/wp-content/uploads/2014/07/cave-404.png"><img class="size-medium wp-image-381" src="{{ site.baseurl }}/assets/cave-404-281x300.png" alt="Cinolla Cave 404" width="281" height="300" /></a> Little guy stuck in a cave. Poor guy.[/caption]</p>
<h2>Photoshop's a bad idea</h2>
<p>Photoshop is for photos. It clearly says it in the name of the thing, but yet anything graphic-y and it's my go-to program. We never learned anything else in uni for images, so I just stick with what I know basically. I knew doing it in rasterised graphics is going to lead to a bad time later on, so I had the foresight to at least do the little guy in shape paths.</p>
<p>[caption id="attachment_382" align="aligncenter" width="300"]<a href="http://mattcrouch.net/blog/wp-content/uploads/2014/07/Screen-Shot-2014-07-13-at-12.31.21.png"><img class="size-medium wp-image-382" src="{{ site.baseurl }}/assets/Screen-Shot-2014-07-13-at-12.31.21-300x197.png" alt="Editing a splodge on the cave guy" width="300" height="197" /></a> Editing a splodge on the cave guy[/caption]</p>
<p>Essentially he's made up of shape paths and the Pen Tool - two things I've neglected in learning Photoshop, so it's probably not done right. <a title="Photoshop Pen Tool" href="https://www.google.co.uk/search?q=Photoshop+Pen+Tool" target="_blank">There's better people out there than me</a>, but I remain convinced not one person knows how to <em>actually</em> use the Pen Tool correctly...</p>
<p>But what happens when you're done? You're stuck with a static image. That's not exactly fun. At a company where we're cutting edge as far as booking systems are concerned, a static image just seemed... predictable. I wanted to try something new, so I tried out Illustrator.</p>
<h2>Illustrator's a better idea</h2>
<p>Illustrator's much better equipped for this style of graphic, certainly. It has one crucial feature over Photoshop though. You can export to SVG. As we're going to be on a webpage, that's great news. It's an image, but we can adjust it as we like later on in CSS.</p>
<p>While I've used Illustrator in the past and know a few basic features, I've got no experience with SVG. Doing this was certainly an experience. I just assumed SVG was all kinds of complicated and not for me, but really the process from illustrator isn't all that hard.</p>
<p>But thankfully someone at Adobe made life pretty easy for me, as you can just simply open Photoshop files in Illustrator and, assuming they're all done with paths, will translate perfectly. No redrawing required for me. That's great, as it took long enough to make him look like that...</p>
<h2>Illustrator to SVG</h2>
<p>Adobe remain in my good books because they make it simple to get an SVG out of Illustrator, too. It's just a case of File -&gt; Save As... -&gt; .svg. There's a few more options to take care of, but the default won't serve you too badly.</p>
<p>[caption id="attachment_383" align="aligncenter" width="244"]<a href="http://mattcrouch.net/blog/wp-content/uploads/2014/07/Screen-Shot-2014-07-13-at-12.38.34.png"><img class="size-medium wp-image-383" src="{{ site.baseurl }}/assets/Screen-Shot-2014-07-13-at-12.38.34-244x300.png" alt="Illustrator to SVG screen" width="244" height="300" /></a> Adjust the settings for SVG export in Illustrator[/caption]</p>
<p>These are the settings I used. Fonts shouldn't be a problem, but you can convert those to paths too should you need to. The big ones to look out for though are the Decimal Places field and the Responsive checkbox (if you've got the newest version of Illustrator, which I don't, sadly) - both under the 'More Options' button.</p>
<p>Decimal Places is, as it sounds, rounding your paths to a certain number of decimal places. The bigger number here, the larger your file will be, but the more true to your Illustrator file. Too small a number and it will start moving points out of place and your image will look strange. 2 served me well.</p>
<p>The Responsive checkbox, again as it sounds, changes the image to resize with the browser. If you don't have it (like me) fear not. There's hope yet.</p>
<p>Open up the newly created .svg file in a text editor and look what it's made:</p>
<pre>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0) --&gt;
&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"&gt;
&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
 height="811px" viewBox="0 0 762 811" enable-background="new 0 0 762 811" xml:space="preserve"&gt;</pre>
<p>I must admit I was surprised how neat the code looked (having never used a generator like this since <a title="Microsoft FrontPage" href="http://en.wikipedia.org/wiki/Microsoft_FrontPage" target="_blank">FrontPage</a> -&gt; HTML which, as any 90s/00s geek will tell you, was never a good plan) but it still generates stuff you don't need. You can trim this top bit down to the bare bones:</p>
<pre>&lt;?xml version="1.0" encoding="utf-8"?&gt;

&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"&gt;
&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 762 811" xml:space="preserve"&gt;</pre>
<p>...and you're pretty much good to go.</p>
<p>I'll do another post to sum up how to put SVGs into your web page, then how to animate them to look pretty funky. But that should get you using SVGs for things for now. They're great for simple graphics, icons or anything that would need to scale. <a title="Can I Use? SVG" href="http://caniuse.com/svg" target="_blank">Browser support's pretty good now, too</a>. So why not give it a try?</p>
