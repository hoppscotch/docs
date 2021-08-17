---
title: Hoppscotch GraphQl Guide
menuTitle: GraphQl Guide

description: "Hoppscotch Guide for graphql newbies"
---

<alert type="success">This documentation is a work in progress!</alert>

## Introduction to GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.[^1]

## Resources to learn more about GraphQL

There are tons of guides and resources on GraphQL all over the internet , We wont be going over the basics here. _This Guide is to demo Hoppscotch's GraphQL editor_ .However if you want to know more about GraphQL here is a list of resources and tutorials that most people found useful:

#### Level : Beginner

- [Howtographql basics](https://www.howtographql.com/basics/0-introduction/)
- [FreeCodeCamp Beginners Guide](https://www.freecodecamp.org/news/a-beginners-guide-to-graphql-86f849ce1bec/)
- [Hasura.io graphql introduction](https://hasura.io/learn/graphql/intro-graphql/introduction/)

#### Level : Intermediate

- [Graphql + nodejs](https://www.howtographql.com/graphql-js/0-introduction/)
- [React + Apollo graphql](https://www.howtographql.com/react-apollo/0-introduction/)

## Demo

Let's try some interesting examples to get a feel of Hoppscotch's Grapql Interface.
To know more about the components check <nuxt-link to='/GraphqlEditor'>GraphQl Editor </nuxt-link>

### Making a Query

We'll be using the Unofficial but well maintained SpaceX graphql endpoint `https://api.spacex.land/graphql`.

#### Step 1 :

Navigate to the [GraphQL editor](https://hoppscotch.io/graphql) and connect to the URL mentioned above.

<img src="/Resources/en/Graphql/GraphqlURLHighlight.png" class="dark-img" height="1280" width="640" alt="graphqlURL"/>
<img src="/Resources/en/Graphql/GraphqlURLHighlight.png" class="light-img" height="1280" width="640" alt="graphqlURL"/>

#### Step 2:

Once Connected, Hoppscotch will automatically show you the
_full schema_ of the Endpoint.

It is important to explore the schema to understand the different `queries`, `mutations`,`types` and `subscriptions` that are offered by the Endpoint.

The Docs Section assists you to understand these .

<img src="/Resources/en/Graphql/GraphQlSchemaHighlight.png" class="dark-img" height="1000" width="640" alt="Schema Docs"/>
<img src="/Resources/en/Graphql/GraphQlSchemaHighlight.png" class="light-img" height="1280" width="640" alt="Schema Docs"/>

#### Step 3 :

Lets us know write a query _GetCapsuleInfo_ ,to get data associated with Crew Dragon Capsule that was used to launch Astronauts.

Go to the Queries Sections and write your Query

- The Capsule ID for Dragon 2 is `C205`.
- Click on the Run button to execute the Query
- Check the Response Body section for the response

<code-group>
<code-block label ="Query" active>

```javascript

query GetCapsuleInfo{
     capsule(id: "C205") {
    dragon {
      description
      active
      first_flight
      id
      orbit_duration_yr
    }
  }
}
```

</code-block>
<code-block label = "Response" >

```javascript
{
  "data": {
    "capsule": {
      "dragon": {
        "description": "Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider)  is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle...",
        "active": true,
        "first_flight": "2019-03-02",
        "id": "dragon2",
        "orbit_duration_yr": 2
      }
    }
  }
}

```

</code-block>
</code-group>

Now go to the docs section,search for capsule and look at all supported queries and customizethe current query. \
**Challenge:** Get the mission name for capusle `c205`

## Using Variables

Hoppscotch allows you to pass variables in the query in the same way as graphQL playground.

To demonstrate the use of vaiables lets write a query to find mission details for Iridium Satellite launches
( Mission id = `F3364BF1`)

- In the variables section add the variables (**variables need to be in json format**)

  ```javascript
  {"var" : "xyz"}
  ```

- Declare Variable name and variable type along with the query name

  ```javascript
  query QueryName($var: type!){
      query body
  }
  ```

- Inside the Query access declared variables this way:

      ```javascript
      query QueryName($var: type!){
          mission(count: $var){
              ...
          }
      }
      ```

  In our example.

<code-group>

<code-block label = "Query" active>

```javascript
query MissionData($id:ID!){
  mission(id:$id) {
    manufacturers
    name
    payloads{
    customers
    payload_type
    }
  }
  missionsResult(find: {id:$id}) {
    data {

      description
    }

}
}
```

</code-block>

<code-block label = "variables">

```javascript

{"id" : "F3364BF"}

```

</code-block >

</code-group>

[^1]: Defination from graphql's official website
