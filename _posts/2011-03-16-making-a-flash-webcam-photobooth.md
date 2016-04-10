---
layout: post
title: Making a Flash webcam photobooth
date: 2011-03-16 12:00:00
tags:
- AS3
- database
- Flash
- PHP
- Spangles
---
<p>What turned out to become part of our site implementation of <em>Spangles Speed Sprint </em>started out as a little experiment of mine. Following suit of sites such as DailyBooth, how hard can it be to grab an image from your webcam using Flash and add a watermark to it? Turns out, not too difficult at all.</p>
<p>But what are we making after all this? Well, <a href="http://mattcrouch.net/experiments/flash-webcam-booth/">take a look for yourself.</a>It's nothing exciting, but it's a page with a Flash file which takes a picture of your ugly mug, uploads it and will show the most recent picture underneath it. You'll need to refresh to see it appear when you've uploaded it, but hey, it's not the end of the world.</p>
<h3>What you need</h3>
<p>Basics require you know a bit of Flash and ActionScript 3, but even if you don't know a lot, I'll do my best to explain it all. Obviously, PHP is needed to upload stuff to your own hosting, and having a database never hurt anyone (just so you know who posted what and when, really)</p>
<h3>Getting started</h3>
<p><img style="margin: 0px 10px 0px 0px; display: inline; float: left" title="Flash booth base" alt="Flash booth base" align="left" src="{{ site.baseurl }}/assets/Flash-booth-base.png" width="209" height="240" />Make a new Flash file. It's always a good start.</p>
<p>The one I've made is 360x420, but that was dictated by the size of the webcam input I've got going on. </p>
<p>Make a couple of straight forward buttons – a capture button and an upload button – and plop them on their own layers on the stage with the instance names <font face="Lucida Console">capture_mc</font> and <font face="Lucida Console">upload_mc</font>, respectively. The input text box with a 5 in it? It's all about the watermarking (and it's specific to <em>Spangles Speed Sprint</em> in this instance) but feel free to get it in there too. </p>
<h3>Cold, hard ActionScript</h3>
<p>From here on in, it's all about the ActionScript. There's nothing else already on the stage. </p>
<p>We're doing some dirty coding straight on the timeline, here. Ideally, you would use class definitions in external ActionScript, but right now we're not all that bothered. It works and that's the important bit, right?</p>
<p>Our first line is rather important, but has nothing to do with Flash at all, really.</p>
<pre><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">import</span> com.adobe.images.JPGEncoder;</pre>
<p>That's importing a set of important scripts to make it so we can upload and manipulate our picture from the webcam. You'll need to download the lovely <a href="https://github.com/mikechambers/as3corelib">AS3 Core library from GitHub</a> and just have it sitting in a folder where your .fla is. (Having trouble? It's a similar process to <a href="http://mattcrouch.net/blog/2010/07/playing-with-the-tweener-class/">installing Tweener</a>, just we'll want the folder 'com' instead of 'caurina')</p>
<h3>Setting up the camera</h3>
<p>So we need some webcam input, right? There's a code block for that.</p>
<pre><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">var</span> cam:Camera = Camera.getCamera();
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">cam.setMode(320,240,15);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">var</span> video:Video = <span style="color: #0000ff">new</span> Video(320,240);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">video.attachCamera(cam);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">video.x = 20;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">video.y = 20;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">addChild(video);</pre>
<p>This creates an instance of a camera object called <font face="Lucida Console">cam</font>, sets it's size to the appropriate size, then adds the webcam to it using the <font face="Lucida Console">Video</font> instance. It then moves it so it's a bit away from the edge, then plonks it on the stage with <font face="Lucida Console">addChild</font>. </p>
<p><img style="margin: 0px 0px 0px 10px; display: inline; float: right" title="Permission requests" alt="Permission requests" align="right" src="{{ site.baseurl }}/assets/Permission-requests.png" width="179" height="121" />That will make it so you can see the person sitting at their computer assuming they've given you permission to do that. There's ways to detect whether they have given you permission or not, but this doesn't really look into it. Probably something you should look into if you're thinking of putting this anywhere people will likely abuse it.</p>
<h3>Laying down the film</h3>
<p>The next chunk of code is where the captured image will sit. You're basically placing a piece of paper to develop on the stage.</p>
<pre><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">import</span> flash.display.Bitmap;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">import</span> flash.display.BitmapData;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">var</span> bitmapData:BitmapData = <span style="color: #0000ff">new</span> BitmapData(video.width,video.height);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">var</span> bitmap:Bitmap = <span style="color: #0000ff">new</span> Bitmap(bitmapData);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">bitmap.x = 20;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">bitmap.y = 280;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">bitmap.width = 160;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">bitmap.height = 120;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">addChildAt(bitmap,1);</pre>
<p>The first couple of lines import the libraries that Flash needs to display bitmap data, but don't worry, these are built into the Flash program you're using, so no need to download any more GitHub-ness.</p>
<p>The next line makes the metaphorical piece of paper the same size as the webcam feed. The line after that puts a little layer of 1s and 0s so it knows where to plonk pixels, then it aligns it all up and adds the child to the stage. </p>
<p>Couple of quirks you might notice – we're setting the height and width again after the <font face="Lucida Console">BitmapData</font> is being made. That's just to make it fit on our screen, but it keeps the same size image for when we come to upload it. Secondly, <font face="Lucida Console">addChildAt</font> is used here simply because it was appearing underneath the background graphic I've got on my version. Feel free to use the normal <font face="Lucida Console">addChild</font>.</p>
<h3>Button functionality</h3>
<p>Unless you're a ActionScript 3 noob, you'll know what this does.</p>
<pre><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">capture_mc.addEventListener(MouseEvent.CLICK,captureImage);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">upload_mc.visible = <span style="color: #0000ff">false</span>;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">upload_mc.addEventListener(MouseEvent.CLICK,uploadImage);</pre>
<p>So when the user clicks the capture button, the function <font face="Lucida Console">captureImage</font> will run, and if they click the upload button, <font face="Lucida Console">uploadImage</font> will run. The upload button is set to invisible to start off with so they can't upload a blank image. When <font face="Lucida Console">captureImage</font> runs, it's set to visible then. </p>
<h3>captureImage</h3>
<p>This function simply draws the image on display from the webcam at the moment the button is pressed, then displays the upload button. Simple, really.</p>
<pre><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">function</span> captureImage(e:MouseEvent):<span style="color: #0000ff">void</span> {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  bitmapData.draw(video);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  upload_mc.visible = <span style="color: #0000ff">true</span>;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">}</pre>
<h3>uploadImage</h3>
<p>Unfortunately, <font face="Lucida Console">uploadImage</font> isn't as simple.</p>
<pre><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">function</span> uploadImage(e:MouseEvent):<span style="color: #0000ff">void</span> {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  upload_mc.visible = <span style="color: #0000ff">false</span>;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">var</span> myEncoder:JPGEncoder = <span style="color: #0000ff">new</span> JPGEncoder(100);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">var</span> byteArray:ByteArray = myEncoder.encode(bitmapData);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"> 
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">var</span> header:URLRequestHeader = <span style="color: #0000ff">new</span> URLRequestHeader(&quot;<span style="color: #8b0000">Content-type</span>&quot;, &quot;<span style="color: #8b0000">application/octet-stream</span>&quot;);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"> 
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">var</span> saveJPG:URLRequest = <span style="color: #0000ff">new</span> URLRequest(&quot;<span style="color: #8b0000">post.php?spangleNo=</span>&quot; + txtSpangleNo.text);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  saveJPG.requestHeaders.push(header);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  saveJPG.method = URLRequestMethod.POST;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  saveJPG.data = byteArray;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"> 
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">var</span> urlLoader:URLLoader = <span style="color: #0000ff">new</span> URLLoader();
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  urlLoader.load(saveJPG);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">}</pre>
<p>We've first got it hiding the upload button, so they don't spam your server, then grabs that exposed picture you just took, encodes it to a JPG file, sets up the link to the PHP file that will upload your picture, pushes that picture into the data, then posts it to the PHP file. It's on the server that deals with it. (Obviously, it would just be 'post.php' in the <font face="Lucida Console">URLRequest</font> if you skimmed over the input text box bit).</p>
<h3>The PHP side of things</h3>
<p>Here's the bit where you just nod and smile. </p>
<pre style="border-bottom: #cecece 1px solid; border-left: #cecece 1px solid; padding-bottom: 5px; background-color: #fbfbfb; min-height: 40px; padding-left: 5px; width: 612px; padding-right: 5px; height: 210px; overflow: auto; border-top: #cecece 1px solid; border-right: #cecece 1px solid; padding-top: 5px"><pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">&lt;?php
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">require(&quot;<span style="color: #8b0000">connection.php</span>&quot;);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"><span style="color: #0000ff">if</span>(isset($GLOBALS[&quot;<span style="color: #8b0000">HTTP_RAW_POST_DATA</span>&quot;])){
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  $jpg = $GLOBALS[&quot;<span style="color: #8b0000">HTTP_RAW_POST_DATA</span>&quot;];
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  $spangleNo = $_GET[&quot;<span style="color: #8b0000">spangleNo</span>&quot;];
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  $filename = &quot;<span style="color: #8b0000">images/</span>&quot;. mktime(). &quot;<span style="color: #8b0000">.jpg</span>&quot;;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">if</span> ($spangleNo != 1 &amp;&amp; $spangleNo != 2 &amp;&amp; $spangleNo != 3 &amp;&amp; $spangleNo != 4 &amp;&amp; $spangleNo != 5) {
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    $spangleNo = &quot;<span style="color: #8b0000">watermark</span>&quot;;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  }
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  $overlayimg = &quot;<span style="color: #8b0000">images/</span>&quot; . $spangleNo .&quot;<span style="color: #8b0000">.png</span>&quot;;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  $icon = imagecreatefrompng($overlayimg);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  file_put_contents($filename, $jpg);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  $src_img = imagecreatefromjpeg($filename);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  imagecopy ($src_img,$icon,0,0,0,0,30,30); 
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  imagejpeg($src_img, $filename);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  imagedestroy($icon);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">} <span style="color: #0000ff">else</span>{
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  echo &quot;<span style="color: #8b0000">Encoded JPEG information not received.</span>&quot;;
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">}
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">$date = date(&quot;<span style="color: #8b0000">Ymd</span>&quot;);
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">$sql = &quot;<span style="color: #8b0000">INSERT INTO webcam_booth (picurl,date) VALUES('$filename','$date')</span>&quot;;
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px"></pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  <span style="color: #0000ff">if</span>(!mysql_query($sql, $con)) {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    die(&quot;<span style="color: #8b0000">ERROR!</span>&quot; . mysql_error());
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  } <span style="color: #0000ff">else</span> {
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">    header(&quot;<span style="color: #8b0000">Location:index.php</span>&quot;);
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  }
</pre>
<pre style="background-color: #fbfbfb; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">  
</pre>
<pre style="background-color: #ffffff; margin: 0em; width: 100%; font-family: consolas,&#39;Courier New&#39;,courier,monospace; font-size: 12px">?&gt;</pre>
<p>(the require line is just a file that contains database connection things. Google is your friend for that sort of thing)</p>
<p>The code checks something was passed to it by Flash (ie, nobody can just dump anything on my server), will set that to a variable, gets the spangle number from the input box, then gives it a file name. </p>
<p>Overlay image is all about the numbers mine prints on each picture. It makes sure each input it got is valid and puts the right image in the corner. </p>
<p>It then date-stamps the picture and SQLs it up to the database, before uploading the image to the server. If there's an error, it will tell you, and if they're uploading from another source (expandable in the future) it will send them back to the index page.</p>
<p>And that's all I can really show you before you try it yourself and start adapting it for your project. Let us know how it goes for you! </p>
