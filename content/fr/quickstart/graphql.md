---
title: Envoyer une requête GraphQL
menuTitle: GraphQL
description: "Guide de Hoppscotch pour les débutants en graphql"
position: 8
category: Démarrage rapide
---

<alert type="success">Cette documentation est un travail en progression!</alert>

## Introduction à GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.[^1]

GraphQL est un langage d'interrogation pour les API et un runtime pour remplir ces requêtes avec vos données existantes. GraphQL fournit une description complète et compréhensible des données de votre API, donne aux clients le pouvoir de demander exactement ce dont ils ont besoin et rien de plus, facilite l'évolution des API au fil du temps et permet de disposer de puissants outils de développementc'[^1].

## Ressources pour en savoir plus sur GraphQL

Il existe des tonnes de guides et de ressources sur GraphQL sur Internet, nous n'allons pas aborder les bases ici. Cependant, si vous voulez en savoir plus sur GraphQL, voici une liste de ressources et de tutoriels que la plupart des gens ont trouvé utiles:

#### Niveau : Débutant

- [Les bases de GraphQL](https://www.howtographql.com/basics/0-introduction/)
- [Guide pour les débutants de FreeCodeCamp](https://www.freecodecamp.org/news/a-beginners-guide-to-graphql-86f849ce1bec/)
- [Hasura.io introduction à graphql](https://hasura.io/learn/graphql/intro-graphql/introduction/)

#### Niveau : Intermédiaire

- [Graphql + nodejs](https://www.howtographql.com/graphql-js/0-introduction/)
- [React + Apollo graphql](https://www.howtographql.com/react-apollo/0-introduction/)

## Démonstration

Let's try some interesting examples to get a feel of Hoppscotch's Grapql Interface.
To know more about the components check [GraphQL section](/graphql).

Essayons quelques exemples intéressants pour avoir une idée de l'interface Grapql de Hoppscotch.
Pour en savoir plus sur les composants, consultez [La section GraphQL](/graphql).

### Faire une requête

Nous allons utiliser le point de terminaison non officiel mais bien maintenu de SpaceX `https://api.spacex.land/graphql`.

#### Etape 1 :

Naviguez vers [l'éditeur GraphQL](https://hoppscotch.io/graphql) et connectez-vous à l'URL mentionnée ci-dessus.

<img src="/graphql/GraphqlURL-dark.png" class="dark-img" height="1280" width="640" alt="graphqlURL"/>
<img src="/graphql/GraphqlURL-light.png" class="light-img" height="1280" width="640" alt="graphqlURL"/>

#### Etape 2:

Une fois connecté, Hoppscotch vous montrera automatiquement le
_schéma complet_ du point de terminaison.

Il est important d'explorer le schéma pour comprendre les différentes `requêtes`, `mutations`, `types` et `souscriptions` qui sont offertes par le point de terminaison.

La section Docs vous aide à les comprendre.

<img src="/graphql/schemadocs-dark.png" class="dark-img" height="1000" width="640" alt="Schema Docs"/>
<img src="/graphql/schemadocs-light.png" class="light-img" height="1280" width="640" alt="Schema Docs"/>

#### Etape 3 :

Nous allons savoir écrire une requête _GetCapsuleInfo_, pour obtenir les données associées à la capsule Crew Dragon qui a été utilisée pour lancer les astronautes.

Allez dans la section des requêtes et écrivez votre requête.

- L'ID de la capsule pour Dragon 2 est `C205`.
- Cliquez sur le bouton Lancer pour exécuter la requête.
- Consultez la section Corps de la réponse pour la réponse

<code-group>
  <code-block label ="Query" active>
  
  ```javascript
  
  query GetCapsuleInfo{
       capsule(id: "C205") {
      dragon {
        description
        active
        first_flight
        id
        orbit_duration_yr
      }
    }
  }
  ```
  
  </code-block>
  <code-block label = "Response" >
  
  ```javascript
  {
    "data": {
      "capsule": {
        "dragon": {
          "description": "Dragon 2 (aussi appelé Crew Dragon, Dragon V2, ou anciennement DragonRider)  est la deuxième version du vaisseau spatial Dragon de SpaceX, qui sera un véhicule à usage humain..",
          "active": true,
          "first_flight": "2019-03-02",
          "id": "dragon2",
          "orbit_duration_yr": 2
        }
      }
    }
  }
  
  ```
  
  </code-block>
</code-group>

Maintenant, allez dans la section docs, cherchez capsule et regardez toutes les requêtes supportées et personnalisez la requête actuelle. \
**Challenge:** Obtenir le nom de la mission pour la capsule `c205`

## Utilisation des variables

Hoppscotch vous permet de passer des variables dans la requête de la même manière que le terrain de jeu graphQL.

Pour démontrer l'utilisation des variables, écrivons une requête pour trouver les détails des missions de lancement du satellite Iridium.
( Mission id = `F3364BF1`)

- Dans la section variables, ajoutez les variables (**les variables doivent être au format json**)

```javascript
{"var" : "xyz"}
```

- Déclarez le nom de la variable et le type de variable ainsi que le nom de la requête

  ```javascript
  query QueryName($var: type!){
      query body
  }
  ```

- À l'intérieur de la requête, accédez aux variables déclarées de cette façon :

  ```javascript
     query QueryName($var: type!){
         mission(count: $var){
             ...
         }
     }
  ```

  Dans notre exemple.

<code-group>

  <code-block label = "Query" active>
  
  ```javascript
  query MissionData($id:ID!){
    mission(id:$id) {
      manufacturers
      name
      payloads{
      customers
      payload_type
      }
    }
    missionsResult(find: {id:$id}) {
      data {
  
        description
      }
  
  }
  }
  ```
  
  </code-block>
  
  <code-block label = "variables">
  
  ```javascript
  {"id" : "F3364BF"}
  ```
  
  </code-block >

</code-group>

[^1]: Définition à partir du site officiel de graphql
