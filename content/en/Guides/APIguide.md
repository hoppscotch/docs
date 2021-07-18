---
title: REST API Guide
menuTitle: API Guide
description: "Hoppscotch Guide for REST newbies"
position: 7
category: Guide
---

If you are new to API development and want to know more about the basics of APIs ,follow along this guide ! 

<br></br>

## <h2 style="font-size:24px">Sending Requests</h2>
<hr>

<br></br>

<b>Lets Build Our First REST API request!</b>

<br></br>

We are going to write a query with a simple `GET` method to get character information from <a href="https://www.rickandmortyapi.com">Rick and Morty</a>  Tv show.

<br></br>

<img src="/Resources/en/API/method-dark.png" class="dark-img" height="1280" width="640" alt=""/>

<img src="/Resources/en/API/method-light.png" class="light-img" height="1280" width="640" alt=""/>

<br></br>

Start by choosing `GET` method and connecting to the URL below.
click on `SEND`.
Scroll down to the response panel and you see the following Response.

<br></br>

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

<br></br>

Now lets Try to Get results on the characters.
in the URL add  `/character`. and give it a run.
the response should be like this:

<br></br>

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

<br></br>

<i>Congratulations on the Successful API request , Try experimenting with

 `/location` and `/episode` as well.

 </i>

<br></br>

## <h2 style="font-size:24px">Using parameters</h2>
<hr>
<br></br>

In the previous section we got a long response with details on all the characters of the Rick And Morty show.
You can also get details on a single character .

<br></br>

<b>Lets use parameters section of Hoppscotch to get details of all versions of Morty Smith alive in the multiverse.</b>
 
You can send path and query parameters with your requests using the `URL` field and the `parameters` field.

<br></br>

**In the URL field:**

- To add Query parameters ,append `?` to the end of the request URL
- add parameter `id=1 ` , if adding multiple parameters separate them with `&`

Like so:

<code-group>
<code-block label= "URL parameters" active >

```bash
https://rickandmortyapi.com/api/character/?name=morty&status=alive
```

</code-block>
</code-group>

<br></br>

**Using Parameters tab:**

 Add the key value pairs:


<n></n>

* `name` `morty`


* `status` `alive`

<br></br>

This will be automatically appended to your API path . 

<img src="/Resources/en/APIGuide/param-light.png" class="light-img" height="1280" width="640" alt=""/>

<img src="/Resources/en/APIGuide/param-dark.png" class="dark-img" height="1280" width="640" alt=""/>


<br></br>
You will get the following response:

<br></br>

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



## <h2 style="font-size:24px">Using Collections</h2>
<br></br>
When you are working and testing multiple Endpoints its always a good idea to organize them categorically for future reference or for collaboration with other developers.
Let us take some of our Rick And Morty Queries and organize them into a collection.
<br></br>

- Go to the Collections tab in the right side-bar.
- Create a new Collection called `rick&mortyAPI`.
- name the current query you are working on.
- add it to the collection.
- you can further make sub folders inside a collection.
<br></br>

<video loop playsinline controls>
  <source src="/Resources/en/APIGuide/collections.webm" type="video/webm" />
  <source src="/Resources/en/APIGuide/collections.mp4"  type="video/mp4"  />
</video>
<br></br>



## <h2 style="font-size:24px">Using Variables and storing them in environments</h2>

<hr>

<br></br>

**Environment variables allow you to store and reuse values in your requests and scripts**
<br></br>

 Use-cases:

* By storing a value in a variable, you can reference it throughout your request section
* If you need to update the value, you only have to change it in one place
* Using variables increases your ability to work efficiently and minimizes the likelihood of error

<br></br>

### **Creating Environment**
-------------------------------------------------------------

Create a new environment from the right sidebar.
<img src="/Resources/en/APIGuide/env-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/Resources/en/APIGuide/env-light.png" class="light-img" height="1280" width="640" alt=""/>


Choose the desired environment from the sidebar dropdown menu in the environments section.

<br></br>

### **Adding environment variables**

--------------------------------------------------------------------
Click on an environment to add/edit/delete variables.
<br></br>

<img src="/Resources/en/APIGuide/envcreate-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/Resources/en/APIGuide/envcreate-light.png" class="light-img" height="1280" width="640" alt=""/>

<br></br>


### **Accessing environment data.**
------------------------------------------------
<br></br>
Select the Environment whose variables you wish to access.
It's desirable to write environment variables against a request. This is done by accessing the `<<variable_name>>` object in request section.

```javascript
<<baseURL>>><<path>>
```

<img src="/Resources/en/APIGuide/env1-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/Resources/en/APIGuide/env1-light.png" class="light-img" height="1280" width="640" alt=""/>

<br></br>

Use environment variables enclosed in double angular brackets (`<<>>`) anywhere in the request section.

**Example: Environment variables with pre-request scripts**

<img src="/Resources/en/APIGuide/envscript-dark.png" class="dark-img" height="1280" width="640" alt=""/>
<img src="/Resources/en/APIGuide/envscript-light.png" class="light-img" height="1280" width="640" alt=""/>
<Alert>
Variables in an environment with the name `Globals` will be added globally (i.e to every other environment.)
</Alert>


<br></br>

## <b><h2 style="font-size:18px" >Additional Resources</h2></b>
