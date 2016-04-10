---
layout: post
title: Managing Multiple Players with Kinect in C#
date: 2012-06-10 18:53:00
tags:
- C#
- Kinect
- player
- SDK
- skeleton
- tracking
---
<p>I’m no C# expert – in fact, before making <a href="http://www.mattcrouch.net/moto/">Moto</a> I had never touched it before – but I had the task of making a Kinect project which handled multiple players.</p>
<p>The Kinect SDK gives me all the information I really need, but how do you track your players on screen? Who’s who, exactly. It all gets a bit confusing, but I’ll share with you how I accomplished it in Moto. This is by no means a definitive example, just how I accomplished it. Got a better solution? Feel free to make a comment and let me know. Always looking for ways to improve!</p>
<p><a href="http://www.mattcrouch.net/blog/images/Managing-Multiple-Players-with-Kinect-in_EAB8/Two-Players.png"><img style="margin: 0px auto; display: block; float: none" title="Two Players" alt="Two Players" src="{{ site.baseurl }}/assets/Two-Players_thumb.png" width="265" height="199" /></a></p>
<h2>What’s needed?</h2>
<p>Let’s look at it this way – what do we need to know for the program to function? Well, we need to know who’s in the Kinect’s view at any one time, their position and their limb positions and, in the case of Moto, information about what instrument they’re playing.</p>
<p>The Kinect SDK provides the information you need about the player. It all hinges around one thing – <font face="Consolas">skeleton.TrackingId</font>. This is a unique number provided by the Kinect to track a single player. If someone goes out of shot (out of the frame, or another player steps in front of them) that skeleton is then lost and so is reassigned a new tracking ID. So it’s not flawless, but it’s the best we’re going to get.</p>
<p>Tracking a full skeleton is obviously hard work, so Kinect only allows two full skeletons to be tracked even though it can be aware of the position of up to six people. The SDK also always returns a <font face="Consolas">Skeleton</font> array with a length of 6 within a <font face="Consolas">skeletonFrame</font> so from that you need to only pick up the skeletons with a <font face="Consolas">trackingState</font> of <font face="Consolas">Tracked</font>.</p>
<p>When we’ve found the skeletons that are tracked, it’s a simple case of getting their limb positions. We iterate through the array of skeletons and go from there. </p>
<h2>Building a catalogue</h2>
<p>So now we’ve got all that information, how do we store it? Well in Moto it’s set up as a publically accessible <font face="Consolas">Dictionary</font> called <font face="Consolas">activeSkeletons</font>. </p>
<pre class="csharpcode"><span class="kwrd">public</span> <span class="kwrd">static</span> Dictionary&lt;<span class="kwrd">int</span>, Player&gt; activeSkeletons = <span class="kwrd">new</span> Dictionary&lt;<span class="kwrd">int</span>, Player&gt;();</pre>
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
<p>Just to confuse things, I’ve got a separate class set up called <font face="Consolas">Player</font>. Inside there:</p>
<pre class="csharpcode"><span class="kwrd">public</span> <span class="kwrd">class</span> Player
        {
            <span class="kwrd">public</span> Player()
            {
                skeleton = <span class="kwrd">null</span>;
                instrument = Moto.instrument.instrumentList.None;
                mode = PlayerMode.None;
                instrumentImage = <span class="kwrd">null</span>;
                instrumentOverlay = <span class="kwrd">new</span> Dictionary&lt;<span class="kwrd">int</span>,Image&gt;();
            }

            <span class="kwrd">public</span> Skeleton skeleton { get; set; }
            <span class="kwrd">public</span> instrument.instrumentList instrument { get; set; }
            <span class="kwrd">public</span> PlayerMode mode { get; set; }
            <span class="kwrd">public</span> Image instrumentImage {get; set; }
            <span class="kwrd">public</span> Dictionary&lt;<span class="kwrd">int</span>, Image&gt; instrumentOverlay { get; set; }
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
<p>So there we have the skeleton information, as well as Moto-specific bits that we associate with the player like what instrument they’re playing, what mode it’s in (in the case of Wall of Sound and the Guitar, mostly), a reference to that instrument’s image on screen associated to them as well as the overlays that we’re showing on them.</p>
<p>We get new information on the states of our skeletons every skeletonFrameReady event fire. In there, we copy our data to our <font face="Consolas">allSkeletons</font> skeleton array. From there we loop through this array and do our business.</p>
<h2>Gaining and Losing skeletons</h2>
<p>It’s all well and good on our first frame. We’re going from zero skeletons to either zero, one or two. Either way we are only going to be adding skeletons and not have anything to get rid of from our running Dictionary called <font face="Consolas">activeSkeletons</font>.</p>
<p>As a quick little recap – on every frame ready event we are copying <em>all</em> the skeleton data, tracked or not, to do some crunching with. From there, we loop through that array and keep a note of all the tracked skeletons by copying them over to <font face="Consolas">activeSkeletons</font>. It’s there we do program-specific code running to make sure we’re only processing skeletons on screen. We copy all the skeleton data into this dictionary for processing later so we know it hasn’t changed since we recorded their presence in the frame etc. </p>
<pre class="csharpcode">[...]
<span class="kwrd">using</span> (SkeletonFrame skeletonFrame = e.OpenSkeletonFrame())
            {
                [...]
                skeletonFrame.CopySkeletonDataTo(MainWindow.allSkeletons);

                Skeleton aSkeleton;
                List&lt;<span class="kwrd">int</span>&gt; skeletonList = <span class="kwrd">new</span> List&lt;<span class="kwrd">int</span>&gt;();

                <span class="kwrd">for</span> (<span class="kwrd">int</span> i = 0; i &lt; MainWindow.allSkeletons.Length; i++)
                {
                    aSkeleton = MainWindow.allSkeletons[i];

                    <span class="kwrd">if</span> (aSkeleton.TrackingState == SkeletonTrackingState.Tracked)
                    {
                        skeletonList.Add(aSkeleton.TrackingId);

                        <span class="rem">//A new skeleton?</span>
                        <span class="kwrd">if</span> (!MainWindow.activeSkeletons.ContainsKey(aSkeleton.TrackingId))
                        {
                            MainWindow.playerAdded(aSkeleton);
                        }
                    }
                }
[...]</pre>
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
<p>On our first frame, <font face="Consolas">activeSkeletons</font> will be empty and so it will not contain any tracked skeleton IDs. So for however many players are visible, <font face="Consolas">playerAdded()</font> is ran. <font face="Consolas">playerAdded() </font>creates blank definitions for a new skeleton and, more importantly, copies the skeleton data into the newly made <font face="Consolas">Player</font> class.</p>
<p>But surely, if we did that all the time <font face="Consolas">activeSkeletons</font> would get huge? True. So further down we do some number crunching to see whether we’ve lost a skeleton. <font face="Consolas">skeletonList</font> is, well, a list of all the skeleton IDs we have processed this frame. After we’ve done adding new skeletons, we iterate through this list and knock off matches between it and the&nbsp; <font face="Consolas">activeSkeletons.skeleton.trackingId</font>’s that we have. When we’ve reached the end of <font face="Consolas">skeletonList</font>, any players left over in <font face="Consolas">activeSkeletons</font> are obviously then no longer with us, so we can do some removal functions. </p>
<pre class="csharpcode">[...]
<span class="kwrd">if</span> (skeletonList.Count &lt; MainWindow.activeSkeletons.Count)
                {
                    List&lt;<span class="kwrd">int</span>&gt; activeList = <span class="kwrd">new</span> List&lt;<span class="kwrd">int</span>&gt;(MainWindow.activeSkeletons.Keys);
                    <span class="rem">//We've lost at least one skeleton</span>
                    <span class="rem">//find which one(s) it/they are</span>
                    <span class="kwrd">for</span> (<span class="kwrd">int</span> i = 0; i &lt; skeletonList.Count; i++)
                    {
                        <span class="kwrd">if</span> (activeList.Contains(skeletonList[i]))
                        {
                            activeList.Remove(skeletonList[i]);
                        }
                    }

                    <span class="rem">//Remove them</span>
                    <span class="kwrd">for</span> (<span class="kwrd">int</span> i = 0; i &lt; activeList.Count; i++)
                    {
                        MainWindow.playerRemoved(activeList[i]);
                    }
[...]</pre>
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
<p>We create a list called <font face="Consolas">activeList</font> because then we can remove them from that, not affecting <font face="Consolas">activeSkeletons</font>, to make our lives easier. <font face="Consolas">playerRemoved()</font> simply clears the dictionaries of all references to skeletons with the supplied tracking ID.</p>
<p>After we’re done processing all that, we can get on with processing everything else we need for our project. For Moto, that’s listening for gestures, detecting hits on drums and whatnot. That’s for another time, though. Sorry.</p>
<h2>Conclusion</h2>
<p>So, now we’ve got a record of all the skeletons, we can crunch some data without worrying about whether what we’re doing is for a player who’s not there any more which would be a) pointless, and b) a delightful recipe for crashes. </p>
<p>To reference any player, we can do so through <font face="Consolas">activeSkeletons</font>. As it has an index of our skeleton’s tracking id, we can address a player by saying <font face="Consolas">activeSkeletons[23].skeleton.Position.Z</font> to get that players distance from the Kinect, for example. That, or loop through it and update the position of on-screen instruments. The possibilities are endless, really.</p>
