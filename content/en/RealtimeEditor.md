---
title: Realtime platform
description: 'Know your way around the Hoppscotch Interface'
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
<br></br>
Hoppscotch helps you develop Real-time web apps that require persistent connection between the server and client.
Hoppscotch currently allows the testing of the following Real-time Communication protocols:

<list :items="features"></list>

<br></br>

## <b><h2 style="font-size:24px">WebSockets</h2></b>
<hr>
<br></br>
<img src="/Resources/en/Realtime/Websocket-dark.png"   class="dark-img" width="1280" height="640" alt=""/>
<img src="/Resources/en/Realtime/Websocket-light.png" class="light-img"  width="1280" height="640" alt=""/>
<br></br>

Enter Your `Websocket URL` ,valid protocols and click on connect . Once successfully connected you can send messages and see the realtime response on the log pane.
<br></br>

### <b><h3 style="font-size:18px">Troubleshooting</h3></b>

Make sure you entered valid websocket URL:
<img src="/Resources/en/Realtime/websocketURL-light.png" width="600" height="100" alt="web socket URL structure"/>

Donot add invalid/blank protocol before you connect to a websocket.
<br></br>




## <b><h2 style="font-size:24px">MQTT</h2></b>
<hr>
<br></br>

<video loop playsinline controls>
  <source src="/Resources/en/Realtime/mqtt.webm" type="video/webm" />
 <source src="/Resources/en/Realtime/mqtt.mp4" type="video/mp4" />
</video>

<br></br>

`MQTT` (Message Queuing Telemetry Transport) protocol.

Once connected to the MQTT server, You can either publish a message under a topic or subscribe to a topic to get messages pertaining to that topic being sent across the server in real-time. 

<b>*See Also :*   <nuxt-link to='/GraphQl platform'>Working with Real-time Web protocols(Guide) </nuxt-link>
</b>
<br></br>