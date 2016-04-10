---
layout: post
title: Scaling instruments in Moto
date: 2012-04-23 20:01:28
tags:
- Excel
- Function
- Kinect
- scaling
- SDK
- WPF
---
<p>I’m creating a Kinect experience called <a href="http://www.mattcrouch.net/moto/">Moto</a> at the moment (you’ve probably heard me banging on about it somewhere) where you get to play air instruments for realsies. There’s guitars and drum kits superimposed on the screen it’s magical:</p>
<p align="center"><a href="http://www.mattcrouch.net/blog/images/6dfed4ba259a_1132D/Guitar-overlay.png"><img style="margin: 0px auto; display: block; float: none;" title="Guitar overlay" src="{{ site.baseurl }}/assets/Guitar-overlay_thumb.png" alt="Guitar overlay" width="356" height="280" /></a></p>
<p>But how do you make it follow the player? That bit’s pretty simple. On every frame you just map the dimensions of the image to the appropriate point on the player using <span style="font-family: Consolas;">MapSkeletonPointToColor()</span>. It’s all just Cartesian co-ordinates – X and Y. The real complicated thing is when you get the Z-axis involved. Not exactly used to that.</p>
<p>The method I used to get scaling to work is all but technical. Really. I stuck my hands in the air and took pictures of them.</p>
<p>The room I develop in is pretty small – it’s about 3m between the Kinect’s position and the door. Using my <a href="https://github.com/MattCrouch/Kinect-Limb-Position-Snapshot">Limb Position Snapshot</a> tool (Yeah, it’s on Github, go check that out) I was able to pinpoint 1, 2 and 3 metres away from my Kinect and marked them on the floor with post-it notes. More scientific methods of measurements are available I’m sure.</p>
<p align="center"><a href="http://www.mattcrouch.net/blog/images/6dfed4ba259a_1132D/3-metres.jpg"><img style="display: inline;" title="3 metres" src="{{ site.baseurl }}/assets/3-metres_thumb.jpg" alt="3 metres" width="183" height="137" /></a> <a href="http://www.mattcrouch.net/blog/images/6dfed4ba259a_1132D/2-metres.jpg"><img style="margin: 0px; display: inline;" title="2 metres" src="{{ site.baseurl }}/assets/2-metres_thumb.jpg" alt="2 metres" width="183" height="137" /></a> <a href="http://www.mattcrouch.net/blog/images/6dfed4ba259a_1132D/1-metre.jpg"><img style="display: inline;" title="1 metre" src="{{ site.baseurl }}/assets/1-metre_thumb.jpg" alt="1 metre" width="183" height="137" /></a></p>
<p>Then I stuck my hands out at the width of whatever instrument I was measuring. I knew the neck of the guitar was about 70cm, the drum kit is about a metre wide etc. The images above are the original images for the Wall of Sound before I made it a bit bigger.</p>
<p>Seeing as that poster tube was a fixed width every time I took the picture, I can measure the width in pixels it will be on screen at 3, 2 and 1 metre away.</p>
<p><a href="http://www.mattcrouch.net/blog/images/6dfed4ba259a_1132D/image.png"><img style="margin: 0px auto; display: block; float: none;" title="Photoshop measurements" src="{{ site.baseurl }}/assets/image_thumb.png" alt="Photoshop measurements" width="392" height="360" /></a></p>
<p>Then you just chuck it into Excel and make a graph out of it.</p>
<p><a href="http://www.mattcrouch.net/blog/images/6dfed4ba259a_1132D/Excel.png"><img style="margin: 0px auto; display: block; float: none;" title="Excel" src="{{ site.baseurl }}/assets/Excel_thumb.png" alt="Excel" width="357" height="286" /></a></p>
<p>As your Maths teacher drilled into you in school the more points you can get the more accurate your graph will be, but because I’m stupid I used only 3 points.</p>
<p>Inputting the distances in centimetres (metres is a better idea, as Kinect sees Z in metres) alongside the width in pixels and going to Insert –&gt; Scatter Graph you get this lovely graph. Right click a point and going to ‘Format Trendline’ brings this box up. Click ‘Exponential’ on the trend type and the ‘Display Equation on chart’ checkbox and close.</p>
<p><a href="http://www.mattcrouch.net/blog/images/6dfed4ba259a_1132D/image_3.png"><img style="margin: 0px auto; display: block; float: none;" title="Format Trendline" src="{{ site.baseurl }}/assets/image_thumb_3.png" alt="Format Trendline" width="331" height="381" /></a></p>
<p>That’s what gives you that funky ‘y =’ number on the graph. Copy that, jump into whatever is aligning the graphic and change it into some meaningful value. I created a function for mine so I could reuse it in different places, making a separate equation for each width.</p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">double</span> scaledWidth(MainWindow.Player player)
        {
            <span class="rem">//y = 696.24e-0.007x</span>

            <span class="rem">//Player distance (Converted to centimetres)</span>
            <span class="kwrd">double</span> distance = player.skeleton.Position.Z * 100;

            <span class="kwrd">double</span> width = 1112.5 * Math.Pow(Math.E, -0.006 * distance);

            <span class="kwrd">return</span> width;
        }</pre>
<p>So given the player’s Z position as X in the function it spits out a width for the function. In WPF supply a FrameworkObject a width or a height and it will scale it proportionally. Instant scaling. Sorted.</p>
