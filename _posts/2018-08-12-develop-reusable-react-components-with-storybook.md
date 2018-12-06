---
layout: post
title: Develop reusable React components with Storybook
date: 2018-08-12 12:00:00
image: 2018-08-12-develop-reusable-react-components-with-storybook/develop-reusable-react-components-cover.jpg
thumbnail: 2018-08-12-develop-reusable-react-components-with-storybook/develop-reusable-react-components-cover-sm.jpg
tags:
  - JavaScript
  - Tutorial
  - React
  - Storybook
  - Component
  - Net Magazine
---

The best pieces of code are the ones that aren't written. Making generic, reusable classes has been the key to good development for the longest time. The same goes for React and its component system. Make a generic `<Button/>` and build from there.

Getting through a project without writing any new components would be a dream. All us as developers would need to do is join the dots. In the latest edition of [Net magazine][net magazine] we go through how best to make that dream a reality.

[![Develop reusable React components][develop reusable react components]][develop reusable react components]

[Storybook][storybook] is an environment designed to help develop UI components in isolation. The idea being that their look and feel comes solely from the data passed to it in whatever way is necessary. Developers can make their components here away from the concerns of the main project and know as soon as it comes to connecting it altogether there won't be any loose ends.

If all components get developed using Storybook, over time it becomes a gallery of the work produced. Each component would have its own page - or "story" - which described how it looks and how it works. Designers can then use it as a reference to help style the next new feature.

In this tutorial we will be going through how to start building a component system. We start off at the basic building blocks with the quintessential button element. From there, we see the benefits of the system as we compose them together to make various card components.

We also go through some of the features of Storybook to help us get the most out of this process. It has some great, useful plugins ready to go such as Knobs or Storyshots. For anything else that isn't included there are plenty of third-party options or even the chance to make your own!

Take a look at the sort of thing we will be building over in my [Github][github]. There's even a [demo][demo] to play around with to see if it's worth your time.

If you think it is, pick up a copy and give it a try. Hopefully the next redesign your company goes through Storybook can be introduced as part of that process and everyone can start to feel the benefits it can bring!

[Develop reusable React components]:{{ site.baseurl }}/assets/2018-08-12-develop-reusable-react-components-with-storybook/develop-reusable-react-components.jpg

[net magazine]: https://www.myfavouritemagazines.co.uk/design/net-magazine-back-issues/net-september-2018-issue-310/
[storybook]: https://storybook.js.org/
[github]: https://github.com/MattCrouch/storybook-tutorial
[demo]: https://mattcrouch.github.io/storybookexample/
