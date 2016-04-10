---
layout: post
title: Creating a metronome effect in C#
date: 2012-03-04 19:26:45
tags:
- C#
- development
- Metronome
- WPF
---
<p>Metronomes. Key to any aspiring (or even professional) musician. They help you keep in time with the music you’re playing and without it we would be making a complete mess.</p>
<p>So of course Moto needs a metronome, but I thought I would show you the principles behind the somewhat oversimplified code so you can create one in your own project and avoid the pitfalls I fell into.</p>
<h2>The finished product</h2>
<p><a href="http://www.mattcrouch.net/blog/images/Creating-a-metronome-effect-in-C_100A3/image.png"><img style="margin: 0px auto; display: block; float: none;" title="Metronome program" alt="Metronome program" src="{{ site.baseurl }}/assets/image_thumb.png" width="111" height="137" /></a></p>
<p>That is literally it. It’s a big button which you click to the beat. The number represents the time between the metronome ticks. It averages out all the times you click and pumps out that number to a <span style="font-family: Consolas;">dispatcherTimer</span>, but all that’s coming up…</p>
<h2>Setting up the XAML</h2>
<p>I’ve created this in a WPF window with Visual C# Express, so assuming you’re using that or Visual Studio, go ahead and make one of those. Then you can drag on a button called btnBeat on to your window and a label called lblTiming and you’re ready to go!</p>
<h2>The coding ideas</h2>
<p>Some people would have different approaches as to how to do this. This is one way which I found to be the most accurate when dealing with milliseconds as you most likely would be if playing a song for example.</p>
<p>There’s a multitude of timers I could have chosen from: <a href="http://msdn.microsoft.com/en-us/library/system.timers.timer%28v=vs.71%29.aspx"><span style="font-family: Consolas;">System.Timers Timer</span></a> or <a href="http://msdn.microsoft.com/en-us/library/system.windows.threading.dispatchertimer.aspx"><span style="font-family: Consolas;">System.Windows.Threading DispatcherTimer</span></a> to name a couple, but there’s a third one that’s been used a bit out of context that needs a bit of explaining.</p>
<p>There’s two timers – one that is used to capture the times between clicks, and another which is the actual metronome ticking away at the speed set by the first timer. The first is actually a <a href="http://msdn.microsoft.com/en-us/library/system.diagnostics.stopwatch.aspx"><span style="font-family: Consolas;">System.Diagnostics Stopwatch</span></a> and the second is a bog-standard <span style="font-family: Consolas;">DispatcherTimer</span>.</p>
<p><span style="font-family: Consolas;">Stopwatch</span> is usually used for benchmarking – timing events within your program to make sure nothing takes too long for your user, or other machines, or something else entirely. It’s usually used for more technical things than learning the timing for a metronome, but it’s the only one that could provide accurate millisecond data for use with the <span style="font-family: Consolas;">DispatcherTimer</span>.</p>
<p><span style="font-family: Consolas;">Timer</span> and <span style="font-family: Consolas;">DispatcherTimer</span> are only good with keeping vague timings down to 52ms. Anything below that didn’t fire as fast as expected and even things above that didn’t fire dead on when they were supposed to. They are much better used for timings above, say, 100ms. That’s why it’s used for the actual metronome rather than another <span style="font-family: Consolas;">Stopwatch</span> – well, that and this has a Tick event that fires rather than just the Start and Stop commands of the <span style="font-family: Consolas;">Stopwatch</span>.</p>
<p>When we stop our Stopwatch, we can get how many milliseconds it has been running for since it was started or restarted (the difference of which we’ll get to in a sec) and from there give our metronome a speed. Let’s delve right into coding that then, shall we?</p>
<h2>The code behind</h2>
<p>Straight away we’ve got a few variables we need to define:</p>
<pre class="csharpcode">Stopwatch beatTimer = <span class="kwrd">new</span> Stopwatch(); <span class="rem">//Counting the time between clicks</span>
DispatcherTimer metronome = <span class="kwrd">new</span> DispatcherTimer(); <span class="rem">//Playing our metronome tick at our generated pace</span>
<span class="kwrd">long</span> beatCount = 0; <span class="rem">//How many times have we clicked the button?</span>
<span class="kwrd">long</span> beatTime = 0; <span class="rem">//How long should the metronome take between ticks?</span>
<span class="kwrd">long</span> timePile = 0; <span class="rem">//Accumulate the time from the Stopwatch</span>

SoundPlayer metronomeTick = <span class="kwrd">new</span> SoundPlayer(<span class="str">"metronome-tick.wav"</span>); //Metronome ticking sound</pre>
<style type="text/css"><!--<br />
.csharpcode, .csharpcode pre<br />
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
--></style>
<style type="text/css"><!--<br />
.csharpcode, .csharpcode pre<br />
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
--></style>
<p>All these are really important, so put them in before doing any of the stuff below.</p>
<p>In our <span style="font-family: Consolas;">MainWindow()</span> opening class (where the code we need to run at start up is ran) we need to put a reference to a function called <span style="font-family: Consolas;">setupMetronome()</span> which, as I’m sure you guessed, sets up the metronome:</p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">void</span> setupMetronome()
        {
            metronome.Interval = TimeSpan.FromMilliseconds(1000);
            metronome.Tick += <span class="kwrd">new</span> EventHandler(metronome_Tick);
        }

        <span class="kwrd">void</span> metronome_Tick(<span class="kwrd">object</span> sender, EventArgs e)
        {
            metronomeTick.Play();
        }</pre>
<style type="text/css"><!--<br />
.csharpcode, .csharpcode pre<br />
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
--></style>
<p>Here what we’re doing is just giving it a default time of which to tick – once every second – and adding an event listener to listen for that tick. When it ticks, play the ticking noise we defined above. Simples.</p>
<p>Now onto where the beefy stuff happens when you click the button. It’s a bit all over the place, but I’ll explain the best I can:</p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">void</span> btnBeat_Click(<span class="kwrd">object</span> sender, RoutedEventArgs e)
        {
            <span class="kwrd">if</span> (beatTimer.IsRunning)
            {
                beatTimer.Stop();

                <span class="rem">//We're listening for beats, do the number crunching</span>
                <span class="rem">//Register a click as a beat</span>
                beatCount++;

                <span class="rem">//Add time to the time pile</span>
                timePile += beatTimer.ElapsedMilliseconds;

                <span class="rem">//Calculate the average time between clicks</span>
                beatTime = timePile / beatCount;

                <span class="rem">//Update our readout</span>
                lblTiming.Content = beatTime;

                <span class="rem">//If this wasn't the first click, set the metronome appropriately</span>
                <span class="kwrd">if</span> (beatCount &gt; 1)
                {
                    setMetronome(beatTime);
                }
            }
            <span class="rem">//Start the Stopwatch up again</span>
            beatTimer.Restart();
        }</pre>
<style type="text/css"><!--<br />
.csharpcode, .csharpcode pre<br />
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
--></style>
<p>So. First off, if our Stopwatch is currently counting then stop it at this point in time while we crunch some numbers. Then we’re adding 1 to our <span style="font-family: Consolas;">beatCount</span> which is keeping a score of how many times the button is pressed so we can do some averaging, which is done a few lines down. <span style="font-family: Consolas;">timePile</span> is literally just adding up all the time we’ve had since our Stopwatch has been running so we can average it out with the number of clicks.</p>
<p>Finally, after we’ve averaged it all out, we’re updating the form to our new beat time and, if this isn’t the first time we clicked on the button (which we do to start the <span style="font-family: Consolas;">Stopwatch</span>), set the metronome to the averaged speed. When that’s all done restart the <span style="font-family: Consolas;">Stopwatch</span>.</p>
<p>The difference between <span style="font-family: Consolas;">beatTimer.Restart()</span> and <span style="font-family: Consolas;">beatTimer.Start()</span> is that if the <span style="font-family: Consolas;">Stopwatch</span> is stopped then <span style="font-family: Consolas;">Restart()</span> will set the milliseconds it’s been runnning back to 0 and start it off again, whereas <span style="font-family: Consolas;">Start()</span> just starts up again where it left off.</p>
<p>The last bit you need to know is what setMetronome() actually does:</p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">void</span> setMetronome(<span class="kwrd">double</span> milSec)
        {
            metronome.Stop();
            metronome.Interval = TimeSpan.FromMilliseconds(milSec);
            metronome.Start();

            metronomeTick.Play();
        }</pre>
<style type="text/css"><!--<br />
.csharpcode, .csharpcode pre<br />
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
--></style>
<p>It takes a time in milliseconds, sets the interval of metronome to that, restarts it and plays a sound just to confirm it’s done that.</p>
<p>And that’s that. It should create a nice and simple metronome effect. It’s aim is to be transferred into Moto and I’ll detail that in another post. But for now you’ve got the basic principles to make one for yourself in whatever situation you require!</p>
