---
layout: post
title: Playing with the Tweener class
date: 2010-07-05 14:08:29
image: 2010-07-05-playing-with-the-tweener-class/actions-panel.png
tags:
- animation
- AS3
- Tweener
---

For the past couple of summers, I’ve given myself a project to keep my mind at least a little active until it’s time to come use it again in September. This year’s no different, and there’s a few ideas milling around my head, but I want to do something involving Twitter and Flash. 

You’ve seen the stuff I've done in Flash and they’ve pretty much relied on the in-built Tween Class. It had always been a key part of my projects until the people in the know on Twitter pointed me to Tweener. I didn’t have all that much time to work out how that worked, but now I do I thought I’d give it a look. Very handy indeed.

## Downloading Tweener

Pop over to the [Tweener][Tweener] page on Google Pages and download the version that’s relevant to you. The version I got was the stable version for AS3 Flash 9 because, well, everyone loves something described as ‘Stable’.&#160; Download the .zip file and save it somewhere important. Leave it there for now. We’ve got some housekeeping first.

## Installing Tweener

[![Flash Save As][Flash Save As]][Flash Save As]

Fire up Flash and make a new ActionScript 3 file. Save it immediately wherever you want it to live. Generally, I just save stuff to my Desktop, but if you’re picky save it in a folder. It won’t make a difference.

[![Flash Desktop Screenshot][Flash Desktop Screenshot]][Flash Desktop Screenshot]

Flip back to your .zip file of Tweener and open it up. You should see a folder called ‘caurina’. Unzip that file to wherever you saved your .fla file (for me you can see that’s on the Desktop, so that ever so informative screenshot shows you).

Now you’re done! Just keep the folder structure within the Tweener thing you downloaded the same and it should just work. Marvellous.

## Using Tweener

Now I’ve only been messing around with it moving pointless boxes around, so I’ll show you that. But you can tween pretty much anything – Movie Clips, buttons, sounds – you name it.

But first, as ever with AS3, there’s some classes to import. For the basics at least there’s just the one line:

{% highlight actionscript %}
import caurina.transitions.Tweener;
{% endhighlight %}

That just finds the .as file within the folders just like the original Tween Class would. Just pop it in your Actions layer, or indeed wherever you want it (just make sure it’s before using any of the stuff mentioned below). Now it’s just like how you’d tween anything with ActionScript before.

[![Convert to Symbol][Convert to Symbol]][Convert to Symbol]

Create another layer (call it “stuff” or something a little more descriptive) and draw a box on it. In fact, draw anything you like on it. Just make sure you right click and Convert to Symbol. Call that whatever you like too. For ease I’m just going to draw a box and call it ‘mcBox’. It’s a blue box. Boxes are cool.

Now you’ve got that on your stage, give it an instance name of whatever you like. Keep it descriptive (and as a general, boring rule, I just call it what it’s called in the library) so mine’s just called ‘mcBox’. 

That’s it for the set up. Time for some ActionScript! (hooraaaaaayyyy…)

[![Actions Panel][Actions Panel]][Actions Panel]

Pop back to where you put that ‘import’ code and a couple of lines down put this in:

{% highlight actionscript %}
Tweener.addTween(mcBox, {x:100, time:4, transition:&quot;easeOutElastic&quot;});
{% endhighlight %}

Run it and HEY IT WORKS! It should make nice little wobble to x = 100 on your stage, but if it doesn’t move just double check everything I’ve said (or make sure it’s actually visible on stage. D’oh.

Now, I know it looks like a beast, but break it down and it’s pretty easy going. There’s only one thing you absolutely have to put in, and that’s where it says ‘x:100’. You *have* to give it a destination (otherwise why move it?) but just doing that’s as good as saying “mcBox.x = 100”. It doesn’t have any fancy movement.

Other basic parameters you might have used before are where it says ‘time:4’. That means this tween takes 4 seconds to complete. There’s a setting where you can use frames for old times sake, but they suck. 

Different transitions are where it’s at. There I’ve used “easeOutElastic” which, as the name suggests, eases the tween out in a bouncy, elastic manner. There’s a whole tonne of different ones, which you can [look up][Tweener Transitions] in your own time.

You can stack tweens, too. That screenshot above show I’ve got another one moving it to ‘y:100’ and, if you copied the line you’ve got, pasted it below itself and changed x to y, you’d get it moving in a diagonal, happy, bouncy manner. 

There’s an extra parameter on my second tween, too. There’s a delay. Here, there’s no need for eventListeners (but you can have them as well), you can just delay the start of a tween until one’s finished for example. This one just makes mine wobble around a bit more. But hey, wobbling is fun, so it’s okay.

There’s a cornucopia of different parameters and if you have no life you can [read through them][Tweener Docs]. But what I’ve told you above is more than enough to get you playing around. :)

 <object width="400" height="250"><param name="movie" value="{{ site.baseurl }}/assets/2010-07-05-playing-with-the-tweener-class/epic.swf" /><embed src="{{ site.baseurl }}/assets/2010-07-05-playing-with-the-tweener-class/epic.swf" width="400" height="250"></embed></object>

[Actions Panel]:{{ site.baseurl }}/assets/2010-07-05-playing-with-the-tweener-class/actions-panel.png
[Convert to Symbol]:{{ site.baseurl }}/assets/2010-07-05-playing-with-the-tweener-class/convert-to-symbol-mc-box.png
[Flash Desktop Screenshot]:{{ site.baseurl }}/assets/2010-07-05-playing-with-the-tweener-class/flash-desktop-screenshot.png
[Flash Save As]:{{ site.baseurl }}/assets/2010-07-05-playing-with-the-tweener-class/flash-save-as.png

[Tweener]:http://code.google.com/p/tweener/
[Tweener Transitions]:http://hosted.zeh.com.br/tweener/docs/en-us/misc/transitions.html
[Tweener Docs]:http://hosted.zeh.com.br/tweener/docs/en-us/