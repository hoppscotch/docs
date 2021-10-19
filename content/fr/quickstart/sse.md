---
title: Envoyer une demande d'événement envoyé par le serveur
description: Modèle
menuTitle: SSE
position: 12
category: Démarrage rapide
---

## Qu'est-ce que le SSE ?

Le SSE est une norme décrivant comment les serveurs peuvent initier la transmission de données vers les clients une fois qu'une connexion client initiale a été établie.
Une connexion SSE peut rejeter les messages traités sans les accumuler tous en mémoire, ce qui en fait une _implémentation efficace en termes de mémoire du streaming XHR_.

Le SSE est parfait pour des scénarios tels que :

- Lorsqu'on a besoin d'un protocole de communication unidirectionnel efficace qui n'ajoute pas de charge inutile au serveur (ce qui est le cas avec les longs polling)

- Vous avez besoin d'un protocole doté d'une norme prédéfinie pour la gestion des erreurs.

- Lorsque vous souhaitez utiliser des méthodes basées sur le protocole HTTP pour la diffusion de données en temps réel.

## Comment utiliser la plate-forme SSE ?

<img src="/realtime/SSE-dark.png"   class="dark-img" width="1280" height="640" alt=""/>
<img src="/realtime/SSE-light.png" class="light-img"  width="1280" height="640" alt=""/>

L'interface utilisateur est assez explicite

1. entrez l'url du SSE (par exemple https://express-eventsource.herokuapp.com/events)
2. Choisissez le type d'événement auquel vous voulez vous abonner et connectez-vous.
3. Les messages du serveur SSE seront automatiquement et continuellement mis à jour dans la zone de journal,
   jusqu'à ce que le serveur ou le client (vous) mette fin à la connexion.
