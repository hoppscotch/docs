---
title: Contribuer à Hoppscotch
menuTitle: Contribuer
description: "Contribuer à Hoppscotch"
position: 3
category: Communauté
features:
  - "Rapporter un bug"
  - "Discuter de l'état actuel du code"
  - "Soumettre un correctif"
  - "Proposer de nouvelles fonctionnalités"
---

Nous aimons votre contribution ! Nous voulons rendre la contribution à ce projet aussi facile et transparente que possible, qu'il s'agisse.. :

<list :items="features"></list>

## Nous développons avec Github

Nous utilisons github pour héberger le code, pour suivre les problèmes et les demandes de fonctionnalités, ainsi que pour accepter les pull requests.

#### Nous utilisons [Github Flow](https://guides.github.com/introduction/flow/index.html), Donc tous les changements de code se font par le biais des Pull Requests.

Un pull request est le meilleur moyen de proposer des changements au codebase (nous utilisons [Github Flow](https://guides.github.com/introduction/flow/index.html)). Nous accueillons avec plaisir vos pull requests:

1. Embranchez le répertoire (aussi appelé un Fork) et créer votre branche à partir de `main`.
2. Si vous avez ajouté du code qui doit être testé, ajoutez des tests.
3. Si vous avez changé d'API, mettez à jour la documentation.
4. Assurez-vous que la suite de tests passe.
5. Assurez-vous que votre code est correct.
6. Créez un pull request avec vos changements!

## **Développer**

Mettez à jour le fichier [`.env.example`](https://github.com/hoppscotch/hoppscotch/blob/main/.env.example) trouvé dans le répertoire racine avec vos propres clés et renommez-le en `.env`.

_Les exemples de clés ne fonctionnent qu'avec le [build de production](https://hoppscotch.io)._

### Environnement de développement basé sur un navigateur

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hoppscotch/hoppscotch)

### Environnement de développement local

1. [Clonez ce répertoire](https://github.com/hoppscotch/hoppscotch.git) avec git.
2. Installez les dépendances en exécutant `npm install` dans le répertoire que vous avez cloné (probablement `hoppscotch`).
3. Démarrez le serveur de développement avec `npm run dev`.
4. Ouvrez le site de développement en allant sur [`http://localhost:3000`](http://localhost:3000) dans votre navigateur.

### Docker compose

1. [Clonez ce répertoire](https://github.com/hoppscotch/hoppscotch.git) avec git.
2. Exécutez `docker-compose up`
3. Ouvrez le site de développement en allant sur [`http://localhost:3000`](http://localhost:3000) dans votre navigateur.

## **Docker**

**Conteneur officiel** &nbsp; [![hoppscotch/hoppscotch](https://img.shields.io/docker/pulls/hoppscotch/hoppscotch?style=social)](https://hub.docker.com/r/hoppscotch/hoppscotch)

```bash
docker run --rm --name hoppscotch -p 3000:3000 hoppscotch/hoppscotch:latest
```

## **Publication**

1. [Clonez ce dépôt](https://github.com/hoppscotch/hoppscotch.git) avec git.
2. Installez les dépendances en exécutant `npm install` dans le répertoire que vous avez cloné (probablement `hoppscotch`).
3. Build les fichiers de sortie avec `npm run generate`.
4. Trouvez le build dans `./dist`.

#### Toutes les contributions que vous ferez seront sous la licence logicielle MIT.

En bref, lorsque vous soumettez des modifications de code, il est entendu que ces modifications sont soumises à la même [licence MIT](http://choosealicense.com/licenses/mit/) qui couvre le projet. N'hésitez pas à contacter les mainteneurs si cela vous préoccupe.

#### Signaler les bugs à l'aide de l'outil Github [issues](https://github.com/hoppscotch/hoppscotch/issues)

Nous utilisons les issues de GitHub pour suivre les bugs publics. Signalez un bug en [ouvrant un nouveau issue](https://github.com/hoppscotch/hoppscotch/issues); c'est aussi simple que ça !

#### Rédiger des rapports de bug avec des détails, du contexte et des exemples de code.

[Voici un exemple](http://stackoverflow.com/q/12088905/180626) d'un rapport de bug que j'ai écrit, et je pense que ce n'est pas un mauvais modèle. Voici un [autre exemple](http://www.openradar.me/11905408).

**Les bons rapports de bug** ont tendance à avoir:

- Un résumé rapide et/ou le contexte
- Étapes à reproduire
  - Soyez précis !
  - Donnez un exemple de code si vous le pouvez.
- Ce que vous pensiez qu'il allait se passer
- Ce qui se passe réellement
- Notes (incluant éventuellement la raison pour laquelle vous pensez que cela peut se produire, ou des choses que vous avez essayées et qui n'ont pas fonctionné)

Les gens _adorent_ les rapports de bug détaillés. Je ne plaisante même pas.

#### Utilisez un style de codage cohérent

Je les emprunte à nouveau aux [Directives de Facebook](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)

- 2 espaces pour l'indentation plutôt que des tabulations
- Vous pouvez essayer d'utiliser les extensions de code Eslint dans vs code ou quelque chose de similaire.

## Licence

En contribuant, vous acceptez que vos contributions soient sous licence MIT.
