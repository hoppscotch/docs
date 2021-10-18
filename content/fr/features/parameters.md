---
title: Paramètres de requête
description: Exemple
menuTitle: Paramètres
position: 13
category: Fonctionnalités
---

## Paramètres de la requête `Http`

**Dans le champ URL:**

- Pour ajouter des paramètres de requête, ajoutez `?` à la fin de l'URL de la requête
- Ajoutez le paramètre `id=1`, si vous ajoutez plusieurs paramètres, séparez-les avec `&`.

Comme ceci:

<code-group>
<code-block label= "URL parameters" active >

```bash
https://rickandmortyapi.com/api/character/?name=morty&status=alive
```

</code-block>
</code-group>

**Utilisation de l'onglet Paramètres:**

Ajoutez les paires clé-valeur:

- `name` `morty`

* `status` `alive`

Ceci sera automatiquement ajouté à votre chemin d'accès à l'API.

<img src="/guides/param-light.png" class="light-img" height="1280" width="640" alt=""/>

<img src="/guides/param-dark.png" class="dark-img" height="1280" width="640" alt=""/>

[Apprenez à modifier les paramètres](/quickstart/rest#using-parameters)
