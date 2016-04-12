---
layout: post
title: Speech Recognition with the Kinect SDK
date: 2011-11-21 18:41:40
image: 2011-11-21-speech-recognition-with-the-kinect-sdk/kinect-diagram.png
tags:
- C#
- development
- Kinect
- recognition
- SDK
- Speech
- voice
---

Natural User Interfaces are great. They aren’t just an input method, but they adapt to who is using them or indeed how they are using them. We could go into the complexes of NUI here but I’m not going to. Instead I’m going to give you an alternative to the gesture-based user interface you’re used to with Kinect – speech recognition and voice navigation.

## The Kinect’s set-up

[![Kinect Diagram][Kinect Diagram]][Kinect Diagram]

Kinect is built with a four-piece microphone array. It’s not like the microphone on your laptop though. This microphone array allows you to cancel out background sound and also pinpoint the source of a sound within the Kinect’s environment. All that is processed on-board so you don’t have to really worry about it. For an example of that in action, run the ‘KinectAudioDemo’ application in the SDKs Samples folder.

[![Voice Code][Voice Code]][Speech Walkthrough PDF]

The wonderful part of the SDK is that it gives you speech recognition for absolutely nothing. Speech grammars (essentially the commands your project can accept) have, for the most part, been built for you already within the SDK. 

This post isn’t going to detail <em>how </em>to do speech recognition in your apps - there's a [great guide][Speech Walkthrough PDF] on KinectForWindows.org – but I am going to show you how it’s implemented in my project Moto.

## Moto implementation

[![Moto Is Listening][Moto Is Listening]][Moto Is Listening]

Moto listens out for specific keywords structured in my speech definition. There are keywords to start and stop listening, as well as a bunch of other functions. 

{% highlight csharp %}
private void recognizer_SaidSomething(object sender, SpeechRecognizer.SaidSomethingEventArgs e)
{
    if (voiceNavEnabled) //If we are allowing speech commands at this time...
    {
        if (isListening && e.Verb != SpeechRecognizer.Verbs.StartListening && e.Verb != SpeechRecognizer.Verbs.StopListening && e.Verb != SpeechRecognizer.Verbs.YesSaid && e.Verb != SpeechRecognizer.Verbs.NoSaid)
        {
            confirmChoice(e);
            //Display confirmation dialog
        }

        if (e.Verb == SpeechRecognizer.Verbs.StartListening)
        {
            voiceNavListening(true);
            //Start Listening
        }
        else if (e.Verb == SpeechRecognizer.Verbs.StopListening)
        {
            voiceNavListening(false);
            //Stop Listening
        }
    }

    [...]
}
{% endhighlight %}

What this does is, when it detects some sort of word has been spoken, checks the records it has for whether it matches any words I’ve assigned to actions. If it does and it doesn’t match any keywords to start or stop listening as well as any of the confirmation keywords, then submit a confirmation window for that.

[![Confirmation Window][Confirmation Window]][Confirmation Window]

This is what a confirmation window looks like at the moment. It’s obviously still in development phase, but it does the job. 

If it detects what I said was a keyword for start or stop listening, then it will toggle the <code>isListening</code> boolean. <code>isListening</code> is used here to toggle whether it’s… well… listening or not. Running <code>voiceNavListening()</code> toggles that based on the value passed to it.<code> voiceNavListening()</code> can also have a second parameter passed to it that sets <code>voiceNavEnabled</code>, which is a kill-switch for any voice navigation in places you don’t want it happening.

That’s essentially is Moto’s current implementation of speech recognition. It’s not perfect and I’m not a C# expert but it’s getting there. I’ll let you know of further developments.

[Confirmation Window]:{{ site.baseurl }}/assets/2011-11-21-speech-recognition-with-the-kinect-sdk/confirmation-window.png
[Kinect Diagram]:{{ site.baseurl }}/assets/2011-11-21-speech-recognition-with-the-kinect-sdk/kinect-diagram.png
[Moto Is Listening]:{{ site.baseurl }}/assets/2011-11-21-speech-recognition-with-the-kinect-sdk/moto-is-listening.png
[Voice Code]:{{ site.baseurl }}/assets/2011-11-21-speech-recognition-with-the-kinect-sdk/voice-code.png

[Speech Walkthrough PDF]:http://kinectforwindows.org/documents/Speech_Walkthrough.pdf