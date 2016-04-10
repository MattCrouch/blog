---
layout: post
title: Introduction To Developing Tumblr Themes
date: 2015-02-15 16:26:38
image: 2015-02-15-introduction-to-developing-tumblr-themes/tumblr-theme-gallery.png
tags:
- css
- design
- html
- social media
- theme
- theming
- tumblr
---

Tumblr's great for both brands and individuals. Each blog represents them as a person through various forms of media. A great theme created for your specific use-case can turn Tumblr into the perfect platform to express your creativity.

## The Theme Gallery

[![Tumblr Theme Gallery][Tumblr Theme Gallery Image]][Tumblr Theme Gallery]

If you're just getting started with Tumblr and are not sure if it's going to be something that will benefit you, it's probably not wise going in and creating a theme yourself.

Thankfully Tumblr has a great [theme gallery][Tumblr Theme Gallery] which showcases the best pre-made themes out there. Some are free, some are not. While it is the case that the more comprehensive are paid for, there are plenty of free themes to check out and get started with.

A great plus point for Tumblr's themes are that you can edit the HTML as if it were your own. If you find a theme that's a great starting point you can take what they've made and put your own twist on it. Just don't forget to give a nod to the original creator and you'll be good to go.

## Tumblr's Theme Editor

[![Tumblr Theme Editor][Tumblr Theme Editor Image]][Tumblr Theme Editor Image]

If you can't find something that fits the bill, you're more than welcome to make your own. Make any edit to an existing theme and it becomes its own new custom theme.

From here you can change a whole host of things. Tumblr have provided a comprehensive [theme guide][Theme Guide] which details every tag you can put in your theme and what it does. If you want something for your blog you'll find it there.

One of the benefits of Tumblr's theming system is also it's downfall. It's not just adding CSS to a basic template, you can choose exactly how each type of post displays or even if it displays at all.

Thankfully Tumblr's theme editor is quite sophisticated. You can edit the HTML on-screen, save and have those edits appear immediately in the pane opposite. It functions *similar* to other code editors I've used, but it's quite basic in it's usage. It does include an asset upload feature however, so any images, JS libraries etc you're using can be hosted by them.

## Local Development Solutions

I would prefer to develop a theme locally and just deploy it to Tumblr. Sadly there's no real way to develop themes locally. You have a few options, but none are perfect:

### Copy-Paste

Sometimes the simplest solution is often the best. Create a simple HTML skeleton using Tumblr's theme editor, copy over the HTML that is generated from the page you want to edit and save that page somewhere locally.

You'll then have the same structure as the final Tumblr site will have and you can work on it just like any other site. Just make sure you put it back into Tumblr's theme editor every once in a while to make sure it's on the right track.

There are obvious drawbacks to this, the big one being if you want to make any change to the HTML side of things you'll have to make the change Tumblr-side and save the resulting parsed HTML over your local copy. If you know what you're doing you can probably generate the HTML once and work from there, but for mere mortals that's one clunky step a bit too far.

### TumblrThemr

[TumblrThemr][TumblrThemr] is a nice idea in principle. It's a piece of CC software that applies a temporary theme to a Tumblr blog that turns it into a form a local piece of JavaScript can read, process, and essentially duplicate the Tumblr rendering system locally. This allows you so you can develop as you would usually and just copy into the appropriate boxes on Tumblr when you're done.

While that's great in theory, I couldn't get it to work on my machine as it ran into quite a few cross-origin issues. One way to get around that was to upload it to a local server and destroying the very use of the thing. So not ideal.

### Dropbox

There's a creative way of using Dropbox and its automatic syncing to allow you to create stylesheets locally and use Tumblr's HTML Editor to make the theme building process that little bit easier.

It's a bit long but quite useful so I've given it its own post - [Using CSS Preprocessors To Create Tumblr Themes][Using CSS Preprocessors To Create Tumblr Themes]. It covers using Compass to generate them, but you can use plain jane CSS if you like.

Once you get into the flow of it, I think Dropbox is the way to go. But feel free to see which approach suits you the best. Of course, if you here of any other elegant solutions, do let me know.

## What to do once complete

When you've finished making the theme and you're ready to go live, make sure you've checked out the [Tumblr Theme Gallery Submission Guidelines][Tumblr Theme Gallery Submission Guidelines] for Tumblr's theme gallery. Even if you're not intending to submit your theme, it provides a set of requirements any decent theme should live up to.

[![Tumblr Asset Upload][Tumblr Asset Upload Image]][Tumblr Asset Upload Image]

One key point is to make sure anything you've made locally has been uploaded using Tumblr's asset uploader when you're done. It's found in the cog menu at the top of the theme editor. Not only does that save on your bandwidth elsewhere, it's important should your theme ever go into their gallery as it's one of the requirements. There's a size limit per file and per day, but if you're thinking of loading 15MB in theme data then frankly you've got bigger concerns...

Another useful thing to note is that Tumblr has a mobile theme it applies to (seemingly arbitrary) "mobile" users by default regardless of whether your design is responsive or not. So no matter how much [browser accordion][Browser Accordion] you've been playing, it's no good unless you turn that feature off in the theme editor, under Advanced Options.

## In Conclusion

Tumblr is growing bigger and bigger as a social media hotspot. It's a hotbed of people sharing their favourite things in fun and engaging ways. If you want to be a part of that, a custom theme is vital. As you get to know Tumblr, you'll learn the needs your theme should fulfil and it's likely there's no pre-cut solution to fit.

Learning to create Tumblr themes locally is no walk in the park, but they provide plenty of tools to make it as simple as possible requiring no specific tools on your end. You'll just need to give it a go!

[Tumblr Theme Gallery Image]:{{ site.baseurl }}/assets/2015-02-15-introduction-to-developing-tumblr-themes/tumblr-theme-gallery.png
[Tumblr Theme Editor Image]:{{ site.baseurl }}/assets/2015-02-15-introduction-to-developing-tumblr-themes/tumblr-theme-editor.png
[Tumblr Asset Upload Image]:{{ site.baseurl }}/assets/2015-02-15-introduction-to-developing-tumblr-themes/tumblr-asset-upload.png

[Tumblr Theme Gallery]:https://www.tumblr.com/themes
[Theme Guide]:https://www.tumblr.com/docs/en/custom_themes
[TumblrThemr]:http://tumblrthemr.icelab.com.au/
[Using CSS Preprocessors To Develop Tumblr Themes]:http://mattcrouch.net/blog/2015/02/using-css-preprocessors-to-develop-tumblr-themes
[Tumblr Theme Gallery Submission Guidelines]:https://www.tumblr.com/docs/en/theme_submission_guidelines
[Browser Accordion]:http://artpolikarpov.github.io/garmoshka/