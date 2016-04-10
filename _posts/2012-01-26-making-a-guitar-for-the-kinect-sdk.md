---
layout: post
title: Making a guitar for the Kinect SDK
date: 2012-01-26 16:32:19
tags:
- C#
- guitar
- instrument
- Kinect
- moto
- SDK
- WPF
---
<p><a href="http://www.mattcrouch.net/moto">Moto</a> is my graduate project on my university course. It involves playing air instruments on the Kinect by mapping them to your body. But of course no band would be complete without at least one guitarist, so that’s what I’ll show you now.</p>
<h3></h3>
<h2>How it functions</h2>
<p><a href="http://www.mattcrouch.net/blog/images/Making-a-guitar-with-the-Kinect-SDK_C614/Guitar-Hero-Controllers.jpg"><img style="margin: 0px auto; display: block; float: none;" title="Guitar Hero Controllers" src="{{ site.baseurl }}/assets/Guitar-Hero-Controllers_thumb.jpg" alt="Guitar Hero Controllers" width="258" height="182" /></a></p>
<p>Now, the way a guitar works in Moto is much like how they work in other music games like <em>Guitar Hero</em> – You’ve got five zones which, when hit, produce a different sound. It’s like a dumbed down version of a real guitar. Trying to emulate a guitar would be ridiculous of course as, well, you might as well just play a guitar.</p>
<p>In principle the further away your hand is from where you strum the lower the note. So, in Moto, five zones will be set up exactly for that. But the problem is this – How do you know where their hand is without any physical buttons to push? The answer? Pythagoras.</p>
<h2>Pythagoras 101</h2>
<p align="center"><strong>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></strong></p>
<p align="left">You remember that from school, right? The length of the hypotenuse squared is equal to the square of the other two sides. Triangles and that.</p>
<p align="left">Here’s me demonstrating what I mean. Hello.</p>
<p align="left"><a href="http://www.mattcrouch.net/blog/images/Making-a-guitar-with-the-Kinect-SDK_C614/guitar-mechanism-overview-1.png"><img style="margin: 0px auto; display: block; float: none;" title="guitar mechanism overview 1" src="{{ site.baseurl }}/assets/guitar-mechanism-overview-1_thumb.png" alt="guitar mechanism overview 1" width="252" height="189" /></a></p>
<p>Just to confuse you, I’m using x, y and z. It still means the same thing. <strong>x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup></strong></p>
<p>So, for arguments sake, say x is 40cm long and y is 30cm long.  30<sup>2</sup> x 40<sup>2</sup> = 900 x 1600 = 2500. The square root of 2500 is 50. So z is 50cm. Simples.</p>
<p>Taking that with more of a view of the Kinect SDK, say I’m strumming at a point where x = 0 and y = 0 – the co-ordinate (0,0) – and my other hand is at the point (-30, -40). The same thing still applies. –30<sup>2</sup> x –40<sup>2</sup> = 50<sup>2</sup>. When you square a negative number, it becomes positive. The length is still 50cm, regardless of direction.</p>
<p align="center"> <a href="http://www.mattcrouch.net/blog/images/Making-a-guitar-with-the-Kinect-SDK_C614/guitar-mechanism-overview-2.png"><img style="display: inline;" title="guitar mechanism overview 2" src="{{ site.baseurl }}/assets/guitar-mechanism-overview-2_thumb.png" alt="guitar mechanism overview 2" width="183" height="137" /></a> <a href="http://www.mattcrouch.net/blog/images/Making-a-guitar-with-the-Kinect-SDK_C614/guitar-mechanism-overview-3.png"><img style="display: inline;" title="guitar mechanism overview 3" src="{{ site.baseurl }}/assets/guitar-mechanism-overview-3_thumb.png" alt="guitar mechanism overview 3" width="183" height="137" /></a></p>
<p>This rule still works whether I’m close or far away from the point where I strum. Z – the line – gets shorter and longer. It’s from that I can work out exactly where my other hand is in relation to the strumming hand.</p>
<p>However, what happens if the player rocks out too hard? They’re not always going to be facing the Kinect head on and might have their hand further away from the Kinect than the strumming hand. Depending how far they turn round, the x value for the other hand is going to get closer and closer to the strumming hand, which will make the z length shorter. Solution? 3D Space.</p>
<p>Yeah. I know. It gets confusing. This diagram doesn’t really help much either, but hear me out.</p>
<p><a href="http://www.mattcrouch.net/blog/images/Making-a-guitar-with-the-Kinect-SDK_C614/guitar-mechanism-overview-4.png"><img style="margin: 0px auto; display: block; float: none;" title="guitar mechanism overview 4" src="{{ site.baseurl }}/assets/guitar-mechanism-overview-4_thumb.png" alt="guitar mechanism overview 4" width="230" height="172" /></a></p>
<p>True, more working out is needed, but instead we’re going to get a better handle on how far the two are apart. All we need to do, though, is do Pythagoras twice. Once to get the length of x in a bigger triangle, which then gives us the z we are looking for.</p>
<p>Consider the picture example above. Our strumming hand is closer to the Kinect than our other hand. So we’ve drawn a cuboid around to connect these points. The first triangle we’re going to look at uses x<sub>1</sub> and y<sub>1 </sub>to get z<sub>1</sub>. x<sub>1 </sub>is the difference in x between the strumming hand and the other hand, and y<sub>1</sub> is the difference in depth between the strumming hand and the other hand. This gives us z<sub>1</sub> – the base of our bigger triangle.</p>
<p>When we’ve worked out z<sub>1</sub>, this gives us the base of our second triangle, which we’ve labeled x<sub>2</sub>. y<sub>2</sub> is the difference in height from the strumming hand and the other hand. Doing Pythagoras’ theorem on this gives us z<sub>2</sub> – the length we want.</p>
<p>I know it’s not straight forward, but it could be a <em>whole lot </em>worse. But let’s work out an example. The strumming hand is at (0, 0, 1) and the other hand is at (40, 60, 1.5).</p>
<p>(0 – 40)<sup>2</sup> + (1 – 1.5)<sup>2</sup> = –40<sup>2</sup> + –2.5<sup>2</sup> = sqrt(1600 + 6.25) = sqrt(1606.25) ≈ 40.08</p>
<p>So 40.08cm is the length of z<sub>1</sub>, so that’s also what x<sub>2 </sub>is.</p>
<p>40.08<sup>2</sup> + (0 – 60)<sup>2</sup> = 40.08<sup>2</sup> + –60<sup>2</sup> = 1606.25 + 3600 = sqrt(4906.25) ≈ 70.04</p>
<p>So z<sup>2 </sup>– the distance between both our hands - is 70.04cm or there about. Phew.</p>
<p>It seems a whole lot of effort to get that tiny bit of information, but from there we can work out what note to actually play.</p>
<h2></h2>
<h2>C-sharpen up</h2>
<p>Within <em>Moto</em> I’ve already got a few functions predefined so I can use them for many things like hand tracking. We’re just going to set one up to work out Pythagoras so, if we need it again, we can use it.</p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">double</span> doPythag(<span class="kwrd">double</span> a, <span class="kwrd">double</span> b)
        {
            <span class="kwrd">double</span> c = Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2));
            <span class="kwrd">return</span>c;
        }</pre>
<p>So now doing two lots of Pythagoras isn’t really a problem. You give it a and b (without squaring them first) and it’ll pump out the square root of c<sup>2</sup> – c. Sweet.</p>
<p>The rest of the guitar essentially borrows code from the drums side of things – it defines an area that it waits for either hand to enter and, when it does, play a sound. But we’ve only got one box, the strumming area called<span style="font-family: Consolas;"> strumArea</span> which, you guessed it, is where we strum with our right hand by default.</p>
<pre class="csharpcode"><span class="kwrd">double</span>[] strumAreaStart = <span class="kwrd">new</span> <span class="kwrd">double</span>[3];
        <span class="kwrd">double</span>[] strumAreaEnd = <span class="kwrd">new</span> <span class="kwrd">double</span>[3];
        <span class="kwrd">bool</span> insideStrumArea = <span class="kwrd">false</span>;

<span class="kwrd">internal</span> <span class="kwrd">void</span> defineStrumArea() {
             <span class="kwrd">double</span> strumSize = 0.4; <span class="rem">//Size of strum area edges (in metres) </span>

             strumAreaStart = <span class="kwrd">new</span> <span class="kwrd">double</span>[] { Convert.ToDouble(skeleton.Joints[JointType.HipCenter].Position.X) - (strumSize / 2), Convert.ToDouble(skeleton.Joints[JointType.HipCenter].Position.Y) - (strumSize / 2),Convert.ToDouble(skeleton.Joints[JointType.HipCenter].Position.Z) - strumSize };

            strumAreaEnd = <span class="kwrd">new</span> <span class="kwrd">double</span>[] { strumAreaStart[0] + (strumSize / 2), strumAreaStart[1] +(strumSize / 2), strumAreaStart[2] + strumSize };

            SetStrumPosition(strum1);
        }</pre>
<p>We’re setting up our strum area at the moment. This function needs to run on every new frame as it’s based on the player’s hip position and so needs to constantly know where it should be checking. It’s just defining numbers which the X, Y and Z values of the hand will need to fall into. <span style="font-family: Consolas;">setStrumPosition()</span> is positioning a graphic on screen. It’s not all that important really.</p>
<p>Next comes the number crunching – the stuff we work out at the start, but now in glorious code! We’re separating that into its own little function for the sake of clean looking code.</p>
<pre class="csharpcode"><span class="kwrd">internal</span> <span class="kwrd">double</span> checkNeckDist(Joint hand)
        {
            Joint hip = skeleton.Joints[JointType.HipCenter];
            <span class="kwrd">double</span> xLength = doPythag((hip.Position.Z - hand.Position.Z), (hip.Position.X - hand.Position.X));

            <span class="kwrd">double</span> neckDist = doPythag(xLength, (hip.Position.Y - hand.Position.Y));

            <span class="kwrd">return</span> neckDist;
        }</pre>
<p>All this is doing is doing what we worked out earlier. If you need a refresher, hit it up above. :)</p>
<p>Lastly, tieing it all together, is another function we are running on every frame. This is checking whether the supplied Joint lies between the X, Y and Z values that we’ve outlined earlier.</p>
<pre class="csharpcode"><span class="kwrd">internal</span> <span class="kwrd">void</span> checkStrum(Joint joint)
        {
            <span class="rem">//Did the player strum just then?</span>

            <span class="kwrd">double</span> posX = joint.Position.X;
            <span class="kwrd">double</span> posY = joint.Position.Y;
            <span class="kwrd">double</span> posZ = joint.Position.Z;

            <span class="kwrd">if</span> (strumAreaStart[0] &lt; posX &amp;&amp; strumAreaEnd[0] &gt; posX &amp;&amp; strumAreaStart[1] &lt; posY &amp;&amp;strumAreaEnd[1] &gt; posY &amp;&amp; strumAreaStart[2] &lt; posZ &amp;&amp; strumAreaEnd[2] &gt; posZ)
                {
                    <span class="kwrd">if</span> (!insideStrumArea)
                    {
                        <span class="kwrd">if</span> (instrumentInUse == 1)
                        {
                            <span class="rem">//Normal guitar stance</span>
                            strumGuitar(checkNeckDist(skeleton.Joints[JointType.HandLeft]));
                        }
                        <span class="kwrd">else</span> <span class="kwrd">if</span> (instrumentInUse == 2)
                        {
                            <span class="rem">//Lefty stance</span>
                            strumGuitar(checkNeckDist(skeleton.Joints[JointType.HandRight]));
                        }
                        insideStrumArea = <span class="kwrd">true</span>;
                    }
                }
                <span class="kwrd">else</span>
                {
                    insideStrumArea = <span class="kwrd">false</span>;
                }
        }</pre>
<p><span style="font-family: Consolas;">instrumentsInUse</span> is a variable within <em>Moto</em> which, funnily enough, tells the program which instrument the player is currently playing. 1 is Guitar and 2 is Lefty Guitar, where the player strums with their left hand instead. We are passing <span style="font-family: Consolas;">strumGuitar</span> the value we’re generating in terms of distance from the hip to the hand. The bigger the number, the lower the sound should be. That’s all <span style="font-family: Consolas;">strumGuitar</span> is doing.</p>
<p>That’s it really. Not <em>all </em>that complex. That’s how it works! :)</p>
