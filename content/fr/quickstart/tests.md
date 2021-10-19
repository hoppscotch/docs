---
title: Tests
menuTitle: Tests de post requêtes
description: "Guide Hoppscotch pour écrire des scripts de pré-requête et des tests pour l'API REST"
position: 7
category: Démarrage rapide
---

Vous pouvez écrire des scripts de test pour vos demandes d'API dans `javaScript`.

_Lorsque vous introduisez un nouveau code, les tests garantissent que votre API fonctionne comme prévu. Plus la couverture de vos tests est élevée, plus votre code sera flexible et résistant aux bogues, et moins vous passerez de temps à vous demander pourquoi..._[_la suppression de l'image d'une noix de coco casse votre code._](https://www.thegamer.com/this-coconut-jpg-in-team-fortress-2s-game-files-if-deleted-breaks-the-game-and-no-one-knows-why/)

# Tests d'écriture

Dans la dernière section ([scripting de pré-requête](/quickstart/scripts)) nous avons travaillé sur la modification dynamique des requêtes. Dans cette section, nous allons travailler avec la réponse reçue.

## API `pw` 

Hoppscotch possède une puissante API appelée `pw` qui gère les pré-requêtes et les tests.

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
- <nuxt-link to="/quickstart/tests#response">`.response.`</nuxt-link>

Voyons comment utiliser `pw.expect()` et `pw.test()` pour écrire nos tests.

### pw.expect(`value`)

`expect` renvoie un objet de type "expectation", sur lequel vous pouvez appeler des fonctions de correspondance. L'exemple ci-dessous appelle la fonction matcher `toBe` sur l'objet expectation qui est retourné par l'appel de `pw.expect` avec l'id de la réponse (`pw.response.body.id`) comme argument.

Utilisez directement `pw.expect` pour des tests rapides et pratiques. Chaque instruction `pw.expect` générera une ligne sur le rapport de test.

```javascript
// Ce test passera
pw.expect(1).toBe(1);

// Ce test échouera
pw.expect(2).not.toBe(2);
```

### .test(`name`,`fn`)

Créez un groupe de tests, avec le `name` comme chaîne de caractères et `fn` comme fonction de rappel pour écrire les tests associés au groupe. Les résultats des tests incluront le `name` donné pour une meilleure organisation.

Enveloppez les déclarations `expect` avec `pw.test` pour regrouper et décrire les déclarations liées.

```javascript
// Cela renverra 4 lignes sur le rapport de test, regroupées sous "Opérations arithmétiques".
pw.test("Arithmetic operations", () => {
  const size = 500 + 500;
  pw.expect(size).toBe(1000);
  pw.expect(size - 500).toBe(500);
  pw.expect(size * 4).toBe(4000);
  pw.expect(size / 4).toBe(250);
});
```

Si aucune déclaration `pw.expect` ou `pw.test` n'est présente, aucun rapport de test ne sera généré.

```javascript
// Cela ne générera aucun rapport de test
(99 + 1).toBe(100);
```

Cependant, vous ne pouvez pas imbriquer `.test` dans une fonction de rappel `.test`.

```javascript
pw.test("a group of tests", () => {
  pw.expect(10).toBe(10);
  // plus de tests ici
});
```

### .toBe(`value`)

Tester l'égalité exacte en utilisant `toBe`.

```javascript
pw.expect(pw.response.body.category).toBe("Sneakers");
```

`toBe` utilise une égalité stricte et est recommandé pour les types de données primitifs.

```javascript
// Ces tests échoueront
pw.expect("hello").toBe("Hello");
pw.expect(5).toBe("5");
pw.expect([]).toBe([]);
```

### `.not`

Testez l'inverse en ajoutant `.not` avant d'appeler la fonction matcher.

```javascript
// Ces tests seront réussis
pw.expect(true).not.toBe(false);
pw.expect(200).not.toBeLevel3xx();
```

### .toBeLevelxxx()

Il existe quatre fonctions de correspondance différentes permettant de tester rapidement et facilement le code d'état http renvoyé :

- `toBeLevel2xx()`
- `toBeLevel3xx()`
- `toBeLevel4xx()`
- `toBeLevel5xx()`

Par exemple, un argument passé à `expect` doit être compris entre `200` et `299` inclus pour passer `toBeLevel2xx()`.

```javascript
// Ces tests seront réussis
pw.expect(204).toBeLevel2xx();
pw.expect(308).toBeLevel3xx();
pw.expect(404).toBeLevel4xx();
pw.expect(503).toBeLevel5xx();
```

Si l'argument passé à `expect` est une valeur non-numérique, il est d'abord analysé avec `parseInt()`.

```javascript
// Ce test passera
pw.expect("404").toBeLevel4xx();
```

### .toBeType(`type`)

Utilisez `.toBeType(type)` pour la vérification du type. L'argument de cette méthode doit être `"string"`, `"boolean"`, `"number"`, `"object"`, `"undefined"`, `"bigint"`, `"symbol"` ou `"function"`.

```javascript
// Ces tests seront réussis
pw.expect(5).toBeType("number");
pw.expect("Hello, world!").toBeType("string");

pw.expect(5).not.toBeType("string");
pw.expect("Hello, world!").not.toBeType("number");
```

### .toHaveLength(`number`)

Utilisez `.toHaveLength(number)` pour vérifier qu'un objet possède une propriété `.length` et qu'elle est définie sur une certaine valeur numérique.

```javascript
// Ces attentes passeront
pw.expect("hoppscotch").toHaveLength(10);
pw.expect("hoppscotch").not.toHaveLength(9);

pw.expect(["apple", "banana", "coconut"]).toHaveLength(3);
pw.expect(["apple", "banana", "coconut"]).not.toHaveLength(4);
```

### `.response`

Assurer les données de réponse en accédant à l'objet `pw.response`.

```javascript
// Ce test passera
pw.test("Response is ok", () => {
  pw.expect(pw.response.status).toBe(200);
  pw.expect(pw.response.body).not.toHaveProperty("errors");
});
```

#### Valeurs de réponse actuellement prises en charge

- `status` : -number- Le code d'état sous forme de nombre entier.
- `headers` : -object- Les en-têtes de la réponse.
- `body` : -object- Les données de la réponse. Dans de nombreuses requêtes, il s'agit du JSON envoyé par le serveur.

## Exemples

Voyons maintenant des exemples de tests API de base.

### Tester le code d'état `HTTP`.

Écrivons un test pour vérifier que la réponse à notre requête a un code d'état de `200` et qu'il n'y a pas d'erreurs dans le corps de la réponse.
Nous allons utiliser l'URL `https://www.httpbin.org/status/200` et la méthode `GET`.
Dans ce cas, nous devrons écrire deux instructions `expect`, une pour vérifier le statut et une autre pour vérifier le corps de la réponse.
Cependant, nous pouvons envelopper les instructions `expect` avec `pw.test` pour regrouper et décrire les instructions liées.

Il y a deux façons de tester le code d'état

- vérifier si c'est exactement `200` : `pw.expect(pw.response.status)toBe(200)`
- utiliser les fonctions matcher pour un test rapide et pratique du code d'état http, dans ce cas `toBeLevel2xx()` : `pw.expect(pw.response.status)toBeLevel2xx()`

<code-group>

<code-block label = "Test Script" active>

```javascript
pw.test("Response is ok", () => {
  pw.expect(pw.response.status).toBe(200);
  pw.expect(pw.response.body).not.toHaveProperty("errors");
});
```

</code-block>

<code-block label="Alternate">

```javascript
pw.test("Response is ok", () => {
  pw.expect(pw.response.status).toBeLevel2xx();
  pw.expect(pw.response.body).not.toHaveProperty("errors");
});
```

</code-block>

</code-group>

Ces tests passeront sans problème une fois que vous aurez envoyé la demande.

<img src="/tests/response-dark.png" class="dark-img"  alt=""/>

<img src="/tests/response-light.png" class="light-img"  alt=""/>

### Assurer le chargement de la réponse

Analysez les données en JSON et vérifiez les propriétés du corps de la réponse.
Dans cet exemple, nous testons si un identifiant d'utilisateur correspond à un utilisateur particulier.
Utilisons le point de terminaison API GET suivant `https://reqres.in/api/users/10`.
Nous utiliserons `.toBe` pour vérifier des valeurs spécifiques et `.toBeType` pour vérifier un type de données spécifique, comme le montre l'extrait de code ci-dessous.

<code-block label = "Test Script" active>

```javascript
pw.test("", () => {
  const user = pw.response.body.json();
  pw.expect(user.first_name).toBe("Byron");
  pw.expect(user.first_name).toBeType("string");
});
```

</code-block>


### Vérifier les en-têtes de réponse

