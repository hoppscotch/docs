---
title: Request Parameters
description: Sample
menuTitle: Parameters
position: 13
category: Features
---

## `Http` Query parameters

**In the URL field:**

- To add Query parameters, append `?` to the end of the request URL
- add parameter `id=1`, if adding multiple parameters separate them with `&`

Like so:

<code-group>
<code-block label= "URL parameters" active >

```bash
https://rickandmortyapi.com/api/character/?name=morty&status=alive
```

</code-block>
</code-group>

**Using Parameters tab:**

Add the key value pairs:

- `name` `morty`

* `status` `alive`

This will be automatically appended to your API path .

<img src="/guides/param-light.png" class="light-img" height="1280" width="640" alt=""/>

<img src="/guides/param-dark.png" class="dark-img" height="1280" width="640" alt=""/>

[Learn how to modify parameters](/quickstart/rest#using-parameters)
