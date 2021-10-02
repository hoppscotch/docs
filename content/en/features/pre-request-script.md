---
title: Pre-Request Scripts
description: Sample
menuTitle: Pre-Request Script
position: 9
category: Features
---


<img src="/Features/preSnippet-dark.png" class="dark-img" alt=""/>
<img src="/Features/preSnippet-light.png" class="light-img"  alt=""/>

## Hoppscotch  JavaScript Reference

Hoppscotch provides JavaScript APIs that can be used in building tests. \
You can enter your JavaScript manually or use the Snippets you'll see to the right of the code editor.


#
## The `pw` object

`pw.*` provides access to request and response data and variables in the your Hoppscotch instance.


### `env`

Access variables available in the current environment

#### Set an Environment Variable

```javascript

pw.env.set("variable", "value");

```

#### Save current TimeStamp to a variable

```javascript
// Set timestamp variable
const cuttentTime = Date.now();
pw.env.set("timestamp", cuttentTime.toString());

```

#### Random Variable

```javascript
// Set random number variable
const min = 1
const max = 1000
const randomArbitrary = Math.random() * (max - min) + min
pw.env.set("randomNumber", randomArbitrary.toString());
```

## Next Steps

For more details on how to use pre-request scripts, checkout <nuxt-link to= "/quickstart/scripts">Pre-Request Scripts (Guide)</nuxt-link>, <nuxt-link to= "/features/tests">Writing Tests</nuxt-link> 
