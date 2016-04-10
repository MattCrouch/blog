---
layout: post
title: Designing a site with database interaction
date: 2010-11-01 17:16:42
tags:
- design
- MySQL
- PHP
---
<p>The second chunk of project we have to complete this fortnight is PHP and MySQL based. The brief is pretty loose on this one. It's simply making a website that puts things and/or gets things from a database. Of course, in the lessons we've done a simple comments system and image uploader, but I'm aiming to go that little bit further and cramming it all into one and making it portable.</p>
<p>Right now, "cramming it all together" would refer much to the functionality of many blog websites like <a href="http://wordpress.com/">Wordpress.com</a> if we're talking just a mish-mash of uploaded pictures  and text, as well as comments on them. So I needed something that little bit extra. Something to make it a bit of fun. So I took to the Internet and saw what was out there.</p>
<h3>Research</h3>
<h5>Tumblr</h5>
<p style="text-align: center;"><a href="http://www.mattcrouch.net/blog/images/9900f57eeb1b_E358/Tumblr-dashboard.png"><img class="aligncenter" style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border: 0px;" title="Tumblr dashboard" src="{{ site.baseurl }}/assets/Tumblr-dashboard_thumb.png" border="0" alt="Tumblr dashboard" width="363" height="212" /></a></p>
<p>When I first thought "kind of like blogging, but on the move" I thought of Tumblr. Officially, <a href="http://www.tumblr.com/">Tumblr</a> "lets you effortlessly share anything. Post text, photos, quotes, links, music, and videos, from your browser, phone, desktop, email, or wherever you happen to be" and that's pretty much the idea I had cooking in my mind. So while that's been done – and done well, I must add – I need to add a unique spin to my own one. But let's just see what's awesome about this one first.</p>
<p style="text-align: center;"><a href="http://www.mattcrouch.net/blog/images/9900f57eeb1b_E358/Tumblr-post.png"><img class="aligncenter" style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border: 0px;" title="Tumblr post" src="{{ site.baseurl }}/assets/Tumblr-post_thumb.png" border="0" alt="Tumblr post" width="244" height="195" /></a></p>
<p>Right off the bat you'll notice there's no real "look" to Tumblr. Sure, the dashboard (pictured above) gives the site a basic look, but it's entirely up to the user as to how their Tumblr page looks. It's certainly a nice touch, giving the user their own personal space rather than just an empty shell for them to fill, but nothing a novice PHP-er like me would be able to accomplish in just over a week.</p>
<p style="text-align: center;"><a href="http://www.mattcrouch.net/blog/images/9900f57eeb1b_E358/corner-console.png"><img class="aligncenter" style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border: 0px;" title="corner console" src="{{ site.baseurl }}/assets/corner-console_thumb.png" border="0" alt="corner console" width="244" height="30" /></a></p>
<p>There's also an over-riding sense of community here. With many blog formats and websites, a blog is just that – their blog. Sure, people can comment on what they've written but there's no real easy way to share it round apart from a link back. Here sharing it with people is just a click of a button in the top right of the page and it appears on their feed and anyone who's following that feed's page.</p>
<p style="text-align: center;"><a href="http://www.mattcrouch.net/blog/images/9900f57eeb1b_E358/Mobile-sharing.png"><img class="aligncenter" style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border: 0px;" title="Mobile sharing" src="{{ site.baseurl }}/assets/Mobile-sharing_thumb.png" border="0" alt="Mobile sharing" width="374" height="144" /></a></p>
<p>In terms of overall design, it's nice and clean and smoothly operating. There's no visible kinks in the process, it's literally as easy as possible. For example, a photo upload involves choosing a file to upload and the rest is entirely optional. Giving it a description, tagging it, naming the source of it etc can all be done later on. It encourages a "post it now, fiddle around with it later" attitude which, for me personally, would get me using it a lot more. It's especially useful in the mobile realm where the last thing you want to be doing is describing what the picture is on your tiny little keyboard, for example.</p>
<h5>Moblog</h5>
<p style="text-align: center;"><a href="http://www.mattcrouch.net/blog/images/9900f57eeb1b_E358/Moblog.png"><img class="aligncenter" style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border: 0px;" title="Moblog" src="{{ site.baseurl }}/assets/Moblog_thumb.png" border="0" alt="Moblog" width="352" height="240" /></a></p>
<p>As the name suggests, <a href="http://moblog.net/">Moblog</a> is a mobile blogging platform. Designed to be mobile from the ground up, it's sole purpose is to take pictures (and audio, although it's a less popular format) and send them to this service and categorise them not only by an individuals' Moblog page but they can also post them to a group page. They can then build up a day to day diary of what they did and where.</p>
<p>In essence it's very similar to Tumblr, but it's done mainly through mobile devices. The site itself dates back to when mobile Internet was still in its early stages and so pictures and video could be sent in as MMS to a specific number. Now it largely remains the same, but you can visit the site in a mobile browser and, assuming your phone allows it, upload it that way. There's no dedicated app or anything, but it does the job.</p>
<p style="text-align: center;"><a href="http://www.mattcrouch.net/blog/images/9900f57eeb1b_E358/Map-location-system.png"><img class="aligncenter" style="background-image: none; padding-left: 0px; padding-right: 0px; display: block; float: none; padding-top: 0px; border: 0px;" title="Map location system" src="{{ site.baseurl }}/assets/Map-location-system_thumb.png" border="0" alt="Map location system" width="242" height="244" /></a></p>
<p>If pictures are geotagged automatically by the phone, it will <a href="http://moblog.net/map/blog/MattCrouch/">plot the photo on a map</a> and will show the user where they have been since they've been uploading to the service. It's a nice little touch that I'm sure a lot of people find useful.</p>
<p>The site also has integration with other sites such as Technorati for the tagging portion of the site, so you can see other related things if you see a picture you like, for example one relating to <a href="http://moblog.net/tag/bournemouth">Bournemouth</a>.</p>
<h3>Wrapping the idea up</h3>
<p>After playing around on a few sites related to those two main ones for a while, I've come up with a few things I want to include in my project. Taking into consideration the time scale we have to do this in and my newness to the whole PHP MySQL saga, I've come up with these things.</p>
<ul>
<li>Allow people to easily post pictures, video, audio and text media onto the site regardless of technical ability.</li>
<li>Implement some sort of community around it, for example
<ul>
<li>Reposting</li>
<li>Comments</li>
<li>Up/Down rating system</li>
</ul>
</li>
<li>Create a special mobile version of the site and allow certain users to upload media through that way</li>
<li>Give some sort of incentive to keep posting, for example:
<ul>
<li>Goal to reach in terms of amount of posts</li>
<li>Achievements / Badges</li>
<li>Points / Rating system</li>
</ul>
</li>
<li>Create a smooth experience for all who use it – limit the need to 'jump through hoops'</li>
<li>Make a pretty looking UI which will entice users to post as well as view content</li>
</ul>
<p>I'll draw out some ideas and see what I come up with. See you later, alligator!</p>
