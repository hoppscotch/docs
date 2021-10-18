---

title: Envoyer une requête REST
menuTitle: REST
description: "Guide de Hoppscotch pour les requêtes REST"
position: 5
category: Démarrage rapide
---Si vous êtes nouveau dans le développement d'API et que vous voulez en savoir plus sur les bases des API, suivez ce guide !

   <img src="/guides/Illustration-dark.png" class="dark-img" height="600" width="640" alt=""/>
   <img src="/guides/Illustration-light.png" class="light-img" height="600" width="640" alt=""/>

## Envoi de requêtes

Créons notre première requête API REST !

Nous allons écrire une requête avec une simple méthode `GET` pour obtenir des informations sur les personnages de <a href="https://www.rickandmortyapi.com">Rick and Morty</a> Tv show.

<img src="/api/method-dark.png" class="dark-img" height="1280" width="640" alt=""/>

<img src="/api/method-light.png" class="light-img" height="1280" width="640" alt=""/>

Commencez par choisir la méthode `GET` et connectez-vous à l'URL ci-dessous.
Cliquez sur `ENVOYER`.
Faites défiler jusqu'au panneau de réponse et vous voyez la réponse suivante.

<code-group>
  <code-block label ="URL" active>
  
  ```bash
  https://rickandmortyapi.com/api
  ```
  
  </code-block>
  
  <code-block label="Response" active>
  
  ```bash
  {
    "characters": "https://rickandmortyapi.com/api/character",
    "locations": "https://rickandmortyapi.com/api/location",
    "episodes": "https://rickandmortyapi.com/api/episode"
  }
  ```
  
  </code-block>
</code-group>

Now lets Try to Get results on the characters.
in the URL add `/character`. and give it a run.
the response should be like this:

Maintenant, essayons d'obtenir des résultats sur les caractères.
dans l'URL ajoutez `/character`. et donnez-lui un essai.
la réponse devrait être comme ceci :

<code-group>

  <code-block label = "Response" active>
  
  ```bash
  {
    "info": {
      "count": 671,
      "pages": 34,
      "next": "https://rickandmortyapi.com/api/character?page=2",
      "prev": null
    },
    "results": [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
  
        }//.......
  ```
  
  </code-block>
  
  <code-block label="API Endpoint">
  
  ```bash
  https://rickandmortyapi.com/api/character
  ```
  
  </code-block>
  
</code-group>

<i>Félicitations pour la requête API réussie, Essayez d'expérimenter avec.

`/location` et `/episode` également.

 </i>

## Utilisation des paramètres

Dans la section précédente, nous avons obtenu une longue réponse avec des détails sur tous les personnages de la série Rick And Morty.
Vous pouvez également obtenir des détails sur un seul personnage .

Utilisons la section paramètres de Hoppscotch pour obtenir des détails sur toutes les versions de Morty Smith en vie dans le multivers.

Vous pouvez envoyer des paramètres de chemin et de requête avec vos requêtes en utilisant le champ `URL` et le champ `paramètres`.

You can send path and query parameters with your requests using the `URL` field and the `parameters` field.

**Dans le champ URL:**

- Pour ajouter des paramètres de requête, ajoutez `?` à la fin de l'URL de la requête
- Ajoutez le paramètre `id=1`, si vous ajoutez plusieurs paramètres, séparez-les par `&`.

Comme ceci :

<code-group>
  <code-block label= "Paramètres d'URL" active >
  
  ```bash
  https://rickandmortyapi.com/api/character/?name=morty&status=alive
  ```
  
  </code-block>
</code-group>

**Utilisation de l'onglet Paramètres:**

- `name` `morty`

* `status` `alive`

Ceci sera automatiquement ajouté à votre chemin d'accès à l'API .

<img src="/guides/param-light.png" class="light-img" height="1280" width="640" alt=""/>

<img src="/guides/param-dark.png" class="dark-img" height="1280" width="640" alt=""/>

Vous obtiendrez la réponse suivante:

<code-block label= "Morty" active>

```javascript
{
  "info": {
    "count": 54,
    "pages": 3,
    "next": "https://rickandmortyapi.com/api/character/?page=2&name=morty",
    "prev": null
  },
  "results": [
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": ""
      .....
    },
    {
      "id": 18,
      "name": "Antenna Morty",
      "status": "Alive",
      "species": "Human",
      "type": "Human with antennae",
      ....
    }
```

</code-block>

## Utilisation des collections

Lorsque vous travaillez et testez plusieurs points de terminaison, c'est toujours une bonne idée de les organiser par catégorie pour une référence future ou pour la collaboration avec d'autres développeurs.
Prenons certaines de nos requêtes Rick And Morty et organisons-les dans une collection.

- Allez dans l'onglet Collections dans la barre latérale de droite.
- Créez une nouvelle collection appelée `rick&mortyAPI`.
- Nommez la requête sur laquelle vous travaillez actuellement.
- Ajoutez-la à la collection.
- Vous pouvez également créer des sous-dossiers à l'intérieur d'une collection.

<video loop playsinline controls>
  <source src="/guides/collections.webm" type="video/webm" />
  <source src="/guides/collections.mp4"  type="video/mp4"  />
</video>

## Variables d'environnement

**Les variables d'environnement vous permettent de stocker et de réutiliser des valeurs dans vos requêtes et scripts**

Cas d'utilisation :

- En stockant une valeur dans une variable, vous pouvez la référencer tout au long de votre section de requête.
- Si vous devez mettre à jour la valeur, vous ne devez la modifier qu'à un seul endroit.
- L'utilisation de variables augmente votre capacité à travailler efficacement et minimise les risques d'erreur.

### **Création d'un environnement**

Créez un nouvel environnement à partir de la barre latérale droite.
<img src="/guides/env-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/guides/env-light.png" class="light-img" height="1280" width="640" alt=""/>

Choisissez l'environnement souhaité dans le menu déroulant de la barre latérale dans la section des environnements.

### **Ajout de variables d'environnement**

Cliquez sur un environnement pour ajouter/modifier/supprimer des variables.

<img src="/guides/envcreate-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/guides/envcreate-light.png" class="light-img" height="1280" width="640" alt=""/>

### **Accéder aux données de l'environnement.**

Sélectionnez l'environnement dont vous souhaitez accéder aux variables.
Il est souhaitable d'écrire les variables d'environnement lors d'une requête. Cela se fait en accédant à l'objet `<<variable_name>>` dans la section requête.

```javascript
<<baseURL>><<path>>
```

<video loop playsinline controls>
  <source src="/guides/environment.webm" type="video/webm" />
  <source src="/guides/environment.mp4"  type="video/mp4"  />
</video>

Utilisez les variables d'environnement entourées de doubles crochets angulaires (`<<>>`) n'importe où dans la section de la requête.

**Exemple : Variables d'environnement avec des scripts de pré-requête**

<img src="/guides/addingToEnv-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/guides/addingToEnv-light.png" class="light-img" height="1280" width="640" alt=""/>

<alert>
  Les variables d'un environnement portant le nom `Globals` seront ajoutées de manière globale (c'est-à-dire à tous les autres environnements.)
</alert>

## Utilisation des jetons d'authentification

Dans cette section, nous allons voir comment passer les informations d'autorisation et d'authentification dans nos requêtes, en accédant à **l'API de GitHub**.

- Faites une requête GET vers l'url `https://api.github.com/user`.
- Vous obtiendrez une erreur comme celle-ci

  ```javascript
  {
    "message": "Bad credentials",
    "documentation_url": "https://docs.github.com/rest"
  }
  ```

#### Générer un jeton d'accès

Pour avoir accès à l'API de Github, vous devez d'abord générer un jeton d'accès personnel. Pour notre démonstration, nous allons en générer un qui donne accès aux dépôts publics :

- Accédez à vos [paramètres de compte Github](https://github.com/settings/profile) en cliquant sur l'icône de votre profil, puis sur Paramètres (en bas).
- Faites défiler la page et cliquez sur Paramètres du développeur dans le menu de gauche.

  <img src="/guides/github-developer-settings.png"/>

- Dans la page des paramètres du développeur, cliquez sur [Personal access tokens](https://github.com/settings/tokens)

  <img src="/guides/github-personal-access-tokens.png"/>

- Cliquez sur générer un nouveau jeton et vérifiez UNIQUEMENT la portée public_repo sous repo.

  <img src="/guides/github-scopes-public.png" />

- Copiez la chaîne opaque générée

#### Stocker le jeton d'authentification dans une variable

<alert type = "success">
C'est une pratique sûre recommandée d'avoir vos détails d'Auth dans des variables d'Enivronment plutôt que de les saisir directement dans l'onglet Autorisation
</alert>

- Ajoutez la chaîne copiée à une nouvelle variable nommée 'token' dans un environnement existant ou nouveau.
  <img src="/guides/addingToEnv-dark.png" class="dark-img" height="300" width="400" alt=""/>
  <img src="/guides/addingToEnv-light.png" class="light-img" height="300" width="400" alt=""/>

- Ouvrez maintenant l'onglet Autorisation et sélectionnez Bearer Token dans la liste déroulante.

- appelez la variable token.

- cliquez sur envoyer.

<img src="/guides/usingVar-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/guides/usingVar-light.png" class="light-img" height="1280" width="640" alt=""/>

Hoppscotch ajoutera automatiquement le contenu dans l'en-tête d'autorisation

**Résultat**

Vous devriez être en mesure de voir le nombre de dépôts publics que vous avez créés dans GitHub.

```javascript

{
  "login": "HoppscotchUser",
  "url": "https://api.github.com/users/HoppscotchUser",
  ...
  "public_repos": 22,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2016-09-05T14:18:09Z",
  "updated_at": "2021-08-03T14:55:54Z"
}

```

[Modes d'autorisation de paiement](/features/authorization)

## Téléchargement de données via une requête API

Les API sont également utilisées pour télécharger du contenu codé vers un serveur. Cela se fait généralement avec les méthodes `PUT` ou `POST`.

Les types de contenu les plus courants sont :

- `application/json` : Pour le contenu au format JSON.
- `multipart/form-data` : Pour le téléchargement de fichiers codés.

[Liste complète des types de contenu pris en charge](/features/body#content-types)

Voyons comment télécharger un fichier image dans une `API` en utilisant hoppscotch.

### Télécharger des fichiers via une API

Les données que vous envoyez dans une requête `POST` doivent être des types de contenu suivants :

- `application/x-www-form-encoded`
- `multipart/form-data`.

#### Étapes :

1. sélectionnez la méthode http `POST` et définissez votre URL de point de terminaison API
2. Ajoutez les en-têtes nécessaires
3. Pour ajouter votre fichier image, cliquez sur l'onglet **corps** et sélectionnez `mulitpart/form-data` dans le menu déroulant content-type.
4. Donnez un nom à votre fichier et cliquez sur l'icône 📎 pour sélectionner votre fichier.

  <img src="/guides/upload-dark.png" class="dark-img" alt=""/>
  <img src="/guides/upload-light.png" class="light-img"  alt=""/>

5.  Cliquez sur ENVOYER pour télécharger votre fichier via l'API.
