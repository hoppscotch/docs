---
title: Plateforme en temps réel
description: "Utilisation de la plateforme en temps réel"
position: 4
category: Pour commencer
features:
  - "WebSocket"
  - "SSE (server-sent Events)"
  - "Socket.IO"
  - "MQTT"
---

<img src="/realtime/Realtime-dark.png"   class="dark-img" width="1280" height="640" alt=""/>
<img src="/realtime/Realtime-light.png" class="light-img"  width="1280" height="640" alt=""/>
<alert type="success">

Cette documentation est un travail en progression!

</alert>
Hoppscotch vous aide à développer des applications web en temps réel qui nécessitent une connexion persistante entre le serveur et le client.
Hoppscotch permet actuellement de tester les protocoles de communication en temps réel suivants:

<list :items="features"></list>

## WebSockets

<img src="/realtime/Websocket-dark.png"   class="dark-img" width="1280" height="640" alt=""/>
<img src="/realtime/Websocket-light.png" class="light-img"  width="1280" height="640" alt=""/>

Entrez votre `Websocket URL`, les protocoles valides et cliquez sur connecter. Une fois la connexion réussie, vous pouvez envoyer des messages et voir la réponse en temps réel dans le volet du journal.

_Voir aussi :_ [WebSockets](/quickstart/websocket)

## MQTT

<video loop playsinline controls>
  <source src="/realtime/mqtt.webm" type="video/webm" />
 <source src="/realtime/mqtt.mp4" type="video/mp4" />
</video>

Protocole `MQTT` (Message Queuing Telemetry Transport).

Une fois connecté au serveur MQTT, vous pouvez soit publier un message sous un sujet, soit vous abonner à un sujet pour obtenir les messages relatifs à ce sujet envoyés à travers le serveur en temps réel.

_Voir aussi :_ [MQTT](/quickstart/mqtt)
