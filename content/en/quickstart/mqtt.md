---
title: Send a MQTT request
description: Sample
menuTitle: MQTT
position: 13
category: quickstart
---
## `MQTT` (Message Queuing Telemetry Transport) protocol.

MQTT is a publish/subscribe protocol that is lightweight and requires  minimal memory,CPU and bandwidth to connect an IoT devices. Unlike HTTP’s request/response paradigm, MQTT is event driven and enables messages to be pushed to clients.

Once connected to the MQTT server, You can either publish a message under a topic or subscribe to a topic to get messages pertaining to that topic being sent across the server in real-time.

<video loop playsinline controls>
  <source src="/Realtime/MQTT.webm" type="video/webm" />
 <source src="/Realtime/MQTT.mp4" type="video/mp4" />
</video>

### Steps to use MQTT platform

1. Connect to the mqtt server (e.g `wss://test.mosquitto.org:8081`)

2. Check Log to see if conncetionnwas successful or not

3. To test your server add messages under a topic and publish it.

4. Any other device in the server that has subscribed to that topic will get your communication

5. You can recieve messages by subscribing to a topic that some other device in the server is transmitting in.

6. All results will be available in the Log section.