---
title: GraphQL
description: "En savoir plus sur Hoppscotch GraphQL"
position: 3
category: Pour commencer
---

<video loop playsinline controls>
  <source src="/graphql/GraphQlDemoSpaceX.webm" type="video/webm" />
  <source src="/graphql/GraphQlDemoSpaceX.mp4"  type="video/mp4"  />
</video>

Si vous commencez à vous familiariser avec GraphQl, voici quelques liens utiles:

1. [Démarrez rapidement GraphQL](/quickstart/graphql)
2. <a href="https://www.howtographql.com/">howtographql.com</a>
3. <a href="https://graphql.org/learn/">howtographql.com</a>

Passons en revue les fonctionnalités fournies par l'éditeur Hoppscotch GraphQl et comment les utiliser.

### URL

<img src="/graphql/GraphqlURL-dark.png" class="dark-img" height="1280" width="640" alt="graphqlURL"/>
<img src="/graphql/GraphqlURL-light.png" class="light-img" height="1280" width="640" alt="graphqlURL"/>

Entrez ici l'URL du point de terminaison GraphQl.

### En-têtes

<img src="/graphql/GraphQlHeaderHighlight.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/graphql/GraphQlHeaderHighlight-light.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>

L'éditeur vous permet d'ajouter des paires en-tête-valeur à votre requête GraphQl.
Cas d'utilisation :
L'accès à un point de terminaison sécurisé peut nécessiter une authentification.

### Schema

<img src="/graphql/GraphqlSchema-dark.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/graphql/GraphqlSchema-light.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>

Vous pouvez afficher le schéma du point de terminaison GraphQl auquel vous vous êtes connecté dans ce panneau. Le schéma peut être téléchargé comme un fichier JSON ou copié dans votre presse-papiers.

### Requêtes

<img src="/graphql/graphqlQuery-dark.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/graphql/graphqlQuery-light.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>

Toutes les requêtes à faire au point de terminaison de GraphQl sont tapées dans cette section, il y a un formateur intégré qui prépare la requête, il est accessible dans le coin supérieur droit du volet de requête ou avec le raccourci `Ctrl` + `P`.

Pour garder la requête épurée ou pour faciliter le débogage, vous pouvez utiliser la section des variables comme le montre la figure ci-dessous.

<img src="/graphql/GraphQlVar-dark.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/graphql/GraphQlVar-light.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>

### Réponse

<img src="/graphql/GrapQlResponse-dark.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/graphql/GrapQlResponse-light.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>

La réponse renvoyée par le point de terminaison de votre requête est affichée à la fin de la page. Elle peut être copiée dans le presse-papiers ou exportée dans un fichier JSON.

### Documentation du schéma

<img src="/graphql/schemadocs-dark.png" class="dark-img" height="400" width="640" alt="History Sidepanel"/>
<img src="/graphql/schemadocs-light.png" class="light-img" height="400" width="640" alt="History Sidepanel"/>

Dans la barre latérale de droite, vous pouvez consulter la documentation du point de terminaison GraphQl avec lequel vous travaillez.
La documentation est consultable et la documentation pour les requêtes, les mutations, les abonnements et les types est présente dans les onglets sous la barre de recherche.

### Historique

<img src="/graphql/GraphQlHistory-dark.png" class="dark-img" height="400" width="340" alt="History Sidepanel"/>
<img src="/graphql/GraphQlHistory-light.png" class="light-img" height="400" width="340" alt="History Sidepanel"/>

Toutes vos requêtes récentes sont accessibles à partir de l'onglet Historique, et vous pouvez reprendre là où vous l'avez laissé.

### Collections

Tout comme les collections de l'API Rest, Hoppscotch vous permet d'organiser vos requêtes GraphQl en collections.

<img src="/graphql/GraphQlcollectionHighlight.png" class="dark-img" height="300" width="440" alt="History Sidepanel"/>
<img src="/graphql/GraphQlcollectionHighlight-light.png" class="light-img" height="300" width="440" alt="History Sidepanel"/>

Vous pouvez importer des collections existantes (JSON) pour remplacer la collection actuelle, ou préserver la collection actuelle et ajouter de nouvelles collections à partir de vos sources.
Les collections peuvent également être exportées en JSON.

<img src="/graphql/importOrExportGraphqlCollection.png" class="dark-img" height="1000" width="640" alt="History Sidepanel"/>
<img src="/graphql/importOrExportGraphqlCollection-light.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>
