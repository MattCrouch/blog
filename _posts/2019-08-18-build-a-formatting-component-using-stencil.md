---
layout: post
title: Build a format component using Stencil
date: 2019-08-18 12:00:00
image: 2019-08-18-build-a-formatting-component-using-stencil/build-a-formatting-component-using-stencil-cover.jpg
thumbnail: 2019-08-18-build-a-formatting-component-using-stencil/build-a-formatting-component-using-stencil-cover-sm.jpg
tags:
  - Tutorial
  - Web Designer
  - JS
  - Stencil
  - Component
---

Components are the future of web development. Right now, JS frameworks such as React and Vue use a component-based approach to building apps, but that comes with added weight.

In the latest [Web Designer][web designer], we take a look at [Stencil][stencil] - a component building tool from the makers of Ionic.

[![Build a format component using Stencil][build a format component using stencil]][build a format component using stencil]

Web components have been bubbling under the surface for a while now. They allow the benefit of framework-powered application building with the power of native building. The result is a reusable block of code that can be dropped into any other project where needed. It doesn't matter about what powers that website - it just works.

While they are a great addition to the web, they can be quite difficult to work with from the start. Stencil is a tool that helps to build native web components by navigating us around the tricky parts, but compiles down into a regular web component.

In this tutorial we build a code formatting component using Stencil. It highlights the code like it would show up inside a code editor. It's the sort of thing you find on other tutorial websites where they provide code snippets. All the developer using it would need to do is supply the code snippet and the language it's written in.

[This is what it looks like][demo]. Users can read the code, copy its contents and collapse the box if it's too big. This is all controlled using attributes passed to it like any other HTML element.

While the tutorial focuses on creating this component, it introduces many different Stencil concepts that are useful across many different components. Learn how to build this component and many more in [Web Designer 291][web designer], which is out now.

[Build a format component using Stencil]:{{ site.baseurl }}/assets/2019-08-18-build-a-formatting-component-using-stencil/build-a-formatting-component-using-stencil.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-291/
[stencil]: https://stenciljs.com/
[demo]: https://mattcrouch.github.io/stencilcodeformatter/