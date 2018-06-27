---
layout: post
title: Styling React with Fela
date: 2018-06-26 12:00:00
image: 2018-06-26-styling-react-with-fela/style-react-apps-with-fela-cover.jpg
thumbnail: 2018-06-26-styling-react-with-fela/style-react-apps-with-fela-cover-sm.jpg
tags:
- JavaScript
- CSS
- Tutorial
- React
- Fela
- CSS-in-JS
---

CSS in large projects - particularly applications with frameworks like React - can be difficult to scale. Stylesheets tend to inflate over time when developers become too scared to delete old styles just in case they get used somewhere else. Even if they do, in component-based designs, there's every chance the styles and the code behind it become separated and lost when copying across projects.

Wouldn't it be great if we could keep the CSS together with the components they're styling? That's exactly what the CSS-in-JS approach is designed to fix. In the latest [Web Designer][web designer], we go through how to use one of these tools in React called [Fela][fela].

[![Styling React with Fela][styling react with fela]][styling react with fela]

In Fela, every styled element added in React is actually a Fela component. These display as a normal element but have a style associated with them. Wherever they get used, those styles are added along with them. The idea is that the developer never has to think about it.

The main selling point of Fela is that styles are a result of application state. By passing through props to each of these styled components, we can define how that should affect the style. For example, we could have a `fullWidth` prop that translates to `width:100%` in CSS.

In this tutorial, we make a dynamically styled league table just in time for the World Cup, complete with theming. All the colours are dynamic and change with the state at the root of the application.

While you may not be making a football league table any time soon, the tips in this post go through how Fela works, how to use it and what approaches should be used for CSS-in-JS tools in the future. Grab a copy and see what you can make!

[Styling React with Fela]:{{ site.baseurl }}/assets/2018-06-26-styling-react-with-fela/style-react-apps-with-fela.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-276/
[fela]: http://fela.js.org/
