---
title: Realtime platform
description: "using Realtime Paltform"
position: 4
category: Getting started
features:
  - "WebSocket"

  - "SSE (server-sent Events)"

  - "Socket.IO"

  - "MQTT"
---

<img src="/realtime/Realtime-dark.png"   class="dark-img" width="1280" height="640" alt=""/>
<img src="/realtime/Realtime-light.png" class="light-img"  width="1280" height="640" alt=""/>
<alert type="success">

This documentation is a work in progress!

</alert>
Hoppscotch helps you develop Real-time web apps that require persistent connection between the server and client.
Hoppscotch currently allows the testing of the following Real-time Communication protocols:

<list :items="features"></list>

## WebSockets

<img src="/realtime/Websocket-dark.png"   class="dark-img" width="1280" height="640" alt=""/>
<img src="/realtime/Websocket-light.png" class="light-img"  width="1280" height="640" alt=""/>

Enter Your `Websocket URL` ,valid protocols and click on connect . Once successfully connected you can send messages and see the realtime response on the log pane.
_See Also :_ <nuxt-link to='/quickstart/websocket'>WebSockets (hoppscotch quickstart guide) </nuxt-link>

## MQTT

<video loop playsinline controls>
  <source src="/realtime/mqtt.webm" type="video/webm" />
 <source src="/realtime/mqtt.mp4" type="video/mp4" />
</video>

`MQTT` (Message Queuing Telemetry Transport) protocol.

Once connected to the MQTT server, You can either publish a message under a topic or subscribe to a topic to get messages pertaining to that topic being sent across the server in real-time.

_See Also :_ <nuxt-link to='/quickstart/mqtt'>MQTT (hoppscotch quickstart guide) </nuxt-link>
