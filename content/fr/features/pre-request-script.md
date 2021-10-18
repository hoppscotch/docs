---
title: Scripts de pré-requête
description: Exemple
menuTitle: Script de pré-requête
position: 9
category: Fonctionnalités
---

<img src="/Features/preSnippet-dark.png" class="dark-img" alt=""/>
<img src="/Features/preSnippet-light.png" class="light-img"  alt=""/>

## Référence JavaScript de Hoppscotch

Hoppscotch fournit des API JavaScript qui peuvent être utilisées dans la création de tests. \
Vous pouvez saisir votre JavaScript manuellement ou utiliser les Snippets que vous verrez à droite de l'éditeur de code.

#

## L'objet `pw`

`pw.*` donne accès aux données et aux variables des requêtes et des réponses de votre instance Hoppscotch.

### `env`

Accéder aux variables disponibles dans l'environnement actuel

#### Définir une variable d'environnement

```javascript
pw.env.set("variable", "value");
```

#### Enregistrer l'horodatage actuel dans une variable

```javascript
// Définir la variable d'horodatage
const currentTime = Date.now();
pw.env.set("timestamp", cuttentTime.toString());
```

#### Variable aléatoire

```javascript
// Définir une variable de nombre aléatoire
const min = 1;
const max = 1000;
const randomArbitrary = Math.random() * (max - min) + min;
pw.env.set("randomNumber", randomArbitrary.toString());
```

## Prochaines étapes

Pour plus de détails sur l'utilisation des scripts de pré-demande, consultez <nuxt-link to= "/quickstart/scripts">Scripts de pré-requête (Guide)</nuxt-link>, <nuxt-link to= "/features/tests">Écrire des tests</nuxt-link>
