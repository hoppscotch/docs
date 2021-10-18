---
title: Requête des En-têtes
description: Exemple
menuTitle: En-têtes
position: 14
category: Fonctionnalités
---

### En-tête de requête `Http`

Ceci peut être utilisé dans une requête HTTP pour fournir un contexte à une requête en cours, afin que le serveur puisse adapter la réponse.
Par exemple, les en-têtes `Accept-*`v indiquent les formats autorisés et préférés de la réponse.
D'autres part les en-têtes peuvent être utilisés pour fournir des informations d'authentification, pour contrôler la mise en cache, ou pour obtenir des informations sur l'agent utilisateur, etc..,

## Modifier l'en-tête de la requête

Allez dans l'onglet `En-têtes` sous le champ URL et ajoutez vos en-têtes à la liste des en-têtes

<img src="/features/Header-dark.png" class="dark-img" height="1280" width="640" alt="IMAGES"/>
<img src="/features/Header-light.png" class="light-img" height="1280" width="640" alt="IMAGES"/>

## En-têtes couramment utilisés

| En-têtes courants   | Fonction                                                                                                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WWW-Authenticate    | Le serveur peut envoyer cet en-tête comme réponse initiale s'il a besoin d'une certaine forme d'authentification avant de répondre avec la ressource demandée.                           |
| Authorization [^1]  | Contient les informations d'identification pour l'authentification HTTP.                                                                                                                 |
| Proxy-Authorization | L'en-tête de requête HTTP `Proxy-Authorization` contient les informations d'identification pour authentifier un agent utilisateur auprès d'un serveur proxy                              |
| Age                 | La directive Age indique la durée maximale en secondes pendant laquelle les réponses récupérées peuvent être réutilisées (à partir du moment où la demande est faite)                    |
| Cache-Control       | La politique de cache définie par le serveur pour cette réponse, une réponse en cache peut être stockée par le client et réutilisée jusqu'à la durée définie par l'en-tête Cache-Control |

[^1]: Hoppscotch gère automatiquement cet en-tête, lorsque vous ajoutez les Auth Credentials dans l'onglet `Autorisation`. Mais dans le cas où le serveur est de type personnalisé, vous pouvez ajouter manuellement vos informations d'identification dans cet en-tête.
