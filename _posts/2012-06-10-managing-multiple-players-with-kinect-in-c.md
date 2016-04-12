---
layout: post
title: Managing Multiple Players with Kinect in C#
date: 2012-06-10 18:53:00
image: 2012-06-10-managing-multiple-players-with-kinect-in-c/two-players.png
tags:
- C#
- Kinect
- player
- SDK
- skeleton
- tracking
---
I’m no C# expert – in fact, before making [Moto][Moto] I had never touched it before – but I had the task of making a Kinect project which handled multiple players.

The Kinect SDK gives me all the information I really need, but how do you track your players on screen? Who’s who, exactly. It all gets a bit confusing, but I’ll share with you how I accomplished it in Moto. This is by no means a definitive example, just how I accomplished it. Got a better solution? Feel free to make a comment and let me know. Always looking for ways to improve!

[![Two Players of Moto][Two Players]][Two Players]

## What’s needed?

Let’s look at it this way – what do we need to know for the program to function? Well, we need to know who’s in the Kinect’s view at any one time, their position and their limb positions and, in the case of Moto, information about what instrument they’re playing.

The Kinect SDK provides the information you need about the player. It all hinges around one thing – <code>skeleton.TrackingId</code>. This is a unique number provided by the Kinect to track a single player. If someone goes out of shot (out of the frame, or another player steps in front of them) that skeleton is then lost and so is reassigned a new tracking ID. So it’s not flawless, but it’s the best we’re going to get.

Tracking a full skeleton is obviously hard work, so Kinect only allows two full skeletons to be tracked even though it can be aware of the position of up to six people. The SDK also always returns a <code>Skeleton</code> array with a length of 6 within a <code>skeletonFrame</code> so from that you need to only pick up the skeletons with a <code>trackingState</code> of <code>Tracked</code>.

When we’ve found the skeletons that are tracked, it’s a simple case of getting their limb positions. We iterate through the array of skeletons and go from there. 

## Building a catalogue

So now we’ve got all that information, how do we store it? Well in Moto it’s set up as a publically accessible <code>Dictionary</code> called <code>activeSkeletons</code>.

{% highlight csharp %}
public static Dictionary<int, Player> activeSkeletons = new Dictionary<int, Player>();
{% endhighlight %}

Just to confuse things, I’ve got a separate class set up called <code>Player</code>. Inside there:

{% highlight csharp %}
public class Player
{
    public Player()
    {
        skeleton = null;
        instrument = Moto.instrument.instrumentList.None;
        mode = PlayerMode.None;
        instrumentImage = null;
        instrumentOverlay = new Dictionary<int,Image>();
    }

    public Skeleton skeleton { get; set; }
    public instrument.instrumentList instrument { get; set; }
    public PlayerMode mode { get; set; }
    public Image instrumentImage {get; set; }
    public Dictionary<int, Image> instrumentOverlay { get; set; }
}
{% endhighlight %}

So there we have the skeleton information, as well as Moto-specific bits that we associate with the player like what instrument they’re playing, what mode it’s in (in the case of Wall of Sound and the Guitar, mostly), a reference to that instrument’s image on screen associated to them as well as the overlays that we’re showing on them.

We get new information on the states of our skeletons every skeletonFrameReady event fire. In there, we copy our data to our <code>allSkeletons</code> skeleton array. From there we loop through this array and do our business.

## Gaining and Losing skeletons

It’s all well and good on our first frame. We’re going from zero skeletons to either zero, one or two. Either way we are only going to be adding skeletons and not have anything to get rid of from our running Dictionary called <code>activeSkeletons</code>.

As a quick little recap – on every frame ready event we are copying <em>all</em> the skeleton data, tracked or not, to do some crunching with. From there, we loop through that array and keep a note of all the tracked skeletons by copying them over to <code>activeSkeletons</code>. It’s there we do program-specific code running to make sure we’re only processing skeletons on screen. We copy all the skeleton data into this dictionary for processing later so we know it hasn’t changed since we recorded their presence in the frame etc. 

{% highlight csharp %}
[...]
using (SkeletonFrame skeletonFrame = e.OpenSkeletonFrame())
{
    [...]
    skeletonFrame.CopySkeletonDataTo(MainWindow.allSkeletons);

    Skeleton aSkeleton;
    List<int> skeletonList = new List<int>();

    for (int i = 0; i < MainWindow.allSkeletons.Length; i++)
    {
        aSkeleton = MainWindow.allSkeletons[i];

        if (aSkeleton.TrackingState == SkeletonTrackingState.Tracked)
        {
            skeletonList.Add(aSkeleton.TrackingId);

            //A new skeleton?
            if (!MainWindow.activeSkeletons.ContainsKey(aSkeleton.TrackingId))
            {
                MainWindow.playerAdded(aSkeleton);
            }
        }
    }
}
[...]
{% endhighlight %}

On our first frame, <code>activeSkeletons</code> will be empty and so it will not contain any tracked skeleton IDs. So for however many players are visible, <code>playerAdded()</code> is ran. <code>playerAdded() </code>creates blank definitions for a new skeleton and, more importantly, copies the skeleton data into the newly made <code>Player</code> class.

But surely, if we did that all the time <code>activeSkeletons</code> would get huge? True. So further down we do some number crunching to see whether we’ve lost a skeleton. <code>skeletonList</code> is, well, a list of all the skeleton IDs we have processed this frame. After we’ve done adding new skeletons, we iterate through this list and knock off matches between it and the&nbsp; <code>activeSkeletons.skeleton.trackingId</code>’s that we have. When we’ve reached the end of <code>skeletonList</code>, any players left over in <code>activeSkeletons</code> are obviously then no longer with us, so we can do some removal functions. 

{% highlight csharp %}
[...]
if (skeletonList.Count < MainWindow.activeSkeletons.Count)
{
    List<int> activeList = new List<int>(MainWindow.activeSkeletons.Keys);
    //We've lost at least one skeleton
    //find which one(s) it/they are
    for (int i = 0; i < skeletonList.Count; i++)
    {
        if (activeList.Contains(skeletonList[i]))
        {
            activeList.Remove(skeletonList[i]);
        }
    }

    //Remove them
    for (int i = 0; i < activeList.Count; i++)
    {
        MainWindow.playerRemoved(activeList[i]);
    }
}
[...]
{% endhighlight %}

We create a list called <code>activeList</code> because then we can remove them from that, not affecting <code>activeSkeletons</code>, to make our lives easier. <code>playerRemoved()</code> simply clears the dictionaries of all references to skeletons with the supplied tracking ID.

After we’re done processing all that, we can get on with processing everything else we need for our project. For Moto, that’s listening for gestures, detecting hits on drums and whatnot. That’s for another time, though. Sorry.

## Conclusion

So, now we’ve got a record of all the skeletons, we can crunch some data without worrying about whether what we’re doing is for a player who’s not there any more which would be a) pointless, and b) a delightful recipe for crashes. 

To reference any player, we can do so through <code>activeSkeletons</code>. As it has an index of our skeleton’s tracking id, we can address a player by saying <code>activeSkeletons[23].skeleton.Position.Z</code> to get that players distance from the Kinect, for example. That, or loop through it and update the position of on-screen instruments. The possibilities are endless, really.

[Two Players]:{{ site.baseurl }}/assets/2012-06-10-managing-multiple-players-with-kinect-in-c/two-players.png

[Moto]:http://www.mattcrouch.net/moto/