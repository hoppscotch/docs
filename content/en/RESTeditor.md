---
title: RestAPI platform
description: 'Know your way around the Hoppscotch Interface'
position: 3

category: Getting started

---
<alert type="success">

This documentation is a work in progress!

</alert>

<video loop playsinline controls>
  <source src="/Resources/en/API/APIvid.webm" type="video/webm" />
  <source src="/Resources/en/API/APIvid.mp4" type="video/mp4" />
</video>
<br></br>
You can make API requests and examine responses using Hoppscotch.
 An API request allows you to retrieve or send data to and from an API endpoint.
 <br></br>
The common http methods used in API requests are:

* `GET` :  Retrieve information about the REST API resource
* `POST` :  Create a REST API resource
* `PUT` :  Update a REST API resource
* `DELETE`  : Delete a REST API resource or related component

Other methods like `HEAD`,`CONNECT`, `OPTIONS`,`TRACE`,`PATCH`and other `CUSTOM`methods can also be used.
<br></br>
Lets go over the features offered by Hoppscotch API platoform:
<br></br>


## <h2 style="font-size:24px">How to Use </h2>

<hr>
<br></br>

### <h3 style="font-size:20px">Choosing Methods:</h3>

</br>

<img src="/Resources/en/API/method-dark.png" class="dark-img" height="1280" width="640" alt=""/>

<img src="/Resources/en/API/method-light.png" class="light-img" height="1280" width="640" alt=""/>


<br></br>

### <h3 style="font-size:20px">Adding requests to collections :</h3>

<br></br>

<img src="/Resources/en/API/nameRequest-light.png" class="light-img" height="1280" width="640" alt=""/>

<img src="/Resources/en/API/nameRequest-dark.png" class="dark-img" height="1280" width="640" alt=""/>

<br></br>
You can name your requests and add them to collections folders or subfolders.

<img src="/Resources/en/API/saverequestTocollection-dark.png" class="dark-img" height="1280" width="640" alt=""/>

<img src="/Resources/en/API/saverequestTocollection-light.png" class="light-img" height="1280" width="640" alt=""/>
<br></br>

### <h3 style="font-size:20px">Adding dynamic behavior to requests:</h3>

<br></br>


<img src="/Resources/en/API/dynamic-light.png" class="light-img" height="1280" width="640" alt=""/>
<img src="/Resources/en/API/dynamic-dark.png" class="dark-img" height="1280" width="640" alt=""/>

<br></br>

The editor allows you to add dynamic behaviour to requests and collections.This lets you add `parameters` ,  `Headers` , `Authentication` , build `pre-request scripts` and write `tests`.
<br></br>
<b>*See Also :* <nuxt-link to='/WritingScripts'> Writing Scripts(Guide) </nuxt-link></b>
<br></br>

### <h3 style="font-size:20px">Response body :</h3>
<br></br>

<img src="/Resources/en/API/response-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/Resources/en/API/response-light.png" class="light-img" height="1280" width="640" alt=""/>

<br></br>
The response from the `API endpoint` can be viewed here. You can download or copy the response for further use.

<br></br>

<b>*See Also :* <nuxt-link to='/Guides/APIguide'> Using Environments (Guide) </nuxt-link></b>
<br></br>

## Keyboard shortcuts
----------------------------------------------------------------------
**Optimized for efficiency.**

<p>

| Shortcut                       | Action                 |
| -------------------------------| -----------------------|
| <kbd>Ctrl</kbd> + <kbd>G</kbd>  |  Send/Cancel Request   |
| <kbd>Ctrl</kbd> + <kbd>S</kbd>   |  Save to Collections  |
| <kbd>Ctrl</kbd> + <kbd>K</kbd>   |  Copy Request Link    |
| <kbd>Ctrl</kbd> + <kbd>I</kbd>  |  Reset Request        |
| <kbd>Alt</kbd> + <kbd>🠋</kbd>  |  Select Next method    |
| <kbd>Alt</kbd> + <kbd>🠉</kbd>  |  Select Previous method|
| <kbd>Alt</kbd> + <kbd>G</kbd>   |  Select `GET` method   |
| <kbd>Alt</kbd> + <kbd>H</kbd>   |  Select `HEAD` method  |
| <kbd>Alt</kbd> + <kbd>P</kbd>   |  Select `POST` method  |
| <kbd>Alt</kbd> + <kbd>U</kbd>   |  Select `PUT` method   |
| <kbd>Alt</kbd> + <kbd>X</kbd>   |  Select `DELETE` method|




</p>
<br></br>

## <b> <h3 style="font-size:20px"> TroubleShooting </h3> </b>
<hr>
<br></br>

<alert type="warning">

TroubleShooting Guide  needs review

</alert>

### <b> <h3 style="font-size:16px"> Removing CORS restrictions</h3></b>

</br>

#### <b> <h3 style="font-size:16px">What is CORS?</h3></b>
<br></br>
`CORS` or Cross-Origin Resource Sharing is a security mechanism built into modern web-browers.
It may cause the following error when testing local `API endpoints` or some other API endpoints with Hoppscotch.
<br></br>

<img src="/Resources/en/API/CORS error example.png"   alt=""/>
<br></br>

This is Due to the API not sending the proper API headers( `Access-Control-Allow`). This issue can be solved in two ways.
<br></br>

1.  Ask whoever manages the API to add CORS support.
2. Use Middleware like ProxyScotch or the<a href="https://chrome.google.com/webstore/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld?hl=en"> Hoppscotch Web Extension.</a>

</br>

### <b><h3 style="font-size:16px">Setting Up Proxy and WebExtension</h3></b>
<br>
Download the Hoppscotch WebExtension <a href="https://chrome.google.com/webstore/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld?hl=en"> here.</a>

<img src="/Resources/en/API/Extension.png"  height="400" width="300" halt=""/>


</br>

Using Middle ware : Since `CORS` is as simple as adding some HTTP headers, and it’s the only browser blocked, then you can build some proxy-like component that will basically make a call for you, get the response from the desired API, add those headers on top, and then send it back to Hoppscotch. 

Hoppscotch has in-house Porxy server ProxyScotch built to handle this.

Enable it in settings.
<br></br>

<img src="/Resources/en/API/proxy-light.png" class="light-img" height="1280" width="640" alt=""/>

<img src="/Resources/en/API/proxy-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<br></br>

You can replace this with your own proxy middleware if you wish.

This will now route the `URL` through the proxy server, adding required headers. 
<br></br>

You can also enable Extension in the settings and Use the Extension which routes requests through proxyScotch.

<br></br>

<b>*See Also :* <a href="https://github.com/hoppscotch/hoppscotch/wiki/Proxy">ProxyScotch GitHub Wiki</a></b>