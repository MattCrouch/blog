---
layout: post
title: Kings of JavaScript
date: 2017-12-14 12:00:00
image: 2017-12-14-kings-of-javascript/kings-of-javascript-cover.jpg
thumbnail: 2017-12-14-kings-of-javascript/kings-of-javascript-cover-sm.jpg
tags:
- JavaScript
- Feature
- Frameworks
- Techniques
- React
- Vue
- Angular
- Polymer
- Aurelia

---

This month's [Web Designer][Web Designer] is a beast. The main feature takes a dive into a bunch of useful techniques for the new "kings of JavaScript". By that, I mean my five top frameworks - React, Vue, Angular, Polymer and Aurelia.

[![Kings of JavaScript][Kings of JavaScript]][Kings of JavaScript]


JavaScript is very powerful on its own. We're able to do more with vanilla code than we could even a few years ago. Even so, there's no escaping the benefits of dedicated frameworks to make dynamic websites easier to reason with.

This issue jumps into my choice of the five top frameworks and some techniques that can be used to get more out of them. Some of them you may know, but the idea is to introduce some things you may have skimmed over as newer releases arrive.

Cards on the table, I had only had experience with React and Polymer before writing this, so it's a learning experience for us all. I had done a bit of Angular.js, but the newer versions may as well be a completely different framework.

Turns out I'm a big fan of Vue. Every time I was trying to work out how to achieve something, there was already an implementation ready to go. Specifically, Vuex impressed me the most. Having that level of defined state management in an application is invaluable.

I also used it as a bit of an excuse to try out some of the new React 16 features. My favourite of those is the error boundary. It's simple to understand and essentially ring-fences parts of the application from breaking others. After writing this article, I put it straight into practice in Cinolla's new React portal. It's a great way to stop the whole app unmounting when an error occurs, which happens a lot for me...

[![Cinolla Error Boundary][Cinolla Error Boundary]][Cinolla Error Boundary]

On the flipside, I found Angular a chore to work with. Getting my head around all the different terminology was just not happening for some reason. I think the docs didn't help, as they seem to assume some level of knowledge about Angular right from the outset. I think I prefer a React-based approach, where it sets out a few ground rules but lets the community run with it and see what works best.

Likewise, Aurelia was nowhere near as established as I thought it was. It seems developers haven't embraced it, and the website doesn't seem to do anything to inspire them to either. Everything seemed an uphill battle. But it seemed pretty efficient on the front-end, so I guess maybe that makes it worth it?

Polymer seems to be growing, although a lot slower than I thought it would. I do have a soft spot for Polymer, hence its inclusion here. It - along with Vue - is working with growing standards instead of trying to act against them like other frameworks. There's some big companies out there using Polymer, and it's a joy to use for small components, but I'm just not sure how it would go trying to make a giant web app with it.

But anyway. If any of this sounds like something you might be interested in, [Web Designer][Web Designer] is out now so pick up a copy!

[Cinolla Error Boundary]:{{ site.baseurl }}/assets/2017-12-14-kings-of-javascript/cinolla-error-boundary.png
[Kings of JavaScript]:{{ site.baseurl }}/assets/2017-12-14-kings-of-javascript/kings-of-javascript.jpg

[Web Designer]:https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-269/