---
title: Envoyer une requête MQTT
description: Exemple
menuTitle: MQTT
position: 13
category: Démarrage rapide
---

## Protocole `MQTT` (Message Queuing Telemetry Transport).

MQTT est un protocole de publication/abonnement léger qui nécessite un minimum de mémoire, de CPU et de bande passante pour connecter des appareils IoT. Contrairement au paradigme requête/réponse de HTTP, MQTT est axé sur les événements et permet d'envoyer des messages aux clients.

Une fois connecté au serveur MQTT, vous pouvez soit publier un message sous un sujet, soit vous abonner à un sujet pour obtenir les messages relatifs à ce sujet envoyés à travers le serveur en temps réel.

<video loop playsinline controls>
  <source src="/realtime/MQTT.webm" type="video/webm" />
 <source src="/realtime/MQTT.mp4" type="video/mp4" />
</video>

### Étapes pour utiliser la plateforme MQTT

1. Connectez-vous au serveur mqtt (par exemple `wss://test.mosquitto.org:8081`)

2. Vérifiez le journal pour voir si la connexion a réussi ou non.

3. Pour tester votre serveur, ajoutez des messages sous un sujet et publiez-les.

4. Tout autre dispositif du serveur qui a souscrit à ce sujet recevra votre communication.

5. Vous pouvez recevoir des messages en vous abonnant à un sujet dans lequel un autre appareil du serveur émet.

6. Tous les résultats seront disponibles dans la section Journal.
