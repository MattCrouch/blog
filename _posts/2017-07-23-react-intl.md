---
layout: post
title: Use React to Handle Internationalisation
date: 2017-07-23 12:00:00
image: 2017-07-23-react-intl/react-intl-tutorial.jpg
thumbnail: 2017-07-23-react-intl/react-intl-tutorial-sm.jpg
tags:
- JavaScript
- Tutorial
- React
- I18n
- Component

---

Sacré bleu! In the latest [Web Designer][Web Designer] talk the local lingo and get internationalisation into your React projects using [React-Intl][React-Intl].

Internationalisation - or i18n for those who don't like typing so much - is key if your site is to be truly global. While your primary visitors may speak English, who's to say they format their dates the same? Currency is tricky too. One man's comma is another mans decimal point.

The problem is that i18n can be quite tricky to implement. Typically it requires some kind of server render as shifting all the logic client-side would be very wasteful.

[React-Intl][React-Intl] - made by the folks at Yahoo of all places - is a component system for React that takes a large amount of hassle out of i18n. With _most_ browsers including the `Intl` API, all that needs to be sent over is the text translations, which can be swapped out by the provided placeholder components.

This tutorial goes through the steps in implementing i18n in an _obviously_ fictional London Tours shopping website. You can [give it a go][Tutorial Demo] and see how it works. It adapts to the language of the browser or operating system you're using, so you may need to root around your settings to give it a proper test drive.

If this sounds like the sort of thing that would interest you pick up a copy of [Web Designer][Web Designer] and give it a try!

[Web Designer]:https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-264/
[React-Intl]:https://github.com/yahoo/react-intl
[Tutorial Demo]:http://mattcrouch.github.io/reactintl/