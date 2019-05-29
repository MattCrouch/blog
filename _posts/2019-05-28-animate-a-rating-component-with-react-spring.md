---
layout: post
title: Animate a rating component with React Spring
date: 2019-05-28 12:00:00
image: 2019-05-28-2019-05-28-animate-a-rating-component-with-react-spring/animate-a-rating-component-with-react-spring-cover.jpg
thumbnail: 2019-05-28-2019-05-28-animate-a-rating-component-with-react-spring/animate-a-rating-component-with-react-spring-cover-sm.jpg
tags:
  - Tutorial
  - Web Designer
  - JS
  - React
  - Animation
---

Animations can make or break a website. Without them it can lack personality, but with too many and it can become overwhelming. Even after finding the right balance, an unnatural movement can make a well-intentioned interaction seem jarring. All of this seems like we'd be fighting a losing battle.

Thankfully there are animation libraries that take a lot of the stress out of this for us. In the latest [Web Designer][web designer] we take the latest React-based library to gain traction - [React Spring][react spring].

[![Animate a rating component with React Spring][animate a rating component with react spring]][animate a rating component with react spring]

Where possible, always use CSS animations. They're predictable, more optimised and don't rely on anything other than just CSS. The dream scenario.

Dynamic animations have always been a bit of a pain point. We don't know them at build time, so we can't just write keyframes for them. Throw in an extra complication like React state and handling those manually will quickly become a headache.

React Spring takes the hassle out of animations. As a developer, all we need to do is tell a component where it should be and the library takes care of the rest. No timings, no easing functions and no stuttering.

As the name suggests it works on the concept of "springs". Animations are inspired by physics rather than any kind of length of time. We can adjust the physical attributes of a spring such as friction, tension or mass of the object being animated and React Spring calculates the motion. Animations feel natural by default because they... are natural.

The latest version (`v8`) works with React hooks by default. There's different hooks for each kind of animation, including transitions and repeated elements. They return some values, which can then be applied to whatever situation.

Typically those numbers describe animations, such as increasing a `transform` value. React Spring is only really interpolating some numbers, so they can also be used however the project requires them, such as counting up the number of sign-ups in a pleasing manner.

[![Example][example]][demo]

In this tutorial we make a ratings card component. It flips and shimmies. It's great. You can have a play around on the [demo][demo] and play around with the end result. All of those interactions are configurable through a couple of numbers.

We cover building out the card structure, the different components involved and the many ways React Spring can help us along the way. We make good use of `useSpring` and `useTrail` to make everything swish.

All of this is available in a tutorial inside [Web Designer 288][web designer]. It's out now, so pick up a copy!

[Animate a rating component with React Spring]:{{ site.baseurl }}/assets/2019-05-28-2019-05-28-animate-a-rating-component-with-react-spring/animate-a-rating-component-with-react-spring.jpg
[Example]:{{ site.baseurl }}/assets/2019-05-28-2019-05-28-animate-a-rating-component-with-react-spring/example.png

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-288/
[react spring]: https://www.react-spring.io/
[demo]: https://mattcrouch.github.io/reactspring/
