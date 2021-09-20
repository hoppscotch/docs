---
title: Request Body
description: Sample
menuTitle: Body
position: 12
category: Features
---

<img src="/features/body-dark.png" class="dark-img" height="1280" width="640" alt="API DOCUMENTATION IMAGES"/>
<img src="/features/body-light.png" class="light-img" height="1280" width="640" alt="API DOCUMENTATION IMAGES"/>

### Sending Data in Request Body

A request body is data sent by the client to your API. You will need to send body data with requests whenever you need to modify data in the API . _E.g when sending a request to add a new student to a college database, you might include the student's data in `JSON`._

The body section is typically used when you choose the following methods:

- `PUT`
- `POST`
- `PATCH`

The Body tab in Hoppscotch allows you to specify the data you need to send with a request.
You can choosefrom the dropdown menu various different content-types of body data to suit your API.



## Content Types


<alert>
By default, Hoppscotch will select None—leave it selected if you do not need to send a body with your request.
</alert>

| Content Type                      |  Function      |
|-----------------------------------|----------------|
| applcation/json                   | Indicates that the request body format is JSON.                |
| application/Id + json             |  For JSON-LD           |
| application/hal+json              | To Respond to APIs requiring mediatype for HyperText Application Language | 
| application/ vnd.api + json       | The application/vnd.api+json MIME type is reserved for communication using the  `JSON API` protocol.|
| application/xml                   | Indicates that the request body format is XML. |
| application/x-www-form-url-encoded|   describes form data that is sent in a single block in the HTTP message body |
| multipart/form-data               | message body is divided into parts, each containing a discrete section of data.Each part can contain a different content type; for example, `text/plain`, `image/png`, `image/gif` |
| text/html                         | The text/html content type is an Internet Media Type as well as a MIME content type | 
| text/plain                        | The text/plain content type is the generic subtype for plain text. |


**See also**: <nuxt-link to= "/quickstart/rest#uploading-files-via-an-api">Upload Content using form-data (Hoppscotch Quickstart)</nuxt-link>