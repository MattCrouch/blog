---
layout: post
title: Taking a picture with the Kinect using Coding4Fun
date: 2011-11-14 00:16:56
image: 2011-11-14-taking-a-picture-with-the-kinect-using-coding4fun/moto-photo-example.jpg
tags:
- C#
- coding4fun
- development
- image
- IMP
- Kinect
- WPF
---

A while back I detailed my [first foray into Kinect development][Messing Around With The Kinect SDK]. Now I’ve learnt a bit since then, which includes a much simpler way of taking a picture using the Kinect’s RGB camera and saving that to the computer.

This approach uses the [Coding4Fun Kinect][Coding4Fun] library. If you’re not currently using it, then do. It makes life a *whole* lot easier. Download it, import references, hit the using statement. You know the drill.

[![WPF Capture Form][WPF Capture Form]][WPF Capture Form]

I’m going to go ahead and assume you’ve got Kinect firing an RGB image into an image somewhere on your WPF window, correct? The code won’t look a million miles away from this:

{% highlight csharp %}
void nui_VideoFrameReady(object sender, ImageFrameReadyEventArgs e)
{
    PlanarImage image = e.ImageFrame.Image; //Allows us to see image data

    userImage.Source = e.ImageFrame.ToBitmapSource();
}
{% endhighlight %}

We’re plopping ours into an image called <code>userImage</code>. That’s helpfully named, isn’t it…

What we’re going to need to do is create a button in our window to trigger this capture. You could map it to a gesture, or a voice command or something, but we’re going old school.

[![Capture Button][Capture Button]][Capture Button]

Now the code to snap a picture on our button is this:

{% highlight csharp %}
private void btnCaptureImage_Click(object sender, RoutedEventArgs e)
{
    BitmapSource image = (BitmapSource) userImage.Source;
    
    image.Save(DateTime.Now.ToString("ddMMyyyy HHmmss") + ".jpg", ImageFormat.Jpeg);
}
{% endhighlight %}

What we’re doing here is extracting the source of our <code>userImage</code> as a <code>BitmapSource</code>. Then we’re using the Coding4Fun method <code>Save()</code> to save it. It goes into the default place of Bin –> Debug unless told otherwise, I’d imagine. We’re saving it with a unique name based on the system time, as otherwise it would just overwrite the last captured image, and that’s no fun.

[![Moto Photo Example][Moto Photo Example]][Moto Photo Example]

That’s it really. Hope this helps someone!

[Capture Button]:{{ site.baseurl }}/assets/2011-11-14-taking-a-picture-with-the-kinect-using-coding4fun/capture-button.png
[Moto Photo Example]:{{ site.baseurl }}/assets/2011-11-14-taking-a-picture-with-the-kinect-using-coding4fun/moto-photo-example.jpg
[WPF Capture Form]:{{ site.baseurl }}/assets/2011-11-14-taking-a-picture-with-the-kinect-using-coding4fun/capture-button.png

[Messing Around With The Kinect SDK]:http://www.mattcrouch.net/blog/2011/10/17/messing-around-with-the-kinect-sdk.html
[Coding4Fun]:http://c4fkinect.codeplex.com/