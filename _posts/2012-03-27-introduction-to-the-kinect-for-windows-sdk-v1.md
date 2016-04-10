---
layout: post
title: Introduction to the Kinect for Windows SDK (v1)
date: 2012-03-27 16:53:48
tags:
- development
- Kinect
- SDK
- v1
- Visual Studio
---
<p>So. You’re new to the Kinect for Windows SDK, or you tried out the beta and are ready for the big time? Awesome. While I’d love to do a walkthrough video like I did for <a href="http://www.youtube.com/watch?v=NTNLhyLbqFo">Beta 2</a> but since the update my screen recorder software doesn’t get on with the Kinect. Bummer. So text it is.</p>
<h2>What you need</h2>
<p>Not a lot is changed in terms of requirements since Beta 2, but if you never tried it before what you need is:</p>
<ul>
<li>A Kinect. Obviously.
<ul>
<li>Either…
<ul>
<li>A Kinect for Xbox 360. You can use this if it came with an external power cord (which it does if you purchased it separate from an Xbox console)</li>
<li>A Kinect for Windows device. Allows you to use your project commercially. But I’m guessing right now you’re only messing around, so you only need the Kinect for Windows hardware if you want Near Mode – detection of depths closer than the 4m minimum for the standard Kinect.</li>
</ul>
</li>
</ul>
</li>
<li>A Windows PC. A standard set up will run it, but for better performance more than the minimum 2GB of RAM and an i5 processor seem to do the job.</li>
<li>Visual Studio 2010. But the Express versions work just as well but just aren’t as flashy. I recommend <a href="http://www.microsoft.com/visualstudio/en-us/products/2010-editions/visual-csharp-express">Visual C# Express</a>.</li>
<li><a href="http://www.microsoft.com/download/en/details.aspx?id=17851">.NET Framework 4.0</a>. If you’re up to date with Windows, though, this shouldn’t be a problem.</li>
</ul>
<p>Then all that remains is to download and install the latest <a href="http://www.microsoft.com/en-us/kinectforwindows/develop/overview.aspx">Kinect for Windows SDK</a>. As of writing, the latest version is 1.0.3.190 if that helps. Inside the install lays everything you need to get your project up and running, including the latest Speech APIs, which are a godsend with Kinect. But that’s for another post.</p>
<p>I would also recommend downloading the <a href="http://c4fkinect.codeplex.com/">Coding4Fun Kinect Toolkit</a> which, as the name suggests, makes coding ever so slightly more fun (which, to be fair, isn’t particularly difficult). Download and save the files somewhere relevant. You only reference them rather than install them so make sure you don’t delete them. Believe me, I’ve done that.</p>
<p>So, with your downloads downloaded and installs installed, plug in your Kinect to a dedicated USB port on your machine and fire up Visual Studio/Visual C# Express and let’s get to it.</p>
<h2>Setting up the development environment</h2>
<p>If you’re new to Visual Studio, no worries. You just need to create a new project by clicking “New Project…” and going to Visual C# and a WPF Application.</p>
<p><a href="http://www.mattcrouch.net/blog/images/Basic-Kinect-for-Windows-v1-application_D897/image.png"><img style="margin: 0px auto; display: block; float: none;" title="New Project" src="{{ site.baseurl }}/assets/image_thumb.png" alt="New Project" width="541" height="330" /></a></p>
<p>Click OK and go to File &gt; Save All straight away. So you don’t forget to save the entire project.</p>
<p>Next you need to add the references to the Kinect SDK and the Coding4Fun Toolkit if you downloaded that. In the Solution Explorer on the right, or by pressing Ctrl + W, then S, right-click the References drop-down and click “Add Reference…”.</p>
<p>In here there’s a lot of stuff you don’t need, but there’s a couple of things you do. First off under the .NET tab there will be a reference component called “Microsoft.Kinect”. Select that and click OK. (If you see “Microsoft.Research.Kinect”, that’s left over from when the SDK was in Beta and make sure you don’t click that one otherwise bad stuff’s going to happen…</p>
<p><a href="http://www.mattcrouch.net/blog/images/Basic-Kinect-for-Windows-v1-application_D897/image_3.png"><img style="margin: 0px auto; display: block; float: none;" title="Add Reference" src="{{ site.baseurl }}/assets/image_thumb_3.png" alt="Add Reference" width="467" height="372" /></a></p>
<h3></h3>
<p>Do the same for Coding4Fun if you got it, but use the Browse tab and find where you saved it. Simple.</p>
<h2>Setting the scene</h2>
<p>You should default to MainWindow.xaml. If not, double click it in the Solution Explorer (Ctrl + W, S)</p>
<p>In the Properties window (Ctrl + W, P), make sure it says Window (and then possibly “&lt;no name&gt;” in grey letters next to it) and find the Width property and set it to 800. Do the same for height, but 350.</p>
<p>From the Toolbox on the left (Ctrl + W, X), under “Common WPF Controls”, click and drag a couple of Images from there onto your Window.</p>
<p><a href="http://www.mattcrouch.net/blog/images/Basic-Kinect-for-Windows-v1-application_D897/Image.png"><img style="margin: 0px auto; display: block; float: none;" title="Image" src="{{ site.baseurl }}/assets/Image_thumb.png" alt="Image" width="333" height="244" /></a></p>
<p>Resize both Image controls to be 320x240 and move one to the far left and the other to the far right of the Window.</p>
<p>Name the one on the left ‘imgColor’ and the other ‘imgDepth’ by clicking where they say “image1” and “image2” respectively and typing that in. That’s what we use to reference them in our C# code later on.</p>
<h2>The code behind</h2>
<p>Click anywhere in the grey area on the MainWindow.xaml view and, inside the Properties panel (Ctrl + W, P) click the Events tab. It should default to showing “Loaded” but if not find it in the list. Double-click it and it will take you into MainWindow.cs, where the magic happens.</p>
<p><a href="http://www.mattcrouch.net/blog/images/Basic-Kinect-for-Windows-v1-application_D897/Loaded.png"><img style="margin: 0px auto; display: block; float: none;" title="Loaded" src="{{ site.baseurl }}/assets/Loaded_thumb.png" alt="Loaded" width="246" height="182" /></a></p>
<p>Your cursor should jump inside the method it just created, but if not click inside <span style="font-family: Consolas;">Window_Loaded</span> and type inside it “<span style="font-family: Consolas;">setupKinect()</span>”. It’s a function we’re about to make to… well… set the Kinect up.</p>
<p>After doing that, outside the method, write out this lovely bit of code:</p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">void</span> SetupKinect()
        {
            <span class="kwrd">if</span> (KinectSensor.KinectSensors.Count &lt;= 0)
            {
                <span class="rem">//If there is no Kinect attached</span>
                <span class="kwrd">this</span>.Title = <span class="str">"No Kinect connected"</span>;
            }
            <span class="kwrd">else</span>
            {
                <span class="rem">//use first Kinect</span>
                sensor = KinectSensor.KinectSensors[0];

                <span class="kwrd">if</span> (sensor.Status == KinectStatus.Connected)<span class="rem">//If the Kinect we've attached isready to go...</span>
                {
                    sensor.ColorStream.Enable();
                    sensor.DepthStream.Enable();
                    <span class="kwrd">try</span>
                    {
                        sensor.Start();
                    }
                    <span class="kwrd">catch</span> (System.IO.IOException)
                    {
                        MessageBox.Show(<span class="str">"One program at a time, please"</span>);
                        <span class="kwrd">throw</span>;
                    }
                    <span class="rem">//Fire a lovely event when we have new data to process</span>
                    sensor.AllFramesReady += <span class="kwrd">new</span> EventHandler&lt;AllFramesReadyEventArgs&gt;(sensor_AllFramesReady);

                }
            }</pre>
<p>Make sure somewhere in your code you have defined what sensor is. It’s a KinectSensor, and you can put that code wherever. I would suggest putting it just above your definition of SetupKinect(). It looks like this:</p>
<p><span style="color: #809ec2;">KinectSensor</span></p>
<pre class="csharpcode"> sensor;</pre>
<p>What all this code does is looks for a Kinect, hooks it up and brings in the RGB and Depth data. All we’re doing is listening for when these things are ready and letting that act on it. That’s <span style="font-family: Consolas;">sensor_AllFramesReady</span>, and we’re coding that now…</p>
<pre class="csharpcode"><span class="kwrd">void</span> sensor_AllFramesReady(<span class="kwrd">object</span> sender, AllFramesReadyEventArgs e)
        {
            <span class="kwrd">using</span>(ColorImageFrame colorFrame = e.OpenColorImageFrame())
            {
                <span class="kwrd">if</span> (colorFrame == <span class="kwrd">null</span>)
                {
                   <span class="rem">//If there is no color frame, do nothing</span>
                    <span class="kwrd">return</span>;
                }
                <span class="rem">//Send the image to the WPF window</span>
                imgColor.Source = colorFrame.ToBitmapSource();
            }

            <span class="kwrd">using</span> (DepthImageFrame depthFrame = e.OpenDepthImageFrame())
            {
                <span class="kwrd">if</span> (depthFrame == <span class="kwrd">null</span>)
                {
                   <span class="rem">//If there is no depth data, do nothing</span>
                    <span class="kwrd">return</span>;
                }
                <span class="rem">//Send the depth data in a visual form to the WPF window</span>
                imgDepth.Source = depthFrame.ToBitmapSource();
            }
        }</pre>
<p>When the event fires, it’s sending information about what’s coming from the Kinect to it through <span style="font-family: Consolas;">e</span>. First we’re using the specific data we need at that time, checking if there’s anything new and, if there is, pushing it to the image controls we created. This is using a Coding4Fun method <span style="font-family: Consolas;">ToBitmapSource()</span> which, you guessed it, converts the 0s and 1s to a <span style="font-family: Consolas;">BitmapSource</span> – the type of thing the image control likes – and saves you the hassle. Sweet.</p>
<p>Finally, flip over to your .xaml file and double-click on the Unloaded event and put “<span style="font-family: Consolas;">stopKinect(sensor)</span>” inside it. We’re defining this function as:</p>
<pre class="csharpcode"><span class="kwrd">void</span> stopKinect(KinectSensor theSensor)
        {
            <span class="kwrd">if</span> (theSensor != <span class="kwrd">null</span>)
            { <span class="rem">//If the sensor is running, stop it</span>
                theSensor.Stop();
            }
        }</pre>
<p>This just stops the Kinect and makes sure it’s not sending data to an application you don’t have open now. Tying it off and all that.</p>
<h2>Wrap up</h2>
<p>Try it. You should, provided all went well, see two images. You in typical colour fashion, then a fuzzy grey image of you and the room your in. That’s the visualised depth data.</p>
<p>You’ve made your first Kinect app. Woo!</p>
