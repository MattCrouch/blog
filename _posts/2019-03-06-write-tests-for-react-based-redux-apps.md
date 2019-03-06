---
layout: post
title: Write tests for React-based Redux apps
date: 2019-03-06 12:00:00
image: 2019-03-06-write-tests-for-react-based-redux-apps/write-tests-for-react-based-redux-apps-cover.jpg
thumbnail: 2019-03-06-write-tests-for-react-based-redux-apps/write-tests-for-react-based-redux-apps-cover-sm.jpg
tags:
  - Tutorial
  - Web Designer
  - Redux Series
  - JS
  - React
  - Redux
  - State
  - Testing
  - Jest
---

Redux is a powerful tool to have at your disposal. The data for the entire application all in one place. With that in mind, it's important to make sure that it keeps working as you expect it to.

In the latest [Web Designer][web designer] we take a look at how writing tests can help keep everything on track.

[![Write tests for React-based Redux apps][write tests for react-based redux apps]][write tests for react-based redux apps]

Writing tests is so important for any application. In an ideal world, every part of the codebase would be covered by some kind of test. Unit tests are the quickest to run and implement as long as the application is written in such a way that makes it possible.

Thankfully, Redux is the prime target for unit testing. It's functional by nature - given the same input, it will always return the same output. Each part can be separated and tested in isolation.

This tutorial is the fourth in the series focusing on the PhotoShare application. While no new features are being built, we take a look at how to test what's already there - actions, reducers, selectors and all. We even cover testing immutable.js records that we covered in a [previous tutorial][immutable.js tutorial].

Before you take a look, it may be worth taking a look at [Jest][jest] to get a good grounding on what powers these test. We won't be testing components directly here, but we will be covering `mapStateToProps` and `mapDispatchToProps` methods to check they pass the right thing to the components they are on.

To take a look for yourself, get yourself a copy of [Web Designer 285][web designer] download the assets and get testing!

[Write tests for React-based Redux apps]:{{ site.baseurl }}/assets/2019-03-06-write-tests-for-react-based-redux-apps/write-tests-for-react-based-redux-apps.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-285/
[jest]: https://jestjs.io/

[immutable.js tutorial]: {{ site.baseurl }}/2019/02/manage-redux-state-with-immutable-js/
