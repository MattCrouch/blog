---
layout: post
title: Messing Around with the Kinect SDK
date: 2011-10-17 20:55:19
tags:
- C#
- development
- experiment
- game
- Kinect
---
<p>Over the weekend I spent almost every waking hour learning the ins and outs of C# and the soon-to-be beloved Kinect SDK. After following bits of the Quickstart guides <a href="http://mattcrouch.net/blog/2011/10/my-first-kinect-app/">mentioned previously</a> I decided to go it alone and see what came out. There’s a couple of things I’m sure I could share with you, here.</p>
<p>Obviously, if you’re more of a C# expert than I am, please feel free to tell me where to improve. That’s the only way I’m going to learn from my shortfalls!</p>
<p>So this is what I churned out. It might look stupid, but explanations will follow:</p>
<p><a href="http://www.mattcrouch.net/blog/images/44f661349389_11CB7/perspective.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="perspective" alt="perspective" src="{{ site.baseurl }}/assets/perspective_thumb.png" width="321" height="240" /></a></p>
<p>Apart from making what I can only assume is a Mr Blobby anominiser, there’s a couple of features in here that I winged it on – The capture button in the bottom left and the hit counter in the top right.</p>
<h3>Capture button</h3>
<p>The function of this button is simple – You click it and it takes a picture. It’s the kind of thing you <a href="http://www.flickr.com/photos/clopin/5174195627/">see in Kinect Adventures</a>. It can be triggered by doing certain poses, but I didn’t want that hassle while trying to learn it all.</p>
<p>So here’s how it works.</p>
<p>If you’ve been following the SDK (or even just know a thing or two about C# or hardware control) you sign up for the event when the video feed is being shown. In my code, and pretty much all other programs, this defaults to the <font face="Lucida Console">nui_VideoFrameReady</font> method. This method gets fired every time there’s a new video frame that needs to be rendered, which is handy. </p>
<pre class="csharpcode"><span class="kwrd">void</span> nui_VideoFrameReady(<span class="kwrd">object</span> sender, ImageFrameReadyEventArgs e)
        {
            PlanarImage image = e.ImageFrame.Image; <span class="rem">//Allows us to see image data</span>

            userImage.Source = e.ImageFrame.ToBitmapSource();

            <span class="kwrd">if</span> (captureImageNow)
            {
                capturePicture(e.ImageFrame.ToBitmapSource());
            }
        }</pre>
<p><style type="text/css">.csharpcode, .csharpcode pre<br />
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
<p>Importantly, the <em>Coding4Fun</em> library includes a handy function you can use here called <font face="Lucida Console">ToBitmapSource()</font> which, as you may guess, turns the incoming stream of bits and bytes into something visual, essentially. Or at least the code for which to display something as such. </p>
<p>This is the bit where it shows just how noob-y I am at this sort of thing. To get a reference to the image, I just took the reference of <font face="Lucida Console">e</font> from the function itself. I’m sure there’s a better way but hey it works. </p>
<p><font face="Lucida Console">capturePicture()</font> is my own method. It essentially writes whatever variable it’s passed – here a bitmapSource of the Kinect’s RGB camera – to a file <em>new.jpg</em>. This is by no means my code, but it’s pretty standard code out there so I couldn’t attribute the owner. But hey, I’ll share it.</p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">void</span> capturePicture(BitmapSource source)
        {
            <span class="kwrd">int</span> width = 128;
            <span class="kwrd">int</span> height = width;
            <span class="kwrd">int</span> stride = width / 8;
            <span class="kwrd">byte</span>[] pixels = <span class="kwrd">new</span> <span class="kwrd">byte</span>[height * stride];

            <span class="rem">// Define the image palette</span>
            BitmapPalette myPalette = BitmapPalettes.Halftone256;

            <span class="rem">// Creates a new empty image with the pre-defined palette</span>
            BitmapSource image = source;

            FileStream stream = <span class="kwrd">new</span> FileStream(<span class="str">"new.jpg"</span>, FileMode.Create);
            JpegBitmapEncoder encoder = <span class="kwrd">new</span> JpegBitmapEncoder();
            encoder.QualityLevel = 50;
            encoder.Frames.Add(BitmapFrame.Create(image));
            encoder.Save(stream);

            captureImageNow = <span class="kwrd">false</span>;
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
<p>The comments speak for most of what it does, but the end part simply gives it a name, sets the quality level of the jpg, then saves it out. Finally, it sets <font face="Lucida Console">captureImageNow</font> to false, but I’ll come to that in a second.</p>
<p>That block of code generates something not unlike this happy little chappy:</p>
<p><a href="http://www.mattcrouch.net/blog/images/44f661349389_11CB7/new.jpg"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="new" alt="new" src="{{ site.baseurl }}/assets/new_thumb.jpg" width="225" height="169" /></a></p>
<p><font face="Lucida Console">captureImageNow</font> is a boolean defined elsewhere in the project. It’s set to true when the user clicks the button, so on the next cycle, it triggers the if statement within the <font face="Lucida Console">nui_videoFrameReady()</font> method, which saves the picture within <font face="Lucida Console">captureImage()</font>, which in itself then sets it back to false and everything’s fine again. I think.</p>
<h3>Hit Counter</h3>
<p>This one might get a bit confusing as it’s a bit… loosely coded, but it’s a basic hit counter, honest.</p>
<p>Basically, as per one of the Quickstarts, I have balls that follow my head, both hands and my hips. This has been modded (by me messing around, really) so that the further away any of these points are to the camera, they get smaller. Perspective, if you will.</p>
<p>One of the other things, though, is that it checks the speed of my left hand. There’s a previous location of the hand stored elsewhere in the script, and so every time nui_SkeletonFrameReady() gets run, it compares that location to it’s current location. If that’s more than 5cm, then it changes colour depending on how bigger difference it was. If it’s more than 25cm, it counts as a “hit”, for which that counter increases by 1.</p>
<p>It’s so technical, it hurts. But here’s the code behind it:</p>
<pre class="csharpcode"><span class="kwrd">if</span> (skeleton != <span class="kwrd">null</span>)
<span class="rem">//If we're tracking a player</span>
            {
                SetEllipsePosition(headEllipse, skeleton.Joints[JointID.Head]);
                SetEllipsePosition(leftEllipse, skeleton.Joints[JointID.HandLeft]);
                SetEllipsePosition(rightEllipse, skeleton.Joints[JointID.HandRight]);
                SetEllipsePosition(hipCenterEllipse, skeleton.Joints[JointID.HipCenter]);
               <span class="rem">//update the position of the on-screen circles</span>

                var speedOfLeftHand = speedOfJoint(skeleton.Joints[JointID.HandLeft].Position.X, leftHandPos);
               <span class="rem">//Calculate the difference between now and the last frame</span>

                <span class="kwrd">if</span> (speedOfLeftHand &lt;= 0.05)
                {
                    hipCenterEllipse.Fill = <span class="kwrd">new</span> SolidColorBrush(Colors.White);
                    noMovement = <span class="kwrd">true</span>; <span class="rem">//So we don't take multiple hits from one swipe</span>
                }
                <span class="kwrd">else</span> <span class="kwrd">if</span> (speedOfLeftHand &lt;= 0.15)
                {
                    hipCenterEllipse.Fill = <span class="kwrd">new</span> SolidColorBrush(Colors.Yellow);
                }
                <span class="kwrd">else</span> <span class="kwrd">if</span> (speedOfLeftHand &lt;= 0.25)
                {
                    hipCenterEllipse.Fill = <span class="kwrd">new</span> SolidColorBrush(Colors.Orange);
                }
                <span class="kwrd">else</span>
                {
                    hipCenterEllipse.Fill = <span class="kwrd">new</span> SolidColorBrush(Colors.Red);
                    <span class="kwrd">if</span> (noMovement)
                    {
                        hitCounter.Content = Convert.ToDouble(hitCounter.Content) + 1;
                        noMovement = <span class="kwrd">false</span>;
                    }
                }

                leftHandPos = skeleton.Joints[JointID.HandLeft].Position.X;</pre>
<p>And that really speaks for itself, doesn’t it. A bunch of if statements seeing what’s what. </p>
<p>And that’s all that’s really taxing, here. It’s a bunch of stuff <em>somebody </em>might find useful, if not me when I inevitably forget to back up the most important part of my project.</p>
<p>Hey ho, it’s off to work we go…</p>
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
