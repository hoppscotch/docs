---
title: Débogage automatisé avec des tests
description: Exemple
menuTitle: Tests
position: 3
category: Fonctionnalités
---

You can compose test scripts for your Hoppscotch API demands in JavaScript. Tests permit you to guarantee that your API is functioning as expected , and intergrations between services are reliable, and to confirm that new advancements haven't broken any current functionality.

Vous pouvez composer des scripts de test pour vos requêtes d'API Hoppscotch en JavaScript. Les tests vous permettent de garantir que votre API fonctionne comme prévu, que les intégrations entre les services sont fiables, et de confirmer que les nouvelles avancées n'ont pas cassé les fonctionnalités actuelles.

**Pour en savoir plus sur les méthodes énumérées ci-dessous, consultez** <nuxt-link to="/quickstart/tests">Tests Hoppscotch (Guide de démarrage rapide)</nuxt-link>

## L'API `pw`

- <nuxt-link to="/quickstart/tests#pwexpectvalue"> `.expect(value)`</nuxt-link>
- <nuxt-link to="/quickstart/tests#not">`.not`</nuxt-link>
- <nuxt-link to="/quickstart/tests#toBevalue">`.toBe(value)`</nuxt-link>
- <nuxt-link to="/quickstart/tests#toBeLevel2xxvalue">`.toBeLevel2xx(value)`</nuxt-link>
- <nuxt-link to="/quickstart/tests#toBeLevel3xxvalue">`.toBeLevel3xx(value)`</nuxt-link>
- <nuxt-link to="/quickstart/tests#toBeLevel4xxvalue">`.toBeLevel4xx(value)`</nuxt-link>
- <nuxt-link to="/quickstart/tests#toBeLevel5xxvalue">`.toBeLevel5xx(value)`</nuxt-link>
- <nuxt-link to="/quickstart/tests#toBeTypetype">`.toBeType(type)`</nuxt-link>
- <nuxt-link to="/quickstart/tests#toHaveLengthnumber">`.toHaveLength(number)`</nuxt-link>
- <nuxt-link to="/quickstart/tests#testnamefn">`.test(name, fn)`</nuxt-link>
- <nuxt-link to="/quickstart/tests#repsonse">`.repsonse.`</nuxt-link>

## Comment exécuter les tests

1. Ecrivez vos scripts de test dans la section `Tests`.
   <alert type = "info">
   Utilisez les _Snippets_ à droite de l'éditeur de code pour des TestScripts pré-écrits ou écrivez vos propres Scripts avec du JavaScript ordinaire
   </alert>

   <img src="/features/TestScript-dark.png" class="dark-img" height="1280" width="640" alt=""/>
    <img src="/features/TestScript-light.png" class="light-img" height="1280" width="640" alt=""/>

2. Utilisez les méthodes intégrées fournies par `l'API pw` pour interagir avec votre point de terminaison et pour affirmer les résultats.

3. Cliquez sur `SENVOYER` , les scripts de test seront exécutés sur la réponse reçue de votre API.

4. Visualisez le statut des tests dans l'onglet **Résultat du test** dans la section de la réponse.

   <img src="/features/TestRes-dark.png" class="dark-img" height="1280" width="640" alt=""/>
   <img src="/features/TestRes-light.png" class="light-img" height="1280" width="640" alt=""/>

## Alors, quels aspects de l'API devons-nous tester ?

Chaque test est composé d'actions de test. Il s'agit des actions individuelles qu'un test doit effectuer par flux de test API. Pour chaque requête API, un test idéal devrait prendre les actions suivante:

1.<nuxt-link to = "/quickstart/tests#testing-http-status-code">**Vérifier le code d'état HTTP correct.**</nuxt-link>
Par exemple, la création d'une ressource doit renvoyer 201 CREATED et les requêtes non autorisées doivent renvoyer 403 FORBIDDEN, etc.

2.<nuxt-link to = "/quickstart/tests">**Vérifier la charge utile de la réponse.**</nuxt-link>
Vérifiez le corps JSON valide et les noms, types et valeurs de champ corrects - y compris dans les réponses d'erreur.

3.<nuxt-link to = "/quickstart/tests">**Vérifier les en-têtes de réponse.**</nuxt-link>
Les en-têtes du serveur HTTP ont des implications à la fois sur la sécurité et les performances.

4.<nuxt-link to = "/quickstart/tests">**Vérifier l'état correct de l'application.**</nuxt-link>
Ceci est facultatif et s'applique principalement aux tests manuels, ou lorsqu'une interface utilisateur ou une autre interface peut être facilement inspectée.

5.<nuxt-link to = "/quickstart/tests">**Vérifier l'intégrité des performances de base.**</nuxt-link>
Si une opération a été effectuée avec succès mais a pris un temps déraisonnable, le test échoue.
