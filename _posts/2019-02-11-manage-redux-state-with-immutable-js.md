---
layout: post
title: Manage Redux state with Immutable.js
date: 2019-02-11 12:00:00
image: 2019-02-11-manage-redux-state-with-immutable-js/manage-redux-state-with-immutable-js-cover.jpg
thumbnail: 2019-02-11-manage-redux-state-with-immutable-js/manage-redux-state-with-immutable-js-cover-sm.jpg
tags:
  - Tutorial
  - Web Designer
  - Redux Series
  - JS
  - React
  - Redux
  - State
  - immutable
---

Redux is great for handling lots of moving parts within an application. Immutability is a big part of that - making sure that no object gets mutated, but a copy gets made with every change. Sometimes that can be easier said than done, but there are libraries out there that can help.

In the latest [Web Designer][web designer] we cover [Immutable.js][immutable.js] - a popular choice for dealing with state in a non-destructive manner.

[![Manage Redux state with Immutable.js][manage redux state with immutable.js]][manage redux state with immutable.js]

When using regular JavaScript objects to contain state, there's a couple of options we have to work with immutability - `Object.assign()` or the newer spread operator. While both are fairly straightforward to use, they get quite messy when dealing with nested data. It becomes really easy to miss an object and that's when bugs start creeping in.

Immutable.js is a library made by Facebook that can help with that. It introduces a few special objects that can be used to construct state. By default they cannot be edited once created. To update them, they provide special methods that return _copies_ of their data, making accidental object mutation virtually impossible.

This tutorial is the third in the Redux series, in which we cover building the Photo Share commenting application. This tutorial doesn't add any new features, but converts the existing state model to use Immutable.js. It goes over making Records, Lists and how best to update them.

My original plan was to also include [Normalizr][normalizr] at this point too. This would lessen the nesting and make updates much easier. Turns out there's too much to cover in this subject to fit it in! If you do follow along, make sure you check out Normalizr as well as it may help out with some of the fiddly bits like updating comment users - but no spoilers!

If that sounds interesting, it's all in [Web Designer 284][web designer], which is out right now!

[Manage Redux state with Immutable.js]:{{ site.baseurl }}/assets/2019-02-11-manage-redux-state-with-immutable-js/manage-redux-state-with-immutable-js.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-284/
[immutable.js]: https://facebook.github.io/immutable-js/
[normalizr]: https://github.com/paularmstrong/normalizr
