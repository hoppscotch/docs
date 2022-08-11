---
title: Send a Server Sent Event request
description: Sample
menuTitle: SSE
position: 12
category: quickstart
---

## What is SSE?

SSE is a standard describing how servers can initiate data transmission towards clients once an initial client connection has been established.
An SSE connection can discard processed messages without accumulating all of them in memory making it a _memory-efficient implementation of XHR streaming._

SSE is perfect for scenarios such as:

- When an efficient unidirectional communication protocol is needed that won’t add unnecessary server load (which is what happens with long polling)

- When you need a protocol with a predefined standard for handling errors

- When you want to use HTTP-based methods for realtime data streaming

## How to use SSE platform

<img src="/realtime/SSE-dark.png"   class="dark-img" width="1280" height="640" alt=""/>
<img src="/realtime/SSE-light.png" class="light-img"  width="1280" height="640" alt=""/>

The user interface is pretty self explanatory

1. enter SSE url (e.g https://express-eventsource.herokuapp.com/events)
2. Choose the event type that you want to subscribe to and connect.
3. Message from the SSE server will automatically and continuously updated in the log area,
   until either the server or client (you) terminate the connection.
