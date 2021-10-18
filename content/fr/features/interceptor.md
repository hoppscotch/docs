---
title: Interception et add-ons
description: Exemple
menuTitle: Interception
position: 6
category: Fonctionnalités
---

**Accéder aux APIs bloquées par la restriction de CORS en utilisant soit le middleware proxyscotch/personnalisé soit l'extension web Hoppscotch.**

## Utilisation du Proxy

Activez le proxy dans les paramètres.

<img src="/api/Interceptor-light.png" class="light-img" height="1280" width="640" alt=""/>

<img src="/api/Interceptor-dark.png" class="dark-img" height="1280" width="640" alt=""/>

Vous pouvez remplacer cela par votre propre middleware de proxy si vous le souhaitez.

#### Comment fonctionne ProxyScotch

<img src="/api/ProxyScotch-light.png" class="light-img"  alt=""/>

<img src="/api/ProxyScotch-dark.png" class="dark-img"  alt=""/>

#### Utilisation d'un Middleware personnalisé

Puisque un `CORS` est aussi simple que l'ajout de quelques en-têtes HTTP, et que c'est le seul navigateur bloqué, vous pouvez créer un composant de type proxy qui va essentiellement faire un appel pour vous, obtenir la réponse de l'API désirée, ajouter ces en-têtes par-dessus, et ensuite la renvoyer à Hoppscotch.

_Voir aussi :_ [ProxyScotch Wiki GitHub](https://github.com/hoppscotch/hoppscotch/wiki/Proxy)

### Utilisation de l'extension Web Hoppscotch

1.  Téléchargez l'extension de navigateur Hoppscotch [here.](https://chrome.google.com/webstore/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld?hl=en)

2.  Activez-la dans les paramètres.

3.  Ouvrez l'extension et ajoutez de nouvelles origines
    <img src="/api/Extension.png"  height="400" width="300" halt=""/>

L'extension Hoppscotch route toutes les origines ajoutées vers le Proxy.
**Qu'est-ce que la restriction de CORS:** [Apprenez comment contourner la restriction de CORS en utilisant le proxy dans Hoppscotch](/rest#cors-restrictions)
