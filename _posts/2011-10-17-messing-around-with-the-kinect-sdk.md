---
layout: post
title: Messing Around with the Kinect SDK
date: 2011-10-17 20:55:19
image: 2011-10-17-messing-around-with-the-kinect-sdk/perspective.png
tags:
- C#
- development
- experiment
- game
- Kinect
---
Over the weekend I spent almost every waking hour learning the ins and outs of C# and the soon-to-be beloved Kinect SDK. After following bits of the Quickstart guides [mentioned previously][My First Kinect App] I decided to go it alone and see what came out. There’s a couple of things I’m sure I could share with you, here.

Obviously, if you’re more of a C# expert than I am, please feel free to tell me where to improve. That’s the only way I’m going to learn from my shortfalls!

So this is what I churned out. It might look stupid, but explanations will follow:

[![Perspective][Perspective]][Perspective]

Apart from making what I can only assume is a Mr Blobby anominiser, there’s a couple of features in here that I winged it on – The capture button in the bottom left and the hit counter in the top right.

## Capture button

The function of this button is simple – You click it and it takes a picture. It’s the kind of thing you see in [Kinect Adventures][Kinect Adventures Flickr]. It can be triggered by doing certain poses, but I didn’t want that hassle while trying to learn it all.

So here’s how it works.

If you’ve been following the SDK (or even just know a thing or two about C# or hardware control) you sign up for the event when the video feed is being shown. In my code, and pretty much all other programs, this defaults to the <code>nui_VideoFrameReady</code> method. This method gets fired every time there’s a new video frame that needs to be rendered, which is handy. 

{% highlight csharp %}
void nui_VideoFrameReady(object sender, ImageFrameReadyEventArgs e)
{
   PlanarImage image = e.ImageFrame.Image; //Allows us to see image data

   userImage.Source = e.ImageFrame.ToBitmapSource();

   if (captureImageNow)
   {
       capturePicture(e.ImageFrame.ToBitmapSource());
   }
}
{% endhighlight %}

Importantly, the *Coding4Fun* library includes a handy function you can use here called <code>ToBitmapSource()</code> which, as you may guess, turns the incoming stream of bits and bytes into something visual, essentially. Or at least the code for which to display something as such. 

This is the bit where it shows just how noob-y I am at this sort of thing. To get a reference to the image, I just took the reference of <code>e</code> from the function itself. I’m sure there’s a better way but hey it works. 

<code>capturePicture()</code> is my own method. It essentially writes whatever variable it’s passed – here a bitmapSource of the Kinect’s RGB camera – to a file *new.jpg*. This is by no means my code, but it’s pretty standard code out there so I couldn’t attribute the owner. But hey, I’ll share it.

{% highlight csharp %}
private void capturePicture(BitmapSource source)
{
    int width = 128;
    int height = width;
    int stride = width / 8;
    byte[] pixels = new byte[height * stride];

    // Define the image palette
    BitmapPalette myPalette = BitmapPalettes.Halftone256;

    // Creates a new empty image with the pre-defined palette
    BitmapSource image = source;

    FileStream stream = new FileStream("new.jpg", FileMode.Create);
    JpegBitmapEncoder encoder = new JpegBitmapEncoder();
    encoder.QualityLevel = 50;
    encoder.Frames.Add(BitmapFrame.Create(image));
    encoder.Save(stream);

    captureImageNow = false;
}
{% endhighlight %}

The comments speak for most of what it does, but the end part simply gives it a name, sets the quality level of the jpg, then saves it out. Finally, it sets <code>captureImageNow</code> to false, but I’ll come to that in a second.

That block of code generates something not unlike this happy little chappy:

<a href="http://www.mattcrouch.net/blog/images/44f661349389_11CB7/new.jpg"><img style="display: block; float: none; margin-left: auto; margin-right: auto" title="new" alt="new" src="{{ site.baseurl }}/assets/new_thumb.jpg" width="225" height="169" /></a>

<code>captureImageNow</code> is a boolean defined elsewhere in the project. It’s set to true when the user clicks the button, so on the next cycle, it triggers the if statement within the <code>nui_videoFrameReady()</code> method, which saves the picture within <code>captureImage()</code>, which in itself then sets it back to false and everything’s fine again. I think.

## Hit Counter

This one might get a bit confusing as it’s a bit… loosely coded, but it’s a basic hit counter, honest.

Basically, as per one of the Quickstarts, I have balls that follow my head, both hands and my hips. This has been modded (by me messing around, really) so that the further away any of these points are to the camera, they get smaller. Perspective, if you will.

One of the other things, though, is that it checks the speed of my left hand. There’s a previous location of the hand stored elsewhere in the script, and so every time nui_SkeletonFrameReady() gets run, it compares that location to it’s current location. If that’s more than 5cm, then it changes colour depending on how bigger difference it was. If it’s more than 25cm, it counts as a “hit”, for which that counter increases by 1.

It’s so technical, it hurts. But here’s the code behind it:

{% highlight csharp %}
if (skeleton != null)
//If we're tracking a player
{
    SetEllipsePosition(headEllipse, skeleton.Joints[JointID.Head]);
    SetEllipsePosition(leftEllipse, skeleton.Joints[JointID.HandLeft]);
    SetEllipsePosition(rightEllipse, skeleton.Joints[JointID.HandRight]);
    SetEllipsePosition(hipCenterEllipse, skeleton.Joints[JointID.HipCenter]);
   //update the position of the on-screen circles

    var speedOfLeftHand = speedOfJoint(skeleton.Joints[JointID.HandLeft].Position.X, leftHandPos);
   //Calculate the difference between now and the last frame

    if (speedOfLeftHand <= 0.05)
    {
        hipCenterEllipse.Fill = new SolidColorBrush(Colors.White);
        noMovement = true; //So we don't take multiple hits from one swipe
    }
    else if (speedOfLeftHand <= 0.15)
    {
        hipCenterEllipse.Fill = new SolidColorBrush(Colors.Yellow);
    }
    else if (speedOfLeftHand <= 0.25)
    {
        hipCenterEllipse.Fill = new SolidColorBrush(Colors.Orange);
    }
    else
    {
        hipCenterEllipse.Fill = new SolidColorBrush(Colors.Red);
        if (noMovement)
        {
            hitCounter.Content = Convert.ToDouble(hitCounter.Content) + 1;
            noMovement = false;
        }
    }

    leftHandPos = skeleton.Joints[JointID.HandLeft].Position.X;
}
{% endhighlight %}

And that really speaks for itself, doesn’t it. A bunch of if statements seeing what’s what. 

And that’s all that’s really taxing, here. It’s a bunch of stuff *somebody *might find useful, if not me when I inevitably forget to back up the most important part of my project.

Hey ho, it’s off to work we go…

[Perspective]:{{ site.baseurl }}/assets/2011-10-17-messing-around-with-the-kinect-sdk/perspective.png
[Example Capture]:{{ site.baseurl }}/assets/2011-10-17-messing-around-with-the-kinect-sdk/example-capture.png

[My First Kinect App]:{{ site.baseurl }}/2011/10/10/my-first-kinect-app.html
[Kinect Adventures Flickr]:http://www.flickr.com/photos/clopin/5174195627/