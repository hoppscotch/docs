---
title: Graphql platform
description: "More about Hoppscotch Graphql"
position: 3
category: Getting started
---

<video loop playsinline controls>
  <source src="/Resources/en/Graphql/GraphQlDemoSpaceX.webm" type="video/webm" />
  <source src="/Resources/en/Graphql/GraphQlDemoSpaceX.mp4"  type="video/mp4"  />
</video>

If you’re just starting to learn about GraphQl ,here are a few useful links:
1 . <nuxt-link to='/Guides/Graphqlguide'> Graphql ( Hoppscotch Guide) </nuxt-link>

2. <a href="https://www.howtographql.com/">howtographql.com</a>
3. <a href="https://graphql.org/learn/">howtographql.com</a>

Lets go over the features provided by the hoppscotch GraphQl Editor and how to use them.

### URL

<img src="/Resources/en/Graphql/GraphqlURLHighlight.png" class="dark-img" height="1280" width="640" alt="graphqlURL"/>
<img src="/Resources/en/Graphql/GraphqlURLHighlight.png" class="light-img" height="1280" width="640" alt="graphqlURL"/>
Enter The URL of the GraphQl End point here.

### Headers

<img src="/Resources/en/Graphql/GraphQlHeaderHighlight.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/Resources/en/Graphql/GraphQlHeaderHighlight.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>
The editor lets you add header-value pairs to your GraphQl Request.
Use case:
Accessing a secure endpoint may need Authentication.

### Schema

<img src="/Resources/en/Graphql/GraphqlSchemaHighlight.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/Resources/en/Graphql/GraphqlSchemaHighlight.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>

You can view the schema of GraphQl Endpoint that you’ve connected to in this window. The Schema can be downloaded as a JSON file or copied to your clipboard.

### Queries

<img src="/Resources/en/Graphql/graphQlQueriesandvariablesSC.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/Resources/en/Graphql/graphQlQueriesandvariablesSC.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>
Any Queries to be made to the GraphQl endpoint are typed out in this section , there is an inbuilt formatter that Prettifies the Query, this can be accessed in the top right corner of the Query Pane or Through the shortcut<link to shortcuts in Hoppscotch>  ‘Ctrl +P ‘.

To keep the Query uncluttered or to help easy debugging, you can use the variables section as shown in the above figure.

### Response

<img src="/Resources/en/Graphql/GraphQlResponse.png" class="dark-img" height="1280" width="640" alt="History Sidepanel"/>
<img src="/Resources/en/Graphql/GraphQlResponse.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>
The response returned by the endpoint on your query is displayed at the end of the page , this can be copied to your clipboard or exported as a JSON file.

### Schema Documentation

<img src="/Resources/en/Graphql/GraphQlSchemaHighlight.png" class="dark-img" height="1000" width="640" alt="History Sidepanel"/>
<img src="/Resources/en/Graphql/GraphQlSchemaHighlight.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>
In the right sidebar you can view the documentation of the GraphQl endpoint you are working with.
The documentation is searchable and documentation for Queries, Mutations, Subscriptions and Types are present in the Tabs below the search bar.

### History

<img src="/Resources/en/Graphql/history.png" class="dark-img" height="1000" width="640" alt="History Sidepanel"/>
<img src="/Resources/en/Graphql/history.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>
All your recent Requests can be accessed from the History tab, and you can pick up right were left it.

### Collections

<img src="/Resources/en/Graphql/GraphQlcollectionHighlight.png" class="dark-img" height="1000" width="640" alt="History Sidepanel"/>
<img src="/Resources/en/Graphql/GraphQlcollectionHighlight.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>
Just Like Rest API collections , Hoppscotch lets you organize your GraphQl queries in collections.
<img src="/Resources/en/Graphql/importOrExportGraphqlCollection.png" class="dark-img" height="1000" width="640" alt="History Sidepanel"/>
<img src="/Resources/en/Graphql/importOrExportGraphqlCollection.png" class="light-img" height="1280" width="640" alt="History Sidepanel"/>

You can Import existing collections(JSON) to replace current collection ,or preserve current collection as well as add new collection from your sources.
Collections can be Exported as JSON as well
