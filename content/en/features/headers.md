---
title: Request Headers
description: Sample
menuTitle: Headers
position: 14
category: Features
---
##  `Http` Request Header

This can be used in an HTTP request to provide context to a request being made , so that the server can tailor the response.
E.g `Accept-*`vheaders indicate the allowed and preferred formats of the response.
Other Headers can be used to  supply Authentication credentials , to control caching , or to get infrmation about the user agent etc..,

## Modifying Request Header
Got to the `Headers` Tab under the URL field and add your Headers to the Header List 

<img src="/Features/Header-dark.png" class="dark-img" height="1280" width="640" alt="IMAGES"/>
<img src="/Features/Header-light.png" class="light-img" height="1280" width="640" alt="IMAGES"/>




## Commnly Used Headers

| Common Headers |  Function    |
|----------------|--------------|
| WWW-Authenticate | The server may send this as an initial response if it needs some form of authentication before responding with the actual resource being requested. |
| Authorization [^1] | Contains the authentication credentials for HTTP authentication. |
| Proxy-Authorization | HTTP `Proxy-Authorization` request header contains the credentials to authenticate a user agent to a proxy server |
| Age | Age directive states the maximum amount of time in seconds that fetched responses are allowed to be used again (from the time when a request is made) |
| Cache-Control | The cache policy defined by the server for this response, a cached response can be stored by the client and re-used till the time defined by the Cache-Control header |




[^1]: Hoppscotch automatically manages this header , when you add Auth Credentials to the `Authorization` tab . But in-case the server takes custom type,you can manually your Credentials in this Header.

