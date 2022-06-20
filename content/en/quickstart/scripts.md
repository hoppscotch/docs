---
title: Writing  Pre-request Scripts
menuTitle: Pre-request Scripts
description: "Hoppscotch Guide to write pre-request scripts and tests for REST API"
position: 6
category: quickstart
---

## Scripts

<img src="/scripting/Script -order-dark.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/scripting/Script -order-light.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>

Hoppscotch lets you to add **dynamic behaviour** to REST requests . This allows you to write test suites and build requests that can contain dynamic parameters.
You can add `javaScript` code that executes at 2 events in the flow :

- Before a request is sent to the server, a <a href ="#pre-request-script">Pre-request script </a>can be added

- After a response is received, a <a href ="../content/en/features/tests.md">test script </a> can be run.

<alert type="success">You can add pre-request and test scripts to saved in collections OR a request not saved to a collection. </alert>

Hoppscotch will then execute the scripts along with the requests in the specified order.

## Pre request Script

Pre-request scripts is a piece of code that will run before the execution of request.

We can use the pre-request script for a pre-processing task such as:

- Setting parameters, headers
- Adding body data
- Adding variable values
- Including timestamps in request headers
- Etc...

### Writing Pre-request Scripts

A special `pw` API object contains various methods for creating Scripts and tests and is made available globally. It can be referenced by name to access methods such as `pw.env.set()`.

_see also:_

```javascript
pw.env.set("foo", "bar");
```

Let Us explore some of the use cases :

## Examples

### Setting environment variables

`pw.env.set()` can be used directly for quick and convenient environment variables definition. Or, if preferred, `pw.env.set()` can be used to better organize request code.

```javascript
pw.env.set("baseURL", "https://httpbin.org");
pw.env.set("method", "get");
```

to access these newly set variables use:

```bash
<<variable_name>>
```

<img src="/scripting/envscript-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/scripting/envscript-light.png" class="light-img" height="1280" width="640" alt=""/>

### Generating random Values to test API

Lets us take a case where we need to test an randomly test user data available at an endpoint.

Let us use the following GET API endpoint `https://reqres.in/api/users/`.

Add `<<randomValue>>` to the endpoint URL.

Now in the pre -request script tab add the following logic.

<code-group>

<code-block label = "Pre-request" active>

```javascript
var random = Math.floor(Math.random() * 10);
pw.env.set("randomValue", random);
```

</code-block>

<code-block label="API url">

```bash
 https://reqres.in/api/users/<<randomValue>>
```

</code-block>

</code-group>
