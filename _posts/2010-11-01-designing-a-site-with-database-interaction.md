---
layout: post
title: Designing a site with database interaction
date: 2010-11-01 17:16:42
image: 2010-11-01-designing-a-site-with-database-interaction/tumblr-dashboard.png
tags:
- design
- MySQL
- PHP
---
The second chunk of project we have to complete this fortnight is PHP and MySQL based. The brief is pretty loose on this one. It's simply making a website that puts things and/or gets things from a database. Of course, in the lessons we've done a simple comments system and image uploader, but I'm aiming to go that little bit further and cramming it all into one and making it portable.

Right now, "cramming it all together" would refer much to the functionality of many blog websites like [Wordpress][Wordpress] if we're talking just a mish-mash of uploaded pictures  and text, as well as comments on them. So I needed something that little bit extra. Something to make it a bit of fun. So I took to the Internet and saw what was out there.

## Research

### Tumblr

[![Tumblr Dashboard][Tumblr Dashboard]][Tumblr Dashboard]

When I first thought "kind of like blogging, but on the move" I thought of Tumblr. Officially, [Tumblr][Tumblr] "lets you effortlessly share anything. Post text, photos, quotes, links, music, and videos, from your browser, phone, desktop, email, or wherever you happen to be" and that's pretty much the idea I had cooking in my mind. So while that's been done – and done well, I must add – I need to add a unique spin to my own one. But let's just see what's awesome about this one first.

[![Tumblr Post][Tumblr Post]][Tumblr Post]

Right off the bat you'll notice there's no real "look" to Tumblr. Sure, the dashboard (pictured above) gives the site a basic look, but it's entirely up to the user as to how their Tumblr page looks. It's certainly a nice touch, giving the user their own personal space rather than just an empty shell for them to fill, but nothing a novice PHP-er like me would be able to accomplish in just over a week.

[![Corner Console][Corner Console]][Corner Console]

There's also an over-riding sense of community here. With many blog formats and websites, a blog is just that – their blog. Sure, people can comment on what they've written but there's no real easy way to share it round apart from a link back. Here sharing it with people is just a click of a button in the top right of the page and it appears on their feed and anyone who's following that feed's page.

[![Mobile Sharing][Mobile Sharing]][Mobile Sharing]

In terms of overall design, it's nice and clean and smoothly operating. There's no visible kinks in the process, it's literally as easy as possible. For example, a photo upload involves choosing a file to upload and the rest is entirely optional. Giving it a description, tagging it, naming the source of it etc can all be done later on. It encourages a "post it now, fiddle around with it later" attitude which, for me personally, would get me using it a lot more. It's especially useful in the mobile realm where the last thing you want to be doing is describing what the picture is on your tiny little keyboard, for example.

### Moblog

[![Moblog][Moblog]][Moblog]

As the name suggests, [Moblog][Moblog] is a mobile blogging platform. Designed to be mobile from the ground up, it's sole purpose is to take pictures (and audio, although it's a less popular format) and send them to this service and categorise them not only by an individuals' Moblog page but they can also post them to a group page. They can then build up a day to day diary of what they did and where.

In essence it's very similar to Tumblr, but it's done mainly through mobile devices. The site itself dates back to when mobile Internet was still in its early stages and so pictures and video could be sent in as MMS to a specific number. Now it largely remains the same, but you can visit the site in a mobile browser and, assuming your phone allows it, upload it that way. There's no dedicated app or anything, but it does the job.

[![Map Location System][Map Location System]][Map Location System]

If pictures are geotagged automatically by the phone, it will plot the photo on a map (like on [my profile][Moblog - Matt Crouch]) and will show the user where they have been since they've been uploading to the service. It's a nice little touch that I'm sure a lot of people find useful.

The site also has integration with other sites such as Technorati for the tagging portion of the site, so you can see other related things if you see a picture you like, for example one relating to [Bournemouth][Moblog - Bournemouth].

## Wrapping the idea up

After playing around on a few sites related to those two main ones for a while, I've come up with a few things I want to include in my project. Taking into consideration the time scale we have to do this in and my newness to the whole PHP MySQL saga, I've come up with these things.


- Allow people to easily post pictures, video, audio and text media onto the site regardless of technical ability.
- Implement some sort of community around it, for example:

- Reposting
- Comments
- Up/Down rating system

- Create a special mobile version of the site and allow certain users to upload media through that way
- Give some sort of incentive to keep posting, for example:

- Goal to reach in terms of amount of posts
- Achievements / Badges
- Points / Rating system

- Create a smooth experience for all who use it – limit the need to 'jump through hoops'
- Make a pretty looking UI which will entice users to post as well as view content

I'll draw out some ideas and see what I come up with. See you later, alligator!

[Corner Console]:{{ site.baseurl }}/assets/2010-11-01-designing-a-site-with-database-interaction/corner-console.png
[Map Location System]:{{ site.baseurl }}/assets/2010-11-01-designing-a-site-with-database-interaction/map-location-system.png
[Mobile Sharing]:{{ site.baseurl }}/assets/2010-11-01-designing-a-site-with-database-interaction/mobile-sharing.png
[Moblog]:{{ site.baseurl }}/assets/2010-11-01-designing-a-site-with-database-interaction/moblog.png
[Tumblr Dashboard]:{{ site.baseurl }}/assets/2010-11-01-designing-a-site-with-database-interaction/tumblr-dashboard.png
[Tumblr Post]:{{ site.baseurl }}/assets/2010-11-01-designing-a-site-with-database-interaction/tumblr-post.png

[Wordpress]:http://wordpress.com/
[Tumblr]:http://www.tumblr.com/
[Moblog]:http://moblog.net/
[Moblog - Matt Crouch]:http://moblog.net/map/blog/MattCrouch/
[Moblog - Bournemouth]:http://moblog.net/tag/bournemouth