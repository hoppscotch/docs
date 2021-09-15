---
title: Automated Debugging with Tests
description: Sample
menuTitle: Tests
position: 3
category: Features
---

You can compose test scripts for your Hoppscotch API demands in JavaScript. Tests permit you to guarantee that your API is functioning as expected , and intergrations between services are reliable, and to confirm that new advancements haven't broken any current functionality.

**To Know more About the methods listed below check** <nuxt-link to="/quickstart/tests">Hoppscotch Tests (Quickstart Guide)</nuxt-link>

## `pw` API

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
- <nuxt-link to="/quickstart/tests#repsonse">`.repsonse.`</nuxt-link>


## How To Run Tests

1. Write Your Test Scripts in the `Tests` Section .
   <alert type = "info">
   Use *Snippets* in the right of the code-editor for pre written TestScripts or write Your own Scripts with regular JavaScript.
   </alert> 

   <img src="/features/TestScript-dark.png" class="dark-img" height="1280" width="640" alt=""/>
    <img src="/features/TestScript-light.png" class="light-img" height="1280" width="640" alt=""/>

2. Use the built-in methods provided by `pw API ` to interact with your end point and to assert outcomes.

3. Click on `SEND` , the test scripts will run on the response recieved from your API.

4. View The Status of the Tests in the **Test Result** Tab in the response Section. 

    <img src="/features/TestRes-dark.png" class="dark-img" height="1280" width="640" alt=""/>
    <img src="/features/TestRes-light.png" class="light-img" height="1280" width="640" alt=""/>

