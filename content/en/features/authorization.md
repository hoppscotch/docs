---
title: Request Authorization
description: Sample
menuTitle: Authorization
position: 15
category: Features
---

REST APIs use authorizatiom to ensure that a client has secure access only to the resources permitted by their roles.
If you are building or integrating with a 3rd party API , you can choose between **Basic Auth** , **Bearer Tokens** and **OAuth2.0**.

Auth details can be added to a header,body or as parameters to a request.However if you enter your auth details in the **Authorization Tab** ,Hoppscotch will automatically modify the relevant parts of the request based on your chosen `Auth` type.
Storing *Auth Credentials* or *Bearer Tokens* as enironment variables, lets you re-use these more safely and efficiently.

## Supported Auth Models

### Basic auth

If the API supports basic Auth , You will have to add a verified username and password to your request.
In the **Authorization Tab** , select Basic Auth and add your credentials .

### Bearer Tokens

Bearer tokens allow for request authentication using an access key, such as an opaque string or JWT[^1].
In the **Authorization Tab** , select Basic Auth and add your token or for added security store it in a variable and reference it by name.

Hoppscotch will append the API key value to the text 'Bearer' and add it to the request authorization header.

```bash
Bearer <Your API key>
```

### OAuth 2.0



[^1]: JSON Web Token : JSON Web Token (JWT) is  a compact and self-contained way for securely transmitting information between parties as a JSON object. This information is digitally signed. JWTs can be signed using a secret  or a public/private key pair 

 