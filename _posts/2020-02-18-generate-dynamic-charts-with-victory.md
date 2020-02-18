---
layout: post
title: Generate Dynamic Charts with Victory
date: 2020-02-18 12:00:00
image: 2020-02-18-generate-dynamic-charts-with-victory/generate-dynamic-charts-with-victory-cover.jpg
thumbnail: 2020-02-18-generate-dynamic-charts-with-victory/generate-dynamic-charts-with-victory-cover-sm.jpg
tags:
  - Tutorial
  - Net Magazine
  - JS
  - React
  - Victory
  - Chart
  - Graph
---

Charts and graphs are one of those things that it's just easier to reach for a third-party library to help create. Something like [D3][d3] is the go-to choice in this situation, but that story gets complicated when throwing React into the mix. Who handles updates then? It can quickly turn in to a headache.

Luckily for us there are libraries out there solving that problem for us. In the latest [Net Magazine][net magazine] we look at [Victory][victory] and how it can make charts in a React-friendly manner.

[![Generate Dynamic Charts with Victory][generate dynamic charts with victory]][generate dynamic charts with victory]

In a nutshell, Victory allows us to build common charts and graphs by plugging together a collection of pre-made components. In many cases, we would only need to provide some data and Victory will work out the rest for us.

While that sounds like a dream, it would make for a _really_ short tutorial otherwise. In this edition, we go through how to many a few common charts that power a dashboard interface. While customised axes, conditional formatting and interactive elements may end up being trivial, they are not always obvious what components needs to go where.

Victory is simple enough to get building pretty much straight away, but is also capable of creating some great visualisations. Personally, I'm a big fan of the [History of Sumo][history of sumo] put together for fivethirtyeight, which shows just what Victory is capable of.

To get started, grab a copy of the latest [Net Magazine][net magazine]. You can find the [tutorial files][github tutorial files] online to follow along and get building your own charts.

[Generate Dynamic Charts with Victory]:{{ site.baseurl }}/assets/2020-02-18-generate-dynamic-charts-with-victory/generate-dynamic-charts-with-victory.jpg

[net magazine]: https://www.myfavouritemagazines.co.uk/design/net-magazine-back-issues/net-april-2020-issue-330/
[d3]: https://d3js.org/
[victory]: https://formidable.com/open-source/victory/
[history of sumo]: https://projects.fivethirtyeight.com/sumo/
[github tutorial files]: https://github.com/mattcrouch/victory-tutorial
