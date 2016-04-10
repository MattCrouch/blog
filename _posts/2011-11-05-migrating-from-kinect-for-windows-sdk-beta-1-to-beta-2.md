---
layout: post
title: Migrating from Kinect for Windows SDK Beta 1 to Beta 2
date: 2011-11-05 17:42:00
tags:
- Beta
- C#
- code
- development
- Kinect
- migration
---
<p>I’m a bit of a newbie when it comes to C# programming in it’s entirety, not just with Kinect development. So when it was announced <a href="http://kinectforwindows.org/">Beta 2 was available</a> I pounced unknowingly into the undocumented depths of version migration. While the Kinect for Windows team have done a fine job with the update, it’s just not that well documented for average Joes like me.</p>
<p>Beta 2 improves on Beta 1 by giving us a few performance enhancements. Key improvements include improved skeletal tracking accuracy and proficiency, as well as support for changes in the Kinect status (for example, unplugged, underpowered etc.) which will solve a great deal of problems from a user perspective.</p>
<p>So, after a bit of tinkering and such, I’ve upgraded my projects to the basics of Beta 2 and here’s how.</p>
<h2></h2>
<h2>Download and Install the SDK</h2>
<h3>Download the updated SDK</h3>
<p><a href="http://www.mattcrouch.net/blog/images/Migrating-from_EEA7/Download-the-SDK.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="Download the SDK" alt="Download the SDK" src="{{ site.baseurl }}/assets/Download-the-SDK_thumb.png" width="447" height="128" /></a></p>
<p>Bit of an obvious one, this one. Go and download the official SDK from the fancy new Kinect for Windows website at <a href="http://kinectforwindows.org/" target="_blank">KinectForWindows.org</a>. They’ve made it pretty obvious where to download it from, just make sure you download the right version for your system.</p>
<p><em>Side note (one that I missed first time round) – if you use the Coding4Fun Kinect toolkit, you can grab the updated version of that over at </em><a href="http://c4fkinect.codeplex.com/" target="_blank"><em>CodePlex</em></a><em>.</em></p>
<h3>BEFORE YOU INSTALL</h3>
<p>Make sure you’ve:</p>
<ol>
<li>Unplugged your Kinect device from the USB port. </li>
<li>Closed Visual Studio – or whatever other development tool – completely.</li>
<li>Uninstalled previous versions of the SDK (and any third party drivers).</li>
</ol>
<h3>Install the SDK</h3>
<p>Once you’ve done all those steps, you can install the SDK as usual. The SDK comes with updated sample apps that include all the new functionality that comes with Beta 2. The Audio demo now has it’s own sample app, which is great and was one of the quickstarts that I found most interesting. </p>
<p><a href="http://www.mattcrouch.net/blog/images/Migrating-from_EEA7/Sound-App.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="Sound App" alt="Sound App" src="{{ site.baseurl }}/assets/Sound-App_thumb.png" width="196" height="169" /></a></p>
<p>If you want to see what makes these sample apps tick, they have included a ‘Samples.zip’ folder within the SDK folder in the Start Menu for you to unzip somewhere and dive into. Just be aware it’s not going to let you unzip the contents in it’s current location, so just make a new folder on your desktop. </p>
<p><em>If you’re using Coding4Fun, make sure you’ve extracted and saved the contents of the downloaded .zip file somewhere save. We’ll be sorting out this in a second. If you save over the original files, it will actually save you from doing the steps later on.</em></p>
<h2>Migrating projects</h2>
<p>This bit isn’t particularly difficult. Your current code <em>should </em>work with Beta 2, just that the way of doing things has been tidied up. But before we do that, there’s a bit of housekeeping to do…</p>
<h3>Update your Resources</h3>
<p><a href="http://www.mattcrouch.net/blog/images/Migrating-from_EEA7/Solution-Explorer-Error-Resources.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="Solution Explorer Error Resources" alt="Solution Explorer Error Resources" src="{{ site.baseurl }}/assets/Solution-Explorer-Error-Resources_thumb.png" width="216" height="169" /></a></p>
<p>Inside Visual Studio, you’ll be used to your Solution Explorer. Inside your References folder, though, you might not be. It’s here where you imported the important bits for the Kinect SDK to work in the first place. You’ll note that now ‘Microsoft.Research.Kinect’ has a little error notification on it, simply because V1.0.0.0 isn’t there any more. </p>
<p><em>If you’re using Coding4Fun, then feel free to delete that entry, too. It won’t have an error notification on it if it’s still in the place you stored it originally, but we’re going to create a reference to the new one in a second anyway.</em></p>
<p>To update it, right click the icon or name and click ‘Delete’. It’s not going to do anything drastic – your code might go a bit crazy with the red squiggly lines, though – but we’re just making room for the new reference file.</p>
<p><a href="http://www.mattcrouch.net/blog/images/Migrating-from_EEA7/Add-New-Reference.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="Add New Reference" alt="Add New Reference" src="{{ site.baseurl }}/assets/Add-New-Reference_thumb.png" width="293" height="200" /></a></p>
<p>As I’m sure you did before, you need to add your reference file in again. It’s exactly the same as how you added it before, just make sure the version number is 1.0.0.45 (or, indeed, <em>not </em>the version number of Beta 1 or the original Beta).</p>
<p><a href="http://www.mattcrouch.net/blog/images/Migrating-from_EEA7/Coding4Fun-Resource.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="Coding4Fun Resource" alt="Coding4Fun Resource" src="{{ site.baseurl }}/assets/Coding4Fun-Resource_thumb.png" width="391" height="100" /></a></p>
<p><em>Coding4Fun should be added at this point, too. Although it might not have a difference version number. Browse for it’s location, or if you saved the new one over the old one, select it from your Recent tab.</em></p>
<h3>Updating code</h3>
<p>Like I said previously, your code should continue to run fine regardless. But to take advantage (or allow us too easily in the future) of some of the key improvements in Beta 2, there’s a bit of rejigging that needs to happen.</p>
<pre class="csharpcode"><span class="rem">//Kinect Runtime</span>
        Runtime nui;</pre>
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
<p>This is our new way of referencing the nui runtime. <font face="Consolas">Runtime nui = new Runtime();</font> still works, but is depreciated. The reason for this is because Beta 2 now allows easier use of multiple Kinect sensors on one computer, as well as the ability to preserve runtime after uninitializing it. If you’re only ever going to use one sensor in your application, you can hardcode <font face="Consolas">nui = Runtime.Kinects[0];</font> as you please, but the sample applications have a new way of setting up the development environment.</p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">void</span> SetupKinect()
        {
            <span class="kwrd">if</span> (Runtime.Kinects.Count == 0)
            {
                <span class="kwrd">this</span>.Title = <span class="str">"No Kinect connected"</span>;
            }
            <span class="kwrd">else</span>
            {
                <span class="rem">//use first Kinect</span>
                nui = Runtime.Kinects[0];

                <span class="rem">//setup event handlers</span>
                nui.VideoFrameReady += <span class="kwrd">new</span> EventHandler&lt;ImageFrameReadyEventArgs&gt;(nui_VideoFrameReady);
                nui.DepthFrameReady += <span class="kwrd">new</span> EventHandler&lt;ImageFrameReadyEventArgs&gt;(nui_DepthFrameReady);

                <span class="rem">//Initialize to return both Color &amp; DepthAndPlayerIndex images</span>
                nui.Initialize(RuntimeOptions.UseColor | RuntimeOptions.UseDepthAndPlayerIndex);

                <span class="rem">//open both streams</span>
                nui.VideoStream.Open(ImageStreamType.Video, 2, ImageResolution.Resolution640x480, ImageType.Color);
                nui.DepthStream.Open(ImageStreamType.Depth, 2, ImageResolution.Resolution320x240, ImageType.DepthAndPlayerIndex);
            }
        }</pre>
<p><font face="Consolas">SetupKinect()</font> is a function that, when called, does the job you probably did in <font face="Consolas">Window_Loaded()</font> previously. Through putting it in it’s own function though you are able to run it when a new Kinect is plugged in, or the previous one has been plugged back in. So it shouldn’t need to churn through another <font face="Consolas">Runtime</font> when plugged in, and also not crash. That’s quite important. </p>
<p>This function can be expanded so that it does things for each Kinect sensor installed. <font face="Consolas">Runtime.Kinects[]</font> stores a reference to each sensor. Just loop through that.</p>
<p>Replace the event handlers and such from your <font face="Consolas">Window_Loaded()</font> method with <font face="Consolas">SteupKinect()</font> and you’re on your way. </p>
<h2>Wrap up</h2>
<p>There’s tonnes more out there with the Kinect SDK, not just updated in Beta 2. If I come across something particularly useful that I’m able to explain, then you’ll be the first to know!</p>
<p>Follow my development… developments on Twitter <a href="http://twitter.com/#!/pkmntrainermatt" target="_blank">@PkMnTrainerMatt</a> and you’ll see where I’m at with my Kinect work there. Safe coding. :)</p>
