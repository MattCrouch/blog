---
layout: post
title: Creating a Feedback App with React and WebSockets
date: 2018-07-28 12:00:00
image: 2018-07-28-feedback-app-react-websocket/feedback-app-react-websockets-cover.jpg
thumbnail: 2018-07-28-feedback-app-react-websocket/feedback-app-react-websockets-cover-sm.jpg
tags:
- JavaScript
- Tutorial
- React
- Node
- WebSockets
- Web Designer
---

Web applications today are fast-moving, multi-user experiences. Things change all the time by people using the same resources. What happens if someone makes a change to a file someone else is also editing? The updates would need to be pushed out to everyone else involved.

React is great at... well, reacting to things. It doesn't matter where those changes come from. We can update the application from a WebSocket for example and watch those updates trickle in. If you pick up the latest edition of [Web Designer][web designer], we go through exactly how to do that.

[![Create a feedback app with React and WebSockets][create a feedback app with react and websockets]][create a feedback app with react and websockets]

React is just a view layer - the way it looks is just an interpretation of the state that sits within that app. Typically we pass it data through requests to a server. The client makes a request, the server computes it and sends it back.

We can also pass that data in through WebSockets. These are little pipes of information between a server and one or more other clients. One client would send some kind of message to the server, which would compute that request and send out a result back to it as well as any other concerned parties, including other clients.

In the tutorial we build a real-time feedback application, much like you would find in a [Mad Sad Glad][mad sad glad] project retrospective. Users log in, provide a username and provide feedback under happy and sad columns. As they do so, other connected clients get those updates too and can start rating the ones they agree with. The ones rated highest rise to the top.

Not only are we building the React front end, we also dip into building WebSockets in Node using the [ws][ws] package.

Pick up a copy if you're interested. It's a nice little app that can be used for a bunch of different things. You can stick it on any device, even an Xbox on a nice big TV!

[![WebSocket app on Xbox][websocket app on xbox]][websocket app on xbox]

[Create a feedback app with React and WebSockets]:{{ site.baseurl }}/assets/2018-07-28-feedback-app-react-websocket/feedback-app-react-websockets.jpg
[WebSocket app on Xbox]:{{ site.baseurl }}/assets/2018-07-28-feedback-app-react-websocket/websocket-app-xbox.jpg

[web designer]: https://www.myfavouritemagazines.co.uk/web-designer-print-back-issues/web-designer-issue-277/
[mad sad glad]: http://retrospectivewiki.org/index.php?title=Glad,_Sad,_Mad
[ws]: https://www.npmjs.com/package/ws
