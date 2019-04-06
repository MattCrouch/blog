---
layout: post
title: Capture data with Redux Form
date: 2019-04-04 12:00:00
image: 2019-04-04-capture-data-with-redux-form/capture-data-with-redux-form-cover.jpg
thumbnail: 2019-04-04-capture-data-with-redux-form/capture-data-with-redux-form-cover-sm.jpg
tags:
  - Tutorial
  - Web Designer
  - Redux Series
  - JS
  - React
  - Redux
  - Form
---

Capturing data is no fun task. There's plenty going on and plenty to go wrong. It's better to have a tool at our disposal to help soften the blow.

In the latest [Web Designer][web designer] we look in to the wonderful world of Redux Form.

[![Capture data with Redux Form][capture data with redux form]][capture data with redux form]

[Redux Form][redux form] is a tool that links Redux and our forms... obviously. While that doesn't sound like much on the surface, it comes with plenty of upsides.

For one, it allows us to keep all the data about our application in one place. Form inputs tend to hold their own state, which can cause havoc if not handled correctly. Redux Form does all that heavy lifting for us so there's no need to worry.

It also comes with handy options for validation that allow us to check fields at any level at any point we require. Missing fields? Certainly. Password strength tests? No problem. Checking data on the server? Yep. Even that. All that's required is the right setting.

Sure, there's arguments for and against Redux Form. But if there's a need for a drop-in solution to a bunch of common problems, it's a popular choice.

In this final tutorial in the Redux series, we look into what we can get out this wide-reaching tool by finishing off the Photo Share application. We cover all the major bases, but there's plenty more to Redux Form than what gets covered here. Afterwards, go check out [the docs][redux form docs] and see what else you can rustle up.

Grab a copy of [Web Designer 286][web designer] and see what we get up to - and finally complete that application!

[Capture data with Redux Form]:{{ site.baseurl }}/assets/2019-04-04-capture-data-with-redux-form/capture-data-with-redux-form.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-286/
[redux form]: https://redux-form.com/
[redux form docs]: https://redux-form.com/8.1.0/docs/api/
