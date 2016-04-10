---
layout: post
title: Using CSS Preprocessors To Develop Tumblr Themes With Dropbox
date: 2015-02-15 17:06:51
image: 2015-02-15-using-css-preprocessors-to-develop-tumblr-themes/dropbox-public-url.png
tags:
- compass
- design
- preprocessor
- sass
- theme
- theming
- tumblr
---

Building themes for Tumblr can get quite complicated. What's not so great is that there is no way to get Tumblr locally to easily develop the theme you need. Tumblr has no stylesheet support, so aside from adding plain CSS code in the same HTML file or uploading a processed CSS file each time, you're a bit stuffed.

Thankfully by using a combination of your everyday local development tools, Tumblr's own Theme Editor feature and Dropbox, you can make it a little bit easier.

*It's worth noting that this technique isn't solely for preprocessors. Plain old CSS would work the same, just miss the preprocessor step out and write the styles directly in the file synced with Dropbox.*

Set Up Dropbox
--------------

What you need to do first is make sure you've got a Dropbox account set up and syncing to your computer. It might be worth creating a separate folder for this just to keep things organised. What we're utilising here is the fact Dropbox will sync each time it detects a change in file.

Set up the preprocessor
-----------------------

We need the processed CSS file to be generated and land inside Dropbox, so it can pick up the changes and upload them.

I'm using Compass in this example, but the process is largely similar in all preprocessors.

Set up a new Compass project, and inside the <code>config.rb</code> file, make sure the <code>css_dir</code> value is pointing to newly created folder in Dropbox.

Then <code>compass watch</code> that directory as usual, so any changes in your .scss file update the .css file in Dropbox that then gets synced.

Linking CSS to Tumblr
---------------------

[![Dropbox Public URL]({{ site.baseurl }}/assets/2015-02-15-using-css-preprocessors-to-develop-tumblr-themes/dropbox-public-url.png)]({{ site.baseurl }}/assets/2015-02-15-using-css-preprocessors-to-develop-tumblr-themes/dropbox-public-url.png)

Once the parsed CSS file is sitting in your local Dropbox folder and has finished its initial sync, find it and right click and copy the public link for the file (this can also be found on dropbox.com by clicking the Share button to the right of the file).

It will give you a URL that by default links to a download link on the Dropbox website, or - depending on your browser - will just display it in text form. To trigger a download you need to add the flag dl=1 to the end of the URL. e.g.

{% highlight html %}
https://www.dropbox.com/s/p3964xt3efdd8ha/tumblr.css?dl=1
{% endhighlight %}

From here you can just use this URL to include the CSS like you would any other website. Every time you change the CSS file on your computer, Dropbox syncs it, and the changes will appear alongside in the Tumblr HTML editor.

{% highlight html %}
<link rel="stylesheet" type="text/css" href="https://www.dropbox.com/s/p3964xt3efdd8ha/tumblr.css?dl=1" />
{% endhighlight %}

[![Tumblr Asset Upload]({{ site.baseurl }}/assets/2015-02-15-using-css-preprocessors-to-develop-tumblr-themes/tumblr-asset-upload.png)]({{ site.baseurl }}/assets/2015-02-15-using-css-preprocessors-to-develop-tumblr-themes/tumblr-asset-upload.png)

When you've finished developing your theme, make sure the CSS file from Dropbox gets uploaded using Tumblr's asset uploader and link to that version. That way should anything happen to the file or your Dropbox account in the future your theme won't suffer.

So as long as you're comfortable using Tumblr's HTML Theme Editor, using Dropbox to upload your parsed CSS allows you to keep using your favourite preprocessor for Tumblr themes, even when using an online HTML editor.