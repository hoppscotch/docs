---
title: Send a REST request
menuTitle: REST
description: "Hoppscotch Guide for REST requests"
position: 5
category: quickstart
---If you are new to API development and want to know more about the basics of APIs ,follow along this guide !

   <img src="/APIGuide/Illustration-dark.png" class="dark-img" height="600" width="640" alt=""/>
    <img src="/APIGuide/Illustration-light.png" class="light-img" height="600" width="640" alt=""/>

## Sending Requests

Lets Build Our First REST API request!

We are going to write a query with a simple `GET` method to get character information from <a href="https://www.rickandmortyapi.com">Rick and Morty</a> Tv show.

<img src="/API/method-dark.png" class="dark-img" height="1280" width="640" alt=""/>

<img src="/API/method-light.png" class="light-img" height="1280" width="640" alt=""/>

Start by choosing `GET` method and connecting to the URL below.
click on `SEND`.
Scroll down to the response panel and you see the following Response.

<code-group>
<code-block label ="URL" active>

```bash
https://rickandmortyapi.com/api
```

</code-block>

<code-block label="Response" active>

```bash
{
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}
```

</code-block>
</code-group>

Now lets Try to Get results on the characters.
in the URL add `/character`. and give it a run.
the response should be like this:

<code-group>

<code-block label = "Response" active>

```bash
{
  "info": {
    "count": 671,
    "pages": 34,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",

      }//.......
```

</code-block>

<code-block label="API Endpoint">

```bash
https://rickandmortyapi.com/api/character
```

</code-block>

</code-group>

<i>Congratulations on the Successful API request , Try experimenting with

`/location` and `/episode` as well.

 </i>

## Using parameters

In the previous section we got a long response with details on all the characters of the Rick And Morty show.
You can also get details on a single character .

Lets use parameters section of Hoppscotch to get details of all versions of Morty Smith alive in the multiverse.

You can send path and query parameters with your requests using the `URL` field and the `parameters` field.

**In the URL field:**

- To add Query parameters ,append `?` to the end of the request URL
- add parameter `id=1` , if adding multiple parameters separate them with `&`

Like so:

<code-group>
<code-block label= "URL parameters" active >

```bash
https://rickandmortyapi.com/api/character/?name=morty&status=alive
```

</code-block>
</code-group>

**Using Parameters tab:**

Add the key value pairs:

- `name` `morty`

* `status` `alive`

This will be automatically appended to your API path .

<img src="/APIGuide/param-light.png" class="light-img" height="1280" width="640" alt=""/>

<img src="/APIGuide/param-dark.png" class="dark-img" height="1280" width="640" alt=""/>

You will get the following response:

<code-block label= "Morty" active >

```bash
{
  "info": {
    "count": 54,
    "pages": 3,
    "next": "https://rickandmortyapi.com/api/character/?page=2&name=morty",
    "prev": null
  },
  "results": [
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": ""
      .....
    },
    {
      "id": 18,
      "name": "Antenna Morty",
      "status": "Alive",
      "species": "Human",
      "type": "Human with antennae",
    .......
```

</code-block>

## Using Collections

When you are working and testing multiple Endpoints its always a good idea to organize them categorically for future reference or for collaboration with other developers.
Let us take some of our Rick And Morty Queries and organize them into a collection.

- Go to the Collections tab in the right side-bar.
- Create a new Collection called `rick&mortyAPI`.
- name the current query you are working on.
- add it to the collection.
- you can further make sub folders inside a collection.

<video loop playsinline controls>
  <source src="/APIGuide/collections.webm" type="video/webm" />
  <source src="/APIGuide/collections.mp4"  type="video/mp4"  />
</video>

## Environment Variables

**Environment variables allow you to store and reuse values in your requests and scripts**

Use-cases:

- By storing a value in a variable, you can reference it throughout your request section
- If you need to update the value, you only have to change it in one place
- Using variables increases your ability to work efficiently and minimizes the likelihood of error

### **Creating Environment**

Create a new environment from the right sidebar.
<img src="/APIGuide/env-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/APIGuide/env-light.png" class="light-img" height="1280" width="640" alt=""/>

Choose the desired environment from the sidebar dropdown menu in the environments section.

### **Adding environment variables**

Click on an environment to add/edit/delete variables.

<img src="/APIGuide/envcreate-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/APIGuide/envcreate-light.png" class="light-img" height="1280" width="640" alt=""/>

### **Accessing environment data.**

Select the Environment whose variables you wish to access.
It's desirable to write environment variables against a request. This is done by accessing the `<<variable_name>>` object in request section.

```javascript
<<baseURL>><<path>>
```

<video loop playsinline controls>
  <source src="/APIGuide/environment.webm" type="video/webm" />
  <source src="/APIGuide/environment.mp4"  type="video/mp4"  />
</video>

Use environment variables enclosed in double angular brackets (`<<>>`) anywhere in the request section.

**Example: Environment variables with pre-request scripts**

<img src="/APIGuide/addingToEnv-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/APIGuide/addingToEnv-light.png" class="light-img" height="1280" width="640" alt=""/>

<alert>
Variables in an environment with the name `Globals` will be added globally (i.e to every other environment.)
</alert>


## Using Auth Tokens

In this section, we'll look at passing Authorization and Authentication Information in our requests,by accessing the gitHub API.

- Make a GET request to the url `https://api.github.com/user`.
- You'll get an error like this

  ```javascript
  {
  "message": "Bad credentials",
  "documentation_url": "https://docs.github.com/rest"
  }
  ```
#### generating access token

To get access to the Github API, you first need to generate a personal access token. For our demonstration we will generate one granting access to public repositories:

  - Go to your [Github account settings](https://github.com/settings/profile) by clicking on your profile icon and clicking on Settings (at the bottom)
  - Scroll down and click on Developer setting in the left menu

    <img src="/APIGuide/github-developer-settings.png"/>

  - In developer setting page, click on [Personal access tokens](https://github.com/settings/tokens)

  <img src="/APIGuide/github-personal-access-tokens.png"/>

  - Click on generate new token and check  ONLY the public_repo scope under repo.

  <img src="/APIGuide/github-scopes-public.png" />

  - Copy the generated opaque-string

#### Storing Auth Token in Variable

<alert type = "success">It is a recommended safe-practice to have your Auth Details in Enivronment variables rather than inputting it directly to the Authorization tab </alert>

- Add the copied string to a new variable named 'token' in an existing or new environment.
<img src="/APIGuide/addingToEnv-dark.png" class="dark-img" height="300" width="400" alt=""/>
<img src="/APIGuide/addingToEnv-light.png" class="light-img" height="300" width="400" alt=""/>

- Now open the Authorisation tab and select Bearer Token in the dropdown list.

- call the variable token. 

- click on send.

<img src="/APIGuide/usingVar-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/APIGuide/usingVar-light.png" class="light-img" height="1280" width="640" alt=""/>

Hoppscotch will automatically add the contents into the authorisation header

**Result**

You Should Be able to see the number of public repos you have made in GitHub.

```javascript

{
  "login": "HoppscotchUser",
  "url": "https://api.github.com/users/HoppscotchUser",
  ...
  "public_repos": 22,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2016-09-05T14:18:09Z",
  "updated_at": "2021-08-03T14:55:54Z"
}

```
*To know more about other Auth Models Hoppscotch supports :* <nuxt-link to = "/features/authorization">Feature:Authorization</nuxt-link>



## <h2 >Additional Resources
