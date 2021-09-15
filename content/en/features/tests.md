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


## So, what aspects of the API should we test?

  Each test is comprised of test actions. These are the individual actions a test needs to take per API test flow. For each API request, an ideal test would need to take the following actions: 

1.<nuxt-link to = "/quickstart/tests#testing-http-status-code">**Verify correct HTTP status code.**</nuxt-link>
 For example, creating a resource should return 201 CREATED and unpermitted requests should return 403 FORBIDDEN, etc.

2.<nuxt-link to = "/quickstart/tests">**Verify response payload.**</nuxt-link>
 Check valid JSON body and correct field names, types, and values — including in error responses.


3.<nuxt-link to = "/quickstart/tests">**Verify response headers.**</nuxt-link>
 HTTP server headers have implications on both security and performance.


4.<nuxt-link to = "/quickstart/tests">**Verify correct application state.**</nuxt-link>
 This is optional and applies mainly to manual testing, or when a UI or another interface can be easily inspected.


5.<nuxt-link to = "/quickstart/tests">**Verify basic performance sanity.**</nuxt-link>
 If an operation was completed successfully but took an unreasonable amount of time, the test fails.


