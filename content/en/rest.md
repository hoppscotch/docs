---
title: RestAPI platform
description: "Rest Editor "
position: 2

category: Getting started
---

<alert type="success">

This documentation is a work in progress!

</alert>

<video loop playsinline controls>
  <source src="/api/APIvid.webm" type="video/webm" />
  <source src="/api/APIvid.mp4" type="video/mp4" />
</video>
You can make API requests and examine responses using Hoppscotch.
An API request allows you to retrieve or send data to and from an API endpoint.

The common http methods used in API requests are:

- `GET` : Retrieve information about the REST API resource
- `POST` : Create a REST API resource
- `PUT` : Update a REST API resource
- `DELETE` : Delete a REST API resource or related component

Other methods like `HEAD`,`CONNECT`, `OPTIONS`,`TRACE`,`PATCH`and other `CUSTOM`methods can also be used.
Let's go over the features offered by Hoppscotch API platform:

## How to Use

---

### Choosing Method:

<img src="/api/method-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/api/method-light.png" class="light-img" height="1280" width="640" alt=""/>

### Collections

#### Adding requests to collections

Click on the save button, next to `SEND`, name your request and add to existing or new collections

<img src="/api/nameRequest-light.png" class="light-img" height="1280" width="640" alt=""/>
<img src="/api/nameRequest-dark.png" class="dark-img" height="1280" width="640" alt=""/>

You can add your requests to collections folders or subfolders.

### Adding dynamic behavior to requests:

<img src="/api/dynamic-light.png" class="light-img" height="1280" width="640" alt=""/>
<img src="/api/dynamic-dark.png" class="dark-img" height="1280" width="640" alt=""/>

The editor allows you to add dynamic behaviour to requests and collections.This lets you add `parameters`, `Headers`, `Authentication`, build `pre-request scripts` and write `tests`.

_See Also :_

- [Writing pre-request Scripts](/quickstart/scripts)

- [Writing Tests](/quickstart/tests)

### Response body :

<img src="/api/response-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/api/response-light.png" class="light-img" height="1280" width="640" alt=""/>

The response from the `API endpoint` can be viewed here. You can download or copy the response for further use.

## Environments

Environment variables allow you to store and reuse values in your requests and scripts

<img src="/api/editEnv-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/api/editEnv-light.png" class="light-img" height="1280" width="640" alt=""/>

**see also :** [How to use environment variables](/quickstart/rest#environment-variables)

## Keyboard shortcuts

**Optimized for efficiency.**

<p>

| Shortcut                       | Action                 |
| ------------------------------ | ---------------------- |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | Send/Cancel Request    |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Save to Collections    |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Copy Request Link      |
| <kbd>Ctrl</kbd> + <kbd>I</kbd> | Reset Request          |
| <kbd>Alt</kbd> + <kbd>🠋</kbd>  | Select Next method     |
| <kbd>Alt</kbd> + <kbd>🠉</kbd>  | Select Previous method |
| <kbd>Alt</kbd> + <kbd>G</kbd>  | Select `GET` method    |
| <kbd>Alt</kbd> + <kbd>H</kbd>  | Select `HEAD` method   |
| <kbd>Alt</kbd> + <kbd>P</kbd>  | Select `POST` method   |
| <kbd>Alt</kbd> + <kbd>U</kbd>  | Select `PUT` method    |
| <kbd>Alt</kbd> + <kbd>X</kbd>  | Select `DELETE` method |

</p>

## TroubleShooting

There are many possible reasons for your API requests not behaving as expected.

### Connectivity

If Hoppscotch fails to send your request, you may be experiencing connectivity issues. Check your connection by attempting to open a page in your web browser.

### Firewalls

Some firewalls may be configured to block non-browser connections. If this happens you will need to contact your network admins for hoppsocth to work.

### Incorrect protocol

Check if you're using https:// instead of http:// in your URL (or vice versa).

### Hoppscotch errors

It is possible that Hoppscotch might be making invalid requests to your API server. You can confirm this by checking your server logs (if available). If you believe this is happening, get in touch with the [Hoppscotch team](/community).

### CORS restrictions

#### What is CORS?

`CORS` or Cross-Origin Resource Sharing is a security mechanism built into modern web-browers.
It may cause the following error when testing local `API endpoints` or some other API endpoints with Hoppscotch.

<img src="/api/CORS error example.png"   alt=""/>

This is Due to the API not sending the proper API headers( `Access-Control-Allow`). This issue can be solved in two ways.

1.  Ask whoever manages the API to add CORS support.
2.  Use Middleware like ProxyScotch or the [Hoppscotch Web Extension.](https://chrome.google.com/webstore/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld?hl=en) and enable it in the **Interceptor** section of settings

▶️**[Know more about Interceptor](/features/interceptor)**
