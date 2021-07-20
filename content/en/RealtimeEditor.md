---
title: Realtime platform
description: "Know your way around the Hoppscotch Interface"
position: 5
category: Getting started
features:
  - "WebSocket"

  - "SSE (server-sent Events)"

  - "Socket.IO"

  - "MQTT"
---

<alert type="success">

This documentation is a work in progress!

</alert>
Hoppscotch helps you develop Real-time web apps that require persistent connection between the server and client.
Hoppscotch currently allows the testing of the following Real-time Communication protocols:

<list :items="features"></list>

## WebSockets

---

<img src="/Resources/en/Realtime/Websocket-dark.png"   class="dark-img" width="1280" height="640" alt=""/>
<img src="/Resources/en/Realtime/Websocket-light.png" class="light-img"  width="1280" height="640" alt=""/>

Enter Your `Websocket URL` ,valid protocols and click on connect . Once successfully connected you can send messages and see the realtime response on the log pane.

### Troubleshooting

Make sure you entered valid websocket URL:
<img src="/Resources/en/Realtime/websocketURL-light.png" width="600" height="100" alt="web socket URL structure"/>

Donot add invalid/blank protocol before you connect to a websocket.

## MQTT

---

<video loop playsinline controls>
  <source src="/Resources/en/Realtime/mqtt.webm" type="video/webm" />
 <source src="/Resources/en/Realtime/mqtt.mp4" type="video/mp4" />
</video>

`MQTT` (Message Queuing Telemetry Transport) protocol.

Once connected to the MQTT server, You can either publish a message under a topic or subscribe to a topic to get messages pertaining to that topic being sent across the server in real-time.

_See Also :_ <nuxt-link to='/GraphQl platform'>Working with Real-time Web protocols(Guide) </nuxt-link>
