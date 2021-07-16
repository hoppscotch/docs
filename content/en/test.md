---
title: TestPage
description: "page for testing stuff"
position: 2
category: Test
---

Learn how to use @nuxt/content.

<!--more-->

Full amount of content beyond the more divider.

# Lorem ipsum

## dolor—sit—amet

### consectetur &amp; adipisicing

#### elit

##### elit



Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.



```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

Please choose a *framework*:

<example-multiselect :options="['Vue', 'React', 'Angular', 'Svelte']"></example-multiselect>

