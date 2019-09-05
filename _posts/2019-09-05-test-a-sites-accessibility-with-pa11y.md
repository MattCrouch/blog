---
layout: post
title: Test a site's accessibility with Pa11y
date: 2019-09-05 12:00:00
image: 2019-09-05-test-a-sites-accessibility-with-pa11y/test-a-sites-accessibility-with-pa11y-cover.jpg
thumbnail: 2019-09-05-test-a-sites-accessibility-with-pa11y/test-a-sites-accessibility-with-pa11y-cover-sm.jpg
excerpt: 98% of homepages online have some kind of accessibility issue. By automatically checking for common problems with Pa11y, we can be more confident that we are not accidentally adding any new ones into the codebase.
tags:
  - Tutorial
  - Net Magazine
  - JS
  - Testing
  - Pa11y
  - Accessibility
---

According to [a recent study by WebAIM][webaim million], 98% of homepages of the top 1 million websites online have some kind of accessibility issue. That's only counting those that can be automatically detected!

In the latest [Net Magazine][net magazine] we take a look at [Pa11y][pa11y] - an automated tool that can help stop this kind of thing from happening.

[![Test a site's accessibility with Pa11y][test a site's accessibility with pa11y]][test a site's accessibility with pa11y]

Website accessibility is something that should concern all designers and developers - not just those where it's a legal requirement. By making a website that's accessible for people will all different physical and mental abilities, it improves everybody's experience.

Try navigating your current website with just a keyboard. It's tricky, isn't it? Even the best designed websites are going to be a problem to try and navigate with just keyboard input, but our job as developers is to make that process as easy as it could possibly be. For example, we could supply a "jump to content" link to avoid having to tab through the whole navigation each time.

Some problems can be easier to solve than others. While many will require thought and input right from the conceptual stage, others are fairly simple to fix. Making sure images have informative `alt` text on, for example, is a quick way to make screenreader users very happy.

Pa11y is an automated tool that can make solving those simple tasks a little easier. It can identify where problems are to begin with and can even give hints towards the best way to fix them.

Each Pa11y test is a set of instructions that controls a page using [Puppeteer][puppeteer]. Once it's set up a scenario, it can scan the page for any outstanding accessibility issues and create a report to read through analyse and action against.

One of Pa11y's major uses is within continuous integration (CI) environments. If a Puppeteer test detects an issue, it can cause a CI job to fail and stop a commit from being merged in until it's fixed. This is a great way to stop a site's accessibility from regressing accidentally.

You can take a sneaky peek at the [tutorial files][github tutorial files] and see how these tests are running on (deliberately) the least accessible website ever created. Fix the site and see the tests turn green. How satisfying!

If this sounds interesting, we explore Pa11y in more depth looking at how it works, what it's capable of and some useful accessibility resources in the latest issue of [Net magazine][net magazine], which is out now.

[Test a site's accessibility with Pa11y]:{{ site.baseurl }}/assets/2019-09-05-test-a-sites-accessibility-with-pa11y/test-a-sites-accessibility-with-pa11y.jpg

[net magazine]: https://www.myfavouritemagazines.co.uk/design/net-magazine-back-issues/net-october-2019-issue-324/
[pa11y]: https://pa11y.org/
[webaim million]: https://webaim.org/projects/million/
[puppeteer]: https://pptr.dev/
[github tutorial files]: https://github.com/mattcrouch/pa11y-tutorial
