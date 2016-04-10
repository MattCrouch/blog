---
layout: post
title: Photoshop to Illustrator to SVG
date: 2014-07-14 09:00:05
image: 2014-07-14-animating-a-svg-with-css/editing-cave-image.png
tags:
- cinolla
- graphics
- illustrator
- photoshop
- svg
---

I'm not really a graphics guy. I pretty much stay away from the stuff unless I have to. But I decided to spruce up Cinolla's error pages with a bit more than it's current 'Something Went Wrong' message to something a bit more user-friendly.

As Cinolla is all about activity centres, I decided I wanted a little guy lost in a cave. Thankfully, all the little promo bits and pieces for Cinolla use a simplistic art style that I think even I could have a stab at replicating. So I jumped into Photoshop and gave it a stab.

Yeah. Photoshop.

[![Cinolla Cave 404 Character][Cave 404]][Cave 404]

## Photoshop's a bad idea

Photoshop is for photos. It clearly says it in the name of the thing, but yet anything graphic-y and it's my go-to program. We never learned anything else in uni for images, so I just stick with what I know basically. I knew doing it in rasterised graphics is going to lead to a bad time later on, so I had the foresight to at least do the little guy in shape paths.

[![Editing Cave Character][Editing Cave Image]][Editing Cave Image]

Essentially he's made up of shape paths and the Pen Tool - two things I've neglected in learning Photoshop, so it's probably not done right. [There's better people out there than me][Photoshop Pen Tool], but I remain convinced not one person knows how to *actually* use the Pen Tool correctly...

But what happens when you're done? You're stuck with a static image. That's not exactly fun. At a company where we're cutting edge as far as booking systems are concerned, a static image just seemed... predictable. I wanted to try something new, so I tried out Illustrator.

## Illustrator's a better idea

Illustrator's much better equipped for this style of graphic, certainly. It has one crucial feature over Photoshop though. You can export to SVG. As we're going to be on a webpage, that's great news. It's an image, but we can adjust it as we like later on in CSS.

While I've used Illustrator in the past and know a few basic features, I've got no experience with SVG. Doing this was certainly an experience. I just assumed SVG was all kinds of complicated and not for me, but really the process from illustrator isn't all that hard.

But thankfully someone at Adobe made life pretty easy for me, as you can just simply open Photoshop files in Illustrator and, assuming they're all done with paths, will translate perfectly. No redrawing required for me. That's great, as it took long enough to make him look like that...

## Illustrator to SVG

Adobe remain in my good books because they make it simple to get an SVG out of Illustrator, too. It's just a case of File -> Save As... -> .svg. There's a few more options to take care of, but the default won't serve you too badly.

[![Illustrator SVG Settings][Illustrator SVG Settings]][Illustrator SVG Settings]

These are the settings I used. Fonts shouldn't be a problem, but you can convert those to paths too should you need to. The big ones to look out for though are the Decimal Places field and the Responsive checkbox (if you've got the newest version of Illustrator, which I don't, sadly) - both under the 'More Options' button.

Decimal Places is, as it sounds, rounding your paths to a certain number of decimal places. The bigger number here, the larger your file will be, but the more true to your Illustrator file. Too small a number and it will start moving points out of place and your image will look strange. 2 served me well.

The Responsive checkbox, again as it sounds, changes the image to resize with the browser. If you don't have it (like me) fear not. There's hope yet.

Open up the newly created .svg file in a text editor and look what it's made:

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0) -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="762px"
 height="811px" viewBox="0 0 762 811" enable-background="new 0 0 762 811" xml:space="preserve">
{% endhighlight %}

I must admit I was surprised how neat the code looked (having never used a generator like this since [FrontPage][FrontPage] - HTML which, as any 90s/00s geek will tell you, was never a good plan) but it still generates stuff you don't need. You can trim this top bit down to the bare bones:

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>

<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 762 811" xml:space="preserve">
{% endhighlight %}

...and you're pretty much good to go.

I'll do another post to sum up how to put SVGs into your web page, then how to animate them to look pretty funky. But that should get you using SVGs for things for now. They're great for simple graphics, icons or anything that would need to scale. [Browser support][Can I Use? SVG] is pretty good right now. So why not give it a try?

[Cave 404]:{{ site.baseurl }}/assets/2014-07-14-animating-a-svg-with-css/cave-404.png
[Editing Cave Image]:{{ site.baseurl }}/assets/2014-07-14-animating-a-svg-with-css/editing-cave-image.png
[Illustrator SVG Settings]:{{ site.baseurl }}/assets/2014-07-14-animating-a-svg-with-css/illustrator-svg-settings.png

[Photoshop Pen Tool]:https://www.google.co.uk/search?q=Photoshop+Pen+Tool
[FrontPage]:http://en.wikipedia.org/wiki/Microsoft_FrontPage
[Can I Use? SVG]:http://caniuse.com/svg