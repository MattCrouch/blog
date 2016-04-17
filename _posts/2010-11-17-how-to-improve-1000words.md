---
layout: post
title: How to improve 1000words
date: 2010-11-17 16:48:11
image: 2010-11-17-how-to-improve-1000words/basic-database-layout.png
tags:
- 1000words
- crit
- design
- development
- MySQL
- PHP
- pictures
---
So I, more recently than Spaced, had another crit session but this time about my PHP work. This time 1000words was under the microscope.

How can you improve on something which is essentially two-columned Twitter? Well, shall we see what they said?

## So what needs to be improved?

- There's not a lot separating it from Twitter. Why wouldn't people just use Twitter?
- Session variables are far too insecure. Allows accounts to be carried over from other sites.
- No current way to easily reply to something somebody posted.
- It's not always clear what the user has to do.
- Pictures uploaded are squashed to fit the layout, rather than resized on upload.

## …are there any positives?

- The overall style of the site looks good and well presented.
- Each post is clearly identified so you know what it relates to.
- Users have profile pictures (but no personal profile as of yet)

These are fair points in my view and they give me something to aim towards. But how would I go about improving 1000words to make it the best possible?

## Why not just use Twitter?

That's a fair point and something I can't really fix given the criteria for the project. We need to show interaction with a user and a database, which would inevitably result in Twitter-esque sites all round the class. It just needs a defining factor.

While I tried to make a feature of the "How many words is a picture worth?" question, it's not really doing a lot. There's no real draw to make the number go up or down. It just does.

Back in the [design stage][Designing a Site with Database Interaction] I had the idea of assigning each person a team – to either post pictures or text – but this got put on the back burner while I got the main structure sorted. But that took up the whole two weeks. The database structure within the site is all set up to give people who register a team quite easily. 

What remains now is to work out what this team business will do. The original idea was to give them a certain amount of points for uploading their chosen type of media (less for the other media), points which would then go towards something like the ability to post longer messages or edit their profile or something. Use special emoticons. That sort of light hearted affair.

Another idea niggling in the back of my head is to allow people to sign up and sign in using their Twitter. That way we can post updates to Twitter while playing 1000words and it becomes a little less redundant (and would alleviate the second problem. Two birds, one stone. Booyah.)

## No easy way to reply to a post

At the moment, the user would have to physically write "@Matt" or "RE: Hippos are amazing" or something which works fine in theory, but it's not very user friendly. Surprise, surprise, I have a solution that's based off of how Twitter manages it.

[![Basic Database Layout][Basic Database Layout]][Basic Database Layout]

This is the basic content table layout (what some of the headings mean I'll go into in a subsequent post). Each post is given an id in the first column. The user would be given an option to reply to a particular post, which would fill in the id of that post in the 'reply' column (a reply id of 0 indicates it's not a reply). 

Then, while you can't exactly see a full on conversation Gmail-style, you can see if a particular post has any replies and view a page of those. It works in this situation.

## It's not clear what the user has to do

This is one I was told as a possible snag to my design, but personally I can't see it. I suppose the labels "Picture" or "Text" don't exactly lend themselves to be clicked on to change the form around. 

It was a plan to get rid of the bulky top posting section altogether and have one bar right at the top which took you step by step though posting, so I could integrate that. But a priority would be to get the core sorted first.

## Squashed pictures and user images

While the original plan was to resize them on upload (and I did certainly try to implement it) it was taking far too much time to work out how to do it so it was side-lined for later.

Since then I've learned of a simple technique thanks to an add-on to the server where the PHP is running so it shouldn't take too much effort to implement that now.

## Anything else?

I dare say as I go along I'll think "Oh that's a good idea!" and try and put that in somewhere. While right now the goals are to put in the features listed above, I would love to be able to make some sort of admin panel to edit all the entries if need be when I'm away from university (where I can use Sequel Pro) and possibly to have a rich text editor for text posts. 

The original plan was to create a mobile site too to update on the go but it wouldn't work with picture uploads on iPhone which seems like the overwhelming platform here. If I have time left over it's certainly a feature I would like to go into the final product.

So that's it. All I need to do now is to knuckle down and work on it flat out until Christmas. Yay!

[Basic Database Layout]:{{ site.baseurl }}/assets/2010-11-17-how-to-improve-1000words/basic-database-layout.png

[Designing a Site with Database Interaction]:http://mattcrouch.net/blog/2010/11/designing-a-site-with-database-interaction/