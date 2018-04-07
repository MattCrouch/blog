---
layout: post
title: Testing React Components with Jest and Enzyme
date: 2018-04-03 12:00:00
image: 2018-04-03-react-testing-jest/test-react-with-jest-and-enzyme-cover.jpg
thumbnail: 2018-04-03-react-testing-jest/test-react-with-jest-and-enzyme-cover-sm.jpg
tags:
- JavaScript
- Tutorial
- React
- Testing
- Unit Test
- Jest
- Enzyme

---

Love them or hate them, tests are the backbone of any major project. A great place to start is the humble unit test. But what is a unit test? How do you use them in React applications? The latest edition of [Web Designer][Web Designer] is here to help you out.

[![Unit Testing React Applications][Unit Testing React Applications]][Unit Testing React Applications]

Try as we might, no application is bomb-proof. There's always going to be an edge-case or a forgotten feature that breaks despite our best intentions. We can check things over in browsers all we like, but different setups can present different issues. If the conditions when we take a look aren't right we will never spot the issues. Even if we changed things to test them, that's takes time and is prone to human error.

By writing tests for our applications, these checks can be done automatically and in a fraction of the time it takes to check each section in a browser. The most primitive test we can automate is a unit test - a piece of code that checks the functionality of just one part of a wider project. By checking every unit works correctly, we can be fairly sure the application works as a whole.

Unit tests will cover all sorts of different scenarios - from components lacking required props to data being in a different format. By checking what we expect to happen against what actually happens, we can tell if something changed we didn't intend to.

In this tutorial, we make a `<Countdown />` component. It's written, but it doesn't work. What's up with that? By writing tests we can figure out what's supposed to happen, what's actually happening and what needs to change to get it to work. From snapshot tests to shallow rendering with Enzyme, it's all in there.

Unit tests are a small step on being totally sure the application works correctly. There's integration tests and end-to-end tests to deal with how everything works together, but also user testing, smoke testing and all sorts of other aspects that can (and should) be checked. This tutorial should get you in the right mindset to start checking over React components and write them in a way that's easily testable. Grab your copy now!

[Unit Testing React Applications]:{{ site.baseurl }}/assets/2018-04-03-react-testing-jest/test-react-with-jest-and-enzyme.jpg

[Web Designer]:https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-273/