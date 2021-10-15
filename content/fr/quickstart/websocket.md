---
title: Send a WebSocket request
description: Sample
menuTitle: WebSocket
position: 11
category: quickstart
---

## Introduction

WebSockets are an alternative to HTTP communication in Web Applications.
They offer a long lived, bidirectional communication channel between client and server.
Once established, the channel is kept open, offering a very fast connection with low latency and overhead.

<img src="/realtime/Websocket-dark.png"   class="dark-img" width="1280" height="640" alt=""/>
<img src="/realtime/Websocket-light.png" class="light-img"  width="1280" height="640" alt=""/>

Enter Your `Websocket URL`, valid protocols and click on connect . Once successfully connected you can send messages and see the realtime response on the log pane.

### Troubleshooting

- Make sure you entered valid websocket URL:
  <img src="/realtime/websocketURL-light.png" width="600" height="74" alt="web socket URL structure"/>

- Do not add invalid/blank protocol before you connect to a websocket.
