---
layout: post
title: 10 Tips For Better Testing
date: 2018-05-21 12:00:00
image: 2018-05-21-10-tips-for-better-testing/10-tips-for-better-testing-heading.jpg
thumbnail: 2018-05-21-10-tips-for-better-testing/10-tips-for-better-testing-heading-sm.jpg
tags:
- JavaScript
- Feature
- Testing
- Unit Test
- Performance
- Users
- Net Magazine
---

Making things for the web is endlessly complicated nowadays. There's so much to choose - the framework, the tooling, the asset management. Try as we might, testing ends up further down the list than it should. In the latest [Net magazine][net magazine] I run down ten different ways to use testing to make a better product.

[![10 Tips for Better Testing][10 tips for better testing]][10 tips for better testing]

Here's something you would never find me saying even a year ago - unit tests are great. They're a quick and readily available tool to call upon not just to check things still work, but that a block of code actually does what you think it does. Since joining Vidsy I've found them invaluable in getting up to speed with the codebase. They also help when I accidentally break things (sorry, team...).

But testing is so much more than unit tests. There's integration tests to make sure those units work nicely together. There's end-to-end tests to make sure collectively they can be used to perform a site-wide task. Visual regression tests can see when something is visually wrong, even if it's technically right. Automated browser tests make sure it's working for every browser the visitors will use.

It doesn't have to stop at a purely technical level either. Techniques such as A/B testing can make sure any changes made to a product are the right ones, or that people with accessibility concerns can still use your site in a pleasant, meaningful way.

Testing is the key to a successful project, whichever way you slice it. Nobody should feel compelled to perform _every_ kind of test, just the ones that will provide the biggest impact for each project. While most will benefit from having unit testing in place are the false positives from visual regression tests worth the extra overhead?

This issue goes through ten tips scanning the whole field in regards to testing. Give it a read and decide which tools, tips and techniques could work for your project. Find it in the July edition of [Net magazine][net magazine].

[10 Tips for Better Testing]:{{ site.baseurl }}/assets/2018-05-21-10-tips-for-better-testing/10-tips-for-better-testing-cover.jpg
[net magazine]: https://www.myfavouritemagazines.co.uk/design/net-magazine-back-issues/net-july-2018-issue-307/
