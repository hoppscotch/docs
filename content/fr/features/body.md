---
title: Corps de la requête
description: Exemple
menuTitle: Corps
position: 12
category: Fonctionnalités
---

<img src="/features/body-dark.png" class="dark-img" height="1280" width="640" alt="API DOCUMENTATION IMAGES"/>
<img src="/features/body-light.png" class="light-img" height="1280" width="640" alt="API DOCUMENTATION IMAGES"/>

### Envoi de données dans le corps de la requête

A request body is data sent by the client to your API. You will need to send body data with requests whenever you need to modify data in the API . _E.g when sending a request to add a new student to a college database, you might include the student's data in `JSON`._

The body section is typically used when you choose the following methods:

- `PUT`
- `POST`
- `PATCH`

The Body tab in Hoppscotch allows you to specify the data you need to send with a request.
You can choosefrom the dropdown menu various different content-types of body data to suit your API.

Le corps d'une requête est constitué des données envoyées par le client à votre API. Vous devrez envoyer des données dans le corps de la requête chaque fois que vous devrez modifier des données dans l'API. Par exemple, lorsque vous envoyez une requête pour ajouter un nouvel étudiant à la base de données d'une université, vous pouvez inclure les données de l'étudiant en `JSON`.

La section corps est généralement utilisée lorsque vous choisissez les méthodes suivantes :

- `PUT`
- `POST`
- `PATCH`

L'onglet Corps de Hoppscotch vous permet de spécifier les données que vous devez envoyer avec une requête.
Vous pouvez choisir dans le menu déroulant différents types de contenu pour les données du corps, en fonction de votre API.

## Types de contenu

<alert>
Par défaut, Hoppscotch sélectionnera Aucun, laissez-le sélectionné si vous n'avez pas besoin d'envoyer un corps avec votre requête.
</alert>

| Type de contenu                    | Function                                                                                                                                                               |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| applcation/json                    | Indique que le format du corps de la requête est JSON                                                                                                                  |
| application/Id + json              | Pour JSON-LD                                                                                                                                                           |
| application/hal+json               | Pour répondre aux API nécessitant le mediatype pour HyperText Application Language                                                                                     |
| application/ vnd.api + json        | Le type MIME application/vnd.api+json est réservé aux communications utilisant le protocole `JSON API`.                                                                |
| application/xml                    | Indique que le format du corps de la requête est XML.                                                                                                                  |
| application/x-www-form-url-encoded | Décrit les données de formulaire qui sont envoyées en un seul bloc dans le corps du message HTTP.                                                                      |
| multipart/form-data                | Le corps du message HTTP est divisé en plusieurs parties, chacune contenant une section distincte de données, Chaque partie peut contenir un type de contenu différent, par exemple, `text/plain', `image/png', `image/gif'. |
| text/html                          | Le type de contenu text/html est un type de média Internet ainsi qu'un type de contenu MIME.                                                                           |
| text/plain                         | Le type de contenu text/plain est le sous-type générique du texte brut.                                                                                                |

**Voir aussi**: <nuxt-link to= "/quickstart/rest#uploading-files-via-an-api">Télécharger du contenu à l'aide de form-data (Démarrer rapidement avec Hoppscotch)</nuxt-link>
