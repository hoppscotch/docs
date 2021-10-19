---
title: Rédaction de scripts de pré-requête
menuTitle: Scripts de pré-requête 
description: "Guide Hoppscotch pour écrire des scripts de pré-requête et des tests pour l'API REST"
position: 6
category: Démarrage rapide
---

## Scripts

<img src="/scripting/Script -order-dark.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/scripting/Script -order-light.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>

Hoppscotch vous permet d'ajouter un **comportement dynamique** aux requêtes REST. Cela vous permet d'écrire des suites de tests et de construire des requêtes qui peuvent contenir des paramètres dynamiques.
Vous pouvez ajouter du code `javaScript` qui s'exécute à 2 événements dans le flux :

- Avant qu'une requête soit envoyée au serveur, un <a href = "Scripting#pre-request-script">script de pré-requête</a> peut être ajouté

- Après la réception d'une réponse, un <a href = "Scripting#test-script">script de test</a> peut être exécuté.

<alert type="success">Vous pouvez ajouter des scripts de pré-requête et de test aux demandes enregistrées dans les collections OU à une requête non enregistrée dans une collection. </alert>

Hoppscotch exécutera alors les scripts avec les requêtes dans l'ordre spécifié.

## Script de pré-requête

Les scripts de pré-requêtes sont un morceau de code qui sera exécuté avant l'exécution de la requête.

Nous pouvons utiliser le script de requête préalable pour une tâche de prétraitement telle que :

- Définition des paramètres, des en-têtes
- Ajout des données du corps
- Ajout de valeurs variables
- Ajout d'horodatages dans les en-têtes de requête
- Etc...

### Rédaction de scripts de pré-requête

Un objet spécial de l'API `pw` contient diverses méthodes pour créer des scripts et des tests et est mis à disposition de manière globale. Il peut être référencé par son nom pour accéder à des méthodes telles que `pw.env.set()`.

_voir aussi :_

```javascript
pw.env.set("foo", "bar");
```

Explorons quelques-uns des cas d'utilisation :

## Exemples

### Définition des variables d'environnement

`pw.env.set()` peut être utilisé directement pour une définition rapide et pratique des variables d'environnement. Ou, si vous préférez, `pw.env.set()` peut être utilisé pour mieux organiser le code de la requête.

```javascript
pw.env.set("baseURL", "https://httpbin.org");
pw.env.set("method", "get");
```

pour accéder à l'utilisation de ces variables nouvellement définies :

```bash
<<<variable_name>>>
```

<img src="/scripting/envscript-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/scripting/envscript-light.png" class="light-img" height="1280" width="640" alt=""/>

### Génération de valeurs aléatoires pour tester l'API

Prenons un cas où nous devons tester de manière aléatoire des données utilisateur disponibles à un point de terminaison.

Utilisons le point de terminaison API GET suivant `https://reqres.in/api/users/`.

Ajoutez `<<<randomValue>>>` à l'URL du point de terminaison.

Maintenant, dans l'onglet du script de pré-requête, ajoutez la logique suivante.

<code-group>

<code-block label = "Pre-request" active>

```javascript
var random = Math.floor(Math.random() * 10);
pw.env.set("randomVal", random);
```

</code-block>

<code-block label="API url">

```bash
 https://reqres.in/api/users/<<<randomValue>>>
```

</code-block>

</code-group>
