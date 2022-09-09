This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 
___

This app allows users to view trending NFT collections pulled from the icy.tools developer API.

# Getting Started

### Visit [quicknode-assessment.vercel.app](https://quicknode-assessment.vercel.app/) to view deployed app.
---

To run the development server locally:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Notes / Future Steps
1. "Connecting" to a user's wallet is currently limited to local component state. 
   
    - A next step would be to use a library such as [web3.js](https://github.com/ChainSafe/web3.js) to actually handle establishing an Ethereum wallet connection. 
2. Navigating between collection pages, as well as giving the user the ability to select the order of the collections, was out of scope for the time alloted in this assessment. 
   
    - Currently, the graphQL query is only fetching a fixed number of collections, as well as a fixed value for the order the collections are returned. 
    - I began to implement a `useTrendingCollections` hook that has the ability to accept query parameters for `first`, `after`, `orderBy`, and `orderDirection`. This will allow for pagination and dynamic sorting.
    - A next step would be to connect the client to this new hook so it can be used within the `Collectionscontainer` component.
3. A possible feature to be implemented a future time would be to utilize the `TokenImages` query to display the collection image using the Node's `contractAddress`.


# Questions

1. **Handles user authentication**

    a. *Would you need a database?*

    - To authenticate a user's identity, authorize privelidges, and remember specific user preferences a database would be needed.

    b. *Which one and what might the schema look like?*

    - It depends on if there is expected to be significant changes to the schema or not. If the schema is well defined, then a relational SQL DB would be a good choice. Something like Postgres could integrate well with a GrapQL API.

    c. *Are their pros/cons to a specific choice? (SQL vs NoSQL)*

    - SQL:

      - PROs: Enforces DB structure, Can map between DB schema and GraphQL schema.
      - CONs: Changing schema can be difficult.

    - NoSQL:

      - PROs: No schema/ generalized schema, can use ORM to map between DB and GraphQL schema.
      - CONs: Lack of type enforcement could lead to errors with GraphQL.


2. **Serves data to the client via an API**

    a. *What kind of API would you use?*

    - Both REST and GraphQL API would allow a request to be sent via HTTP and receive JSON data back.
    - One reason to prefer a GraphQL API is that you can tailor your request to get exactly the data required. As opposed to a REST API where the query can 'over-fetch' and return a complete data set.
   


3. **Scales to handle thousands of requests per second**

    a. *This could involve a lot of different optimizations, but what would you try first or what are the top three you might consider?*

    - An initial step to improve API performance could be to cache requests. This would help alleviate load where the common requests have the same response.
    - A next step could be to limit the payload size or to implement rate-limiting.
    - A final step could be to look into bottlenecks related to the your network or cloud infustructure.
    - In addition to the above steps, performing load testing to ensure your application can handle an expected number of requests would be recommended.


4. **Provides real-time updates to clients as new data is available**
    
    a.  One possibility for providing real-time updates to clients would be to poll the server at pre-determined intervals using a HTTP polling model.

    b. Other options could involve using server-sent events or WebSockets where data is pushed from the server to the client.  

