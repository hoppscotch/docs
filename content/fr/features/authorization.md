---
title: Request Autorisation
description: Exemple
menuTitle: Autorisation
position: 15
category: Fonctionnalités
---

Les API REST utilisent l'authorizatiom pour garantir qu'un client a un accès sécurisé uniquement aux ressources autorisées par ses rôles.
Si vous développez ou intégrez une API tierce, vous avez le choix entre **Authentification de base**, **Bearer Tokens** et **OAuth2.0**.

Les détails d'authentification peuvent être ajoutés à l'en-tête, au corps du message ou comme paramètres d'une requête. Cependant, si vous entrez vos détails d'authentification dans l'onglet **Autorisation**, Hoppscotch modifiera automatiquement les parties pertinentes de la requête en fonction du type `d'authentification` choisi.
Stocker les _Crédentiels d'authentification_ ou les _Bearer Tokens_ comme variables d'environnement, vous permet de les réutiliser de manière plus sûre et plus efficace.

## Modèles d'authentification supportés

### Authentification de base

Si l'API prend en charge l'authentification de base, vous devrez ajouter un nom d'utilisateur et un mot de passe vérifiés à votre requête.
Dans l'onglet **Autorisation**, sélectionnez Basic Auth et ajoutez vos informations d'identification.

### Bearer Tokens

Les Bearer Tokens permettent l'authentification des requête à l'aide d'une clé d'accès, telle qu'une chaîne opaque ou JWT[^1].
Dans l'onglet **Autorisation**, sélectionnez Bearer token et ajoutez votre jeton ou, pour plus de sécurité, stockez-le dans une variable et faites-y référence par son nom.

Hoppscotch ajoutera la valeur de la clé API au texte 'Bearer' et l'ajoutera à l'en-tête d'autorisation de la requête.

```bash
Bearer <Votre clé API>
```

### OAuth 2.0

Dans ce modèle d'authentification, vous récupérez d'abord un jeton d'accès à l'API, puis vous utilisez ce jeton pour authentifier les futures requêtes.

**Un exemple de flux OAuth 2.0 pourrait se dérouler comme suit :**

<img src="/features/OAuth2.0.png"  height="1280" width="640" alt=""/>

#### Étapes:

1. Dans l'onglet Autorisation d'une requête, sélectionnez **OAuth 2.0** dans la liste déroulante _Type d'autorisation_.

   <img src="/features/Oauth-dark.png" class="dark-img" height="1280" width="640" alt=""/>
   <img src="/features/Oauth-light.png" class="light-img" height="1280" width="640" alt=""/>

2. Remplissez les champs de la section ci-dessous et cliquez sur **Générer un jeton** pour générer un nouveau _jeton d'accès_.

3. Vous pouvez enregistrer le jeton pour le réutiliser ultérieurement.

**Voir aussi:** [Autorisation d'un API](/quickstart/rest#using-auth-tokens)

[^1]: JSON Web Token : JSON Web Token (JWT) est un moyen compact et autonome de transmettre en toute sécurité des informations entre parties sous forme d'objet JSON. Ces informations sont signées numériquement. Les JWT peuvent être signés à l'aide d'un secret ou d'une paire de clés publiques/privées.
