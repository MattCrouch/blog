---
layout: post
title: How 'Steve's So Badass…' works
date: 2010-11-03 15:24:43
image: 2010-11-03-how-steves-so-badass-works/php-coding.png
tags:
- birthday
- fun
- PHP
---
So it was my friend [Steve][Steve Dacombe]'s birthday yesterday, so naturally I should have gotten him a present. Although, if you ever know me as a person, you'll rarely get an *actual* present and usually either a card, some stupid little thing you'll never use, or some one-off hand made thing of awesome. This present was the awesome variety. And a chance to practice some PHP. Awesome.

It's kind of an in joke that Steve is badass. Every now and then someone throws in a statement that makes him sound almost godly (think Chuck Norris Facts on the Internet a while back and you're getting the gist). So the idea – granted, formed in the 5 minute walk from the pub back home – was to make a random generator of [reasons why Steve is so badass][Steve's So Badass]. And this came out:

It just churns out random facts about Steve. Most of them in-jokes, sure, but you get the idea. But I'm sure you're more wondering how I made it seeing as you're at my development blog. Well, it's not exactly that complicated…

I'm a novice PHP coder, so I'm sure there would be more glamorous ways of implementing it, but this is how it works:

[![PHP Code][PHP Code]][PHP Code]

I don't blame you for not looking at that code image. It looks more complex than it is. Trust me.

Basically, there are four arrays set up – verbArray, nounArray, reasonArray and sentenceArray – and they all contain part of, or all of, a reason why Steve is badass. The arrays are filled in a simple line of code such as:

{% highlight php %}
$verbArray = array("ate", "high-fived", "beat up", … , "disrespected");
{% endhighlight %}

The array doesn't need to have a specified length as it will just expand with however many entries it has. It goes from 0 to however many entries you have –1.

My code then assigns a variable – verb, noun, reason and sentence – a random entry from their respective arrays:

{% highlight php %}
$verb = $verbArray[array_rand($verbArray)];
{% endhighlight %}

This code is setting the variable <code>$verb</code> a value based on what number the function <code>array_rand()</code> is picking out.

<code>array_rand()</code> essentially picks a position in the array you specify and gives you that position (say, 2). Then the variable is being assigned <code>$verbArray[2];</code> for example, which corresponds to the entry "beat up". So <code>$verb</code> is now "beat up".

These values then go into making a sentence. It's simply a case of adding the variable onto the end of the string, so it would read "Steve's so badass he <code>$verb $noun $reason</code>". That would show something like "Steve's so badass he beat up a rock while he waited for his train". Verb, noun, reason.

But you'll remember I mentioned a fourth array – sentenceArray – now that was for sentences that didn't fit the 'verb, noun, reason' structure. They went in their own array and I set another randomiser function off to pick whether a 'verb, noun, reason' one or a sentence one showed up.

{% highlight php %}
display = rand(0,10);
{% endhighlight %}

This simply sets the variable <code>$display</code> to a random number between 0 and 10 (that's inclusive).

{% highlight php %}
if ($display <= 7) {
echo “<p>…he “.$verb.” “.$noun.” “.$reason.”</p>”;
} else {
echo “<p>… “.$sentence.”</p>”;
};
{% endhighlight %}

So this, in short, says that if the random number is less than or equal to 7, then it will show a 'verb, noun, reason' sentence, otherwise it would show just a random sentence. It's more likely a 'verb, noun, reason' would show up simply because there's more of them and if I made it an even chance, you're more likely to see the same sentence ones more than once.

And that's it, really. That's how we find out why Steve's so badass. You can see for yourself why [Steve's So Badass][Steve's So Badass].

[PHP Code]:{{ site.baseurl }}/assets/2010-11-03-how-steves-so-badass-works/php-coding.png

[Steve Dacombe]:http://stevedacombe.com/
[Steve's So Badass]:http://mattcrouch.net/experiments/stevessobadass/