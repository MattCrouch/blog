---
layout: post
title: Speech Recognition with the Kinect SDK
date: 2011-11-21 18:41:40
tags:
- C#
- development
- Kinect
- recognition
- SDK
- Speech
- voice
---
<p>Natural User Interfaces are great. They aren’t just an input method, but they adapt to who is using them or indeed how they are using them. We could go into the complexes of NUI here but I’m not going to. Instead I’m going to give you an alternative to the gesture-based user interface you’re used to with Kinect – speech recognition and voice navigation.</p>
<h3>The Kinect’s set-up</h3>
<p><a href="http://www.mattcrouch.net/blog/images/Speech-Recognition-with-the-Kinect-SDK_FEF1/kinect-diagram.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="kinect-diagram" alt="kinect-diagram" src="{{ site.baseurl }}/assets/kinect-diagram_thumb.png" width="270" height="169" /></a></p>
<p>Kinect is built with a four-piece microphone array. It’s not like the microphone on your laptop though. This microphone array allows you to cancel out background sound and also pinpoint the source of a sound within the Kinect’s environment. All that is processed on-board so you don’t have to really worry about it. For an example of that in action, run the ‘KinectAudioDemo’ application in the SDKs Samples folder.</p>
<p><a href="http://kinectforwindows.org/documents/Speech_Walkthrough.pdf"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="voice code" alt="voice code" src="{{ site.baseurl }}/assets/voice-code.png" width="255" height="169" /></a></p>
<p>The wonderful part of the SDK is that it gives you speech recognition for absolutely nothing. Speech grammars (essentially the commands your project can accept) have, for the most part, been built for you already within the SDK. </p>
<p>This post isn’t going to detail <em>how </em>to do speech recognition in your apps - <a href="http://kinectforwindows.org/documents/Speech_Walkthrough.pdf" target="_blank">there's a great guide on KinectForWindows.org</a> – but I am going to show you how it’s implemented in my project Moto.</p>
<h3>Moto implementation</h3>
<p><a href="http://www.mattcrouch.net/blog/images/Speech-Recognition-with-the-Kinect-SDK_FEF1/Moto-is-listening.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="Moto is listening" alt="Moto is listening" src="{{ site.baseurl }}/assets/Moto-is-listening_thumb.png" width="366" height="169" /></a></p>
<p>Moto listens out for specific keywords structured in my speech definition. There are keywords to start and stop listening, as well as a bunch of other functions. </p>
<p>&nbsp;</p>
<p>
<pre class="csharpcode"><span class="kwrd">private</span> <span class="kwrd">void</span> recognizer_SaidSomething(<span class="kwrd">object</span> sender, SpeechRecognizer.SaidSomethingEventArgs e)
        {
            <span class="kwrd">if</span> (voiceNavEnabled) <span class="rem">//If we are allowing speech commands at this time...</span>
            {
                <span class="kwrd">if</span> (isListening &amp;&amp; e.Verb != SpeechRecognizer.Verbs.StartListening &amp;&amp; e.Verb != 
SpeechRecognizer.Verbs.StopListening &amp;&amp; e.Verb != SpeechRecognizer.Verbs.YesSaid
&amp;&amp; e.Verb != SpeechRecognizer.Verbs.NoSaid)
                {
                    confirmChoice(e);
                    <span class="rem">//Display confirmation dialog</span>
                }

                <span class="kwrd">if</span> (e.Verb == SpeechRecognizer.Verbs.StartListening)
                {
                    voiceNavListening(<span class="kwrd">true</span>);
                    <span class="rem">//Start Listening</span>
                }
                <span class="kwrd">else</span> <span class="kwrd">if</span> (e.Verb == SpeechRecognizer.Verbs.StopListening)
                {
                    voiceNavListening(<span class="kwrd">false</span>);
                    <span class="rem">//Stop Listening</span>
                }
            }
[...]
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
<p>What this does is, when it detects some sort of word has been spoken, checks the records it has for whether it matches any words I’ve assigned to actions. If it does and it doesn’t match any keywords to start or stop listening as well as any of the confirmation keywords, then submit a confirmation window for that.</p>
<p><a href="http://www.mattcrouch.net/blog/images/Speech-Recognition-with-the-Kinect-SDK_FEF1/Confirmation-window.png"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="Confirmation window" alt="Confirmation window" src="{{ site.baseurl }}/assets/Confirmation-window_thumb.png" width="277" height="169" /></a></p>
<p>This is what a confirmation window looks like at the moment. It’s obviously still in development phase, but it does the job. </p>
<p>If it detects what I said was a keyword for start or stop listening, then it will toggle the <font face="Lucida Console">isListening</font> boolean. <font face="Lucida Console">isListening</font> is used here to toggle whether it’s… well… listening or not. Running <font face="Lucida Console">voiceNavListening()</font> toggles that based on the value passed to it.<font face="Lucida Console"> voiceNavListening()</font> can also have a second parameter passed to it that sets <font face="Lucida Console">voiceNavEnabled</font>, which is a kill-switch for any voice navigation in places you don’t want it happening.</p>
<p>That’s essentially is Moto’s current implementation of speech recognition. It’s not perfect and I’m not a C# expert but it’s getting there. I’ll let you know of further developments.</p>
