---
layout: post
title: How 'Steve's So Badass…' works
date: 2010-11-03 15:24:43
tags:
- birthday
- fun
- PHP
---
<p>So it was my friend <a href="http://stevedacombe.com/">Steve</a>'s birthday yesterday, so naturally I should have gotten him a present. Although, if you ever know me as a person, you'll rarely get an <em>actual</em> present and usually either a card, some stupid little thing you'll never use, or some one-off hand made thing of awesome. This present was the awesome variety. And a chance to practice some PHP. Awesome.</p>
<p>It's kind of an in joke that Steve is badass. Every now and then someone throws in a statement that makes him sound almost godly (think Chuck Norris Facts on the Internet a while back and you're getting the gist). So the idea – granted, formed in the 5 minute walk from the pub back home – was to make a random generator of reasons why Steve is so badass. And this came out:</p>
<p style="text-align: center;"><a href="http://mattcrouch.net/experiments/stevessobadass/"><img class="aligncenter" style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border: 0px;" title="Steve's So Badass" src="{{ site.baseurl }}/assets/Steves-So-Badass.png" border="0" alt="Steve's So Badass" width="344" height="181" /></a></p>
<p>It just churns out random facts about Steve. Most of them in-jokes, sure, but you get the idea. But I'm sure you're more wondering how I made it seeing as you're at my development blog. Well, it's not exactly that complicated…</p>
<p>I'm a novice PHP coder, so I'm sure there would be more glamorous ways of implementing it, but this is how it works:</p>
<p style="text-align: center;"><a href="http://www.mattcrouch.net/blog/images/How-Steves-So-Badass-works_D190/PHP-coding.png"><img class="aligncenter" style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border: 0px;" title="PHP coding" src="{{ site.baseurl }}/assets/PHP-coding_thumb.png" border="0" alt="PHP coding" width="324" height="165" /></a></p>
<p>I don't blame you for not looking at that code image. It looks more complex than it is. Trust me.</p>
<p>Basically, there are four arrays set up – verbArray, nounArray, reasonArray and sentenceArray – and they all contain part of, or all of, a reason why Steve is badass. The arrays are filled in a simple line of code such as:</p>
<blockquote><p><span style="font-family: Lucida Console;">$verbArray = array("ate", "high-fived", "beat up", … , "disrespected");</span></p></blockquote>
<p>The array doesn't need to have a specified length as it will just expand with however many entries it has. It goes from 0 to however many entries you have –1.</p>
<p>My code then assigns a variable – verb, noun, reason and sentence – a random entry from their respective arrays:</p>
<blockquote><p><span style="font-family: Lucida Console;">$verb = $verbArray[array_rand($verbArray)];</span></p></blockquote>
<p>This code is setting the variable <span style="font-family: Lucida Console;">$verb</span> a value based on what number the function <span style="font-family: Lucida Console;">array_rand() </span><span style="font-family: Arial;">is picking out.</span></p>
<p><span style="font-family: Arial;"><span style="font-family: Lucida Console;">array_rand()</span> essentially picks a position in the array you specify and gives you that position (say, 2). Then the variable is being assigned <span style="font-family: Lucida Console;">$verbArray[2];</span> for example, which corresponds to the entry "beat up". So <span style="font-family: Lucida Console;">$verb</span> is now "beat up".</span></p>
<p>These values then go into making a sentence. It's simply a case of adding the variable onto the end of the string, so it would read "Steve's so badass he <span style="font-family: Lucida Console;">$verb $noun $reason"</span>. That would show something like "Steve's so badass he beat up a rock while he waited for his train". Verb, noun, reason.</p>
<p>But you'll remember I mentioned a fourth array – sentenceArray – now that was for sentences that didn't fit the 'verb, noun, reason' structure. They went in their own array and I set another randomiser function off to pick whether a 'verb, noun, reason' one or a sentence one showed up.</p>
<blockquote><p><span style="font-family: Lucida Console;">$display = rand(0,10);</span></p></blockquote>
<p>This simply sets the variable <span style="font-family: Lucida Console;">$display</span> to a random number between 0 and 10 (that's inclusive).</p>
<blockquote><p><span style="font-family: Lucida Console;">if ($display &lt;= 7) {<br />
echo "&lt;p&gt;...he ".$verb." ".$noun." ".$reason."&lt;/p&gt;";<br />
} else {<br />
echo "&lt;p&gt;... ".$sentence."&lt;/p&gt;";<br />
};</span></p></blockquote>
<p>So this, in short, says that if the random number is less than or equal to 7, then it will show a 'verb, noun, reason' sentence, otherwise it would show just a random sentence. It's more likely a 'verb, noun, reason' would show up simply because there's more of them and if I made it an even chance, you're more likely to see the same sentence ones more than once.</p>
<p>And that's it, really. That's how we find out why Steve's so badass. You can see for yourself why Steve's so badass <a href="http://mattcrouch.net/experiments/stevessobadass/">over in the experiments section</a>.</p>
