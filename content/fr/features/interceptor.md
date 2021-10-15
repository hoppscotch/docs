---
title: Interceptor and add-ons
description: Sample
menuTitle: Interceptor
position: 6
category: Features
---

**Access APIs blocked by CORS restriction by using either proxyscotch/custom middleware or Hoppscotch web extension.**

## Using Proxy

Enable proxy in settings.

<img src="/api/Interceptor-light.png" class="light-img" height="1280" width="640" alt=""/>

<img src="/api/Interceptor-dark.png" class="dark-img" height="1280" width="640" alt=""/>

You can replace this with your own proxy middleware if you wish.

#### How ProxyScotch works

<img src="/api/ProxyScotch-light.png" class="light-img"  alt=""/>

<img src="/api/ProxyScotch-dark.png" class="dark-img"  alt=""/>

#### Using custom Middle ware

Since `CORS` is as simple as adding some HTTP headers, and it’s the only browser blocked, you can build some proxy-like component that will basically make a call for you, get the response from the desired API, add those headers on top, and then send it back to Hoppscotch.

_See Also :_ [ProxyScotch GitHub Wiki](https://github.com/hoppscotch/hoppscotch/wiki/Proxy)

### Using Hoppscotch Web Extension

1. Download the Hoppscotch browser extension [here.](https://chrome.google.com/webstore/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld?hl=en)

2. Enable it in settings.

3. Open the extension and add new origins
   <img src="/api/Extension.png"  height="400" width="300" halt=""/>

Hoppscotch extension routes all added origins to Proxy.

**What is CORS restriction :** [Learn how to bypass CORS restriction using proxy in Hoppscotch](/rest#cors-restrictions)
