---
title: Plateforme API Rest
description: "Éditeur Rest"
position: 2

category: Pour commencer
---

<alert type="success">

Cette documentation est un travail en cours !

</alert>

<video loop playsinline controls>
  <source src="/api/APIvid.webm" type="video/webm" />
  <source src="/api/APIvid.mp4" type="video/mp4" />
</video>
Vous pouvez effectuer des requêtes d'API et examiner les réponses à l'aide de Hoppscotch.
Une requête d'API vous permet de récupérer ou d'envoyer des données vers et depuis un point de terminaison de l'API.

Les méthodes http courantes utilisées dans les requêtes d'API sont :

- `GET` : Récupérer des informations sur la ressource API REST
- `POST` : Créer une ressource API REST
- `PUT` : Mise à jour d'une ressource d'API REST
- `DELETE` : Supprimer une ressource API REST ou un composant connexe

D'autres méthodes comme `HEAD`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH` et d'autres méthodes `CUSTOM` peuvent également être utilisées.
Passons en revue les fonctionnalités offertes par la plateforme API Hoppscotch :

## Comment utiliser

---

### Choisir la méthode:

<img src="/api/method-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/api/method-light.png" class="light-img" height="1280" width="640" alt=""/>

### Collections

#### Ajouter des requêtes aux collections

Cliquez sur le bouton "Enregistrer", à côté de "Envoyer", nommez votre requêtes et ajoutez-la aux collections existantes ou nouvelles.

<img src="/api/nameRequest-light.png" class="light-img" height="1280" width="640" alt=""/>
<img src="/api/nameRequest-dark.png" class="dark-img" height="1280" width="640" alt=""/>

Vous pouvez ajouter vos requêtes aux dossiers ou sous-dossiers des collections.

### Ajout d'un comportement dynamique aux requêtes:

<img src="/api/dynamic-light.png" class="light-img" height="1280" width="640" alt=""/>
<img src="/api/dynamic-dark.png" class="dark-img" height="1280" width="640" alt=""/>

The editor allows you to add dynamic behaviour to requests and collections.This lets you add `parameters`, `Headers`, `Authentication`, build `pre-request scripts` and write `tests`.
L'éditeur vous permet d'ajouter un comportement dynamique aux requêtes et aux collections, d'ajouter des `paramètres`, des `en-têtes` et des `authentifications`, de concevoir des `scripts de pré-requête` et d'écrire des `tests`.

_Voir aussi :_

- [Écrire des Scripts de pré-requête](/quickstart/scripts)

- [Écrire des Tests](/quickstart/tests)

### Corps de la réponse :

<img src="/api/response-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/api/response-light.png" class="light-img" height="1280" width="640" alt=""/>

La réponse du `point de terminaison de l'API` peut être visualisée ici. Vous pouvez télécharger ou copier la réponse pour une utilisation ultérieure.

## Environnements

Les variables d'environnement vous permettent de stocker et de réutiliser des valeurs dans vos requêtes et scripts.

<img src="/api/editEnv-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/api/editEnv-light.png" class="light-img" height="1280" width="640" alt=""/>

**Voir aussi :** [How to use environment variables](/quickstart/rest#environment-variables)

## Raccourcis clavier

**Optimisé pour l'efficacité.**

<p>

| Raccourci                      | Action                             |
| ------------------------------ | ---------------------------------- |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | Envoyer/Annuler une requête        |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Enregistrer dans les collections   |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Copier de la requête               |
| <kbd>Ctrl</kbd> + <kbd>I</kbd> | Réinitialiser la requête           |
| <kbd>Alt</kbd> + <kbd>🠋</kbd>  | Sélectionner la méthode suivante   |
| <kbd>Alt</kbd> + <kbd>🠉</kbd>  | Sélectionner la méthode précédente |
| <kbd>Alt</kbd> + <kbd>G</kbd>  | Sélectionner la méthode `GET`      |
| <kbd>Alt</kbd> + <kbd>H</kbd>  | Sélectionner la méthode `HEAD`     |
| <kbd>Alt</kbd> + <kbd>P</kbd>  | Sélectionner la méthode `POST`     |
| <kbd>Alt</kbd> + <kbd>U</kbd>  | Sélectionner la méthode `PUT`      |
| <kbd>Alt</kbd> + <kbd>X</kbd>  | Sélectionner la méthode `DELETE`   |

</p>

## Dépannage

Il existe de nombreuses raisons possibles pour lesquelles vos requêtes d'API ne se comportent pas comme prévu.

This is Due to the API not sending the proper API headers( `Access-Control-Allow`). This issue can be solved in two ways.

1.  Ask whoever manages the API to add CORS support.
2.  Use Middleware like ProxyScotch or the [Hoppscotch Web Extension.](https://chrome.google.com/webstore/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld?hl=en) and enable it in the **Interceptor** section of settings

▶️**[Know more about Interceptor](/features/interceptor)**

### Connectivité

Si Hoppscotch ne parvient pas à envoyer votre requête, il se peut que vous rencontriez des problèmes de connectivité. Vérifiez votre connexion en essayant d'ouvrir une page dans votre navigateur Web.

### Pare-feu

Certains pare-feu peuvent être configurés pour bloquer les connexions hors navigateur. Si c'est le cas, vous devrez contacter votre administrateur réseau pour que hoppsocth fonctionne.

### Protocole incorrect

Vérifiez si vous utilisez https:// au lieu de http:// dans votre URL (ou vice versa).

### Les erreurs de Hoppscotch

Il est possible que Hoppscotch fasse des requêtes invalides à votre serveur API. Vous pouvez le confirmer en vérifiant les journaux de votre serveur (si disponibles). Si vous pensez que cela se produit, contactez [l'équipe Hoppscotch](/community).

### Les restrictions du CORS

#### Qu'est-ce qu'un CORS ?

Un `CORS` ou Cross-Origin Resource Sharing est un mécanisme de sécurité intégré dans les navigateurs modernes.
Il peut provoquer l'erreur suivante lors du test des `points de terminaison de l'API` locaux ou de certains autres points de terminaison de l'API avec Hoppscotch.

<img src="/api/CORS error example.png"   alt=""/>

Ceci est dû au fait que l'API n'envoie pas les bons en-têtes d'API(`Access-Control-Allow`). Ce problème peut être résolu de deux façons.

1.  Demandez à la personne qui gère l'API d'ajouter le support CORS.
2.  Utilisez un intergiciel comme ProxyScotch ou [L'extension web de Hoppscotch](https://chrome.google.com/webstore/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld?hl=en) et activez-le dans la section **Interception** des paramètres.

▶️**[En savoir plus sur Interception](/features/interceptor)**.
