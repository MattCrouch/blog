---
layout: post
title: Manage React application data with Redux
date: 2018-12-11 12:00:00
image: 2018-12-11-manage-react-application-data-with-redux/react-application-data-with-redux-cover.jpg
thumbnail: 2018-12-11-manage-react-application-data-with-redux/react-application-data-with-redux-cover-sm.jpg
excerpt: State is hard - Redux makes it a little easier. The first in a five-part series introduces the concepts of Redux to a beginner audience.
tags:
  - Tutorial
  - Web Designer
  - Redux Series
  - JS
  - React
  - Redux
  - State
---

React is crying out for a good solution to application-wide state management. While the newer [context API][context api] provides a solution, but it might not be suitable to all projects.

In the latest [Web Designer][web designer] we go through the different concepts in Redux.

It's the first in a five-part series, which goes on to cover different topics such as immutability, form building and testing what we make.

[![Manage React application data with Redux][manage react application data with redux]][manage react application data with redux]

Redux is an intimidating beast. That's certainly how I felt when I first came to use it. There's so many different concepts and lots of boilerplate to put in the right place (where even _is_ the right place?) that getting started seems very daunting at the start.

Thankfully, Redux itself is quite simple in itself - we just choose to make it more complicated than it needs to be.

This issue is a gentle introduction to a few key concepts within Redux - such as actions and reducers. We won't exactly be breaking new ground with this tutorial, but it's at least more than a todo list 😴

Over the series we will be making PhotoShare - an application where users can comment on photos by clicking on them. There's a bit of everything involved over the five parts, but this first one will just be using data from a JSON file.

That's all waiting in [Web Designer 282][web designer] right now! Go pick up a copy!

[Manage React application data with Redux]:{{ site.baseurl }}/assets/2018-12-11-manage-react-application-data-with-redux/react-application-data-with-redux.jpg

[context api]: https://reactjs.org/docs/context.html
[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-282/
