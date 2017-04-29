---
layout: post
title: Build a React-powered Dashboard Application
date: 2017-05-29 12:00:00
image: 2017-05-29-react-dashboard-tutorial/eact-dashboard-tutorial.jpg
tags:
- JavaScript
- Tutorial
- React
- Dashboard
- Data
- Components
---
In the latest issue of [Web Designer][Web Designer] take a dive into the wonderful world of React applications by building out a dashboard for your company's data.

After some of the responses from the [Next.js Tutorial], it sounded like a lot of people were struggling to get a grip on some of the concepts of React outside of the usual "Hello World" scenarios. Things like ES2015 classes were tripping people up, as were getting their heads around server-side rendering.

This tutorial puts more of a focus on the groundworks of a single component - the NumberWidget - which just spits out what's passed as props. We go from there to container components, then data fetching, and finally expanding these same concepts into other components. Once you get the basics, the complex stuff gets a lot easier!

The result is a dashboard page, designed to be stuck on a big screen in an office somewhere. The design of this one measures support tickets coming in and being solved, but the components built can be used with many different data sources to show anything.

There's also extensive use of [CSS Grid][CSS Grid] behind the scenes, which makes applications like this a breeze. Browsers that don't support it just show the mobile view - a single column layout. It's not ideal, but given this is designed to just be stuck on a screen and left, it shouldn't be an issue.

A static version can be found on my [GitHub page][Tutorial Demo] if you want to see the finished article (so to speak). The data isn't going to change as there's no server generating it, but just pretend it does...

[Web Designer]:https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-261/
[Next.js Tutorial]:https://mattcrouch.github.io/blog/2017/03/react-next-js-tutorial/
[CSS Grid]:https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
[Tutorial Demo]:http://mattcrouch.github.io/reactdashboard/