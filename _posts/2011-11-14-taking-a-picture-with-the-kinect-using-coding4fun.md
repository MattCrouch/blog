---
layout: post
title: Taking a picture with the Kinect using Coding4Fun
date: 2011-11-14 00:16:56
tags:
- C#
- coding4fun
- development
- image
- IMP
- Kinect
- WPF
---
<p><a href="http://mattcrouch.net/blog/2011/10/messing-around-with-the-kinect-sdk/" target="_blank">A while back</a> I detailed my first foray into Kinect development. Now I’ve learnt a bit since then, which includes a much simpler way of taking a picture using the Kinect’s RGB camera and saving that to the computer.</p>
<p>This approach uses the <a href="http://c4fkinect.codeplex.com/" target="_blank">Coding4Fun Kinect</a> library. If you’re not currently using it, then do. It makes life a <em>whole </em>lot easier. Download it, import references, hit the using statement. You know the drill.</p>
<p><a href="http://www.mattcrouch.net/blog/images/Getting-an-image-from-the-Kinect-using-C_5B/WPF-Capture-Form.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="WPF Capture Form" alt="WPF Capture Form" src="{{ site.baseurl }}/assets/WPF-Capture-Form_thumb.png" width="313" height="245" /></a></p>
<p>I’m going to go ahead and assume you’ve got Kinect firing an RGB image into an image somewhere on your WPF window, correct? The code won’t look a million miles away from this:</p>
<pre class="csharpcode"><span class="kwrd">void</span> nui_VideoFrameReady(<span class="kwrd">object</span> sender, ImageFrameReadyEventArgs e)
        {
            PlanarImage image = e.ImageFrame.Image; <span class="rem">//Allows us to see image data</span>

            userImage.Source = e.ImageFrame.ToBitmapSource();
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
<p>We’re plopping ours into an image called <font face="Lucida Console">userImage</font>. That’s helpfully named, isn’t it…</p>
<p>What we’re going to need to do is create a button in our window to trigger this capture. You could map it to a gesture, or a voice command or something, but we’re going old school.</p>
<p><a href="http://www.mattcrouch.net/blog/images/Getting-an-image-from-the-Kinect-using-C_5B/Capture-button.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="Capture button" alt="Capture button" src="{{ site.baseurl }}/assets/Capture-button_thumb.png" width="220" height="169" /></a></p>
<p>Now the code to snap a picture on our button is this:</p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">void</span> btnCaptureImage_Click(<span class="kwrd">object</span> sender, RoutedEventArgs e)
        {
            BitmapSource image = (BitmapSource) userImage.Source;
            
            image.Save(DateTime.Now.ToString(<span class="str">"ddMMyyyy HHmmss"</span>) + <span class="str">".jpg"</span>, ImageFormat.Jpeg);
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
<p>What we’re doing here is extracting the source of our <font face="Lucida Console">userImage </font>as a <font face="Lucida Console">BitmapSource</font>. Then we’re using the Coding4Fun method <font face="Lucida Console">Save()</font> to save it. It goes into the default place of Bin –&gt; Debug unless told otherwise, I’d imagine. We’re saving it with a unique name based on the system time, as otherwise it would just overwrite the last captured image, and that’s no fun.</p>
<p><a href="http://www.mattcrouch.net/blog/images/Getting-an-image-from-the-Kinect-using-C_5B/moto-14112011-001319.jpg"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="moto 14112011 001319" alt="moto 14112011 001319" src="{{ site.baseurl }}/assets/moto-14112011-001319_thumb.jpg" width="310" height="233" /></a></p>
<p>That’s it really. Hope this helps someone!</p>
