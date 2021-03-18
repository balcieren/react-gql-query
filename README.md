<div style="display:flex;justify-content:center;width:100%;">
  <img src="https://user-images.githubusercontent.com/46889813/106451545-c7cef300-6497-11eb-80d9-e51c9fc3cd33.png" heigt="300" width="300"/>
</div>


<h1 style="text-align:center;">React Query ❤ React GQL Query</h1> 

[![Version](https://img.shields.io/npm/v/react-gql-query.svg)](https://www.npmjs.com/package/react-gql-query)

> React Query with GQL 

### 🏠 [Homepage](https://github.com/UrduX/react-gql-query)

## Features
<ul>
  <li>Fetch to graphql api via hooks.</li>
  <li>Useable with react query package.</li>
</ul>

## Usage
<a href="https://codesandbox.io/s/pensive-colden-bxlpz">DEMO</a>


-Create Provider
```js 
import { QueryClient, QueryClientProvider } from "react-query";
import { GQLQueryClientProvider, GQLQueryClient } from "react-gql-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
const gqlQueryClient = new GQLQueryClient({
  connection: { uri: "https://pokeapi.dev/" }
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GQLQueryClientProvider client={gqlQueryClient}>
        <Component {...pageProps} />
      </GQLQueryClientProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
```

-useGQLQuery Hook

````js 
import { gql, useGQLQuery } from "react-gql-query";

const GET_POKEMONS = gql`
  query pokemons {
    pokemons(limit: 6, offset: 0) {
      results {
        avatar
        name
      }
    }
  }
`;

export default function IndexPage() {
  const { data } = useGQLQuery("pokemons", GET_POKEMONS);
  console.log(data);
  return <div>Hello</div>;
}
```


## Future Features
<ul>
  <li>Use graphql subscription via useGQLSubscription hook in client.</li>
  <li>Next.js SSR Fetch.</li>
</ul>


## Install

```sh
npm install react-query react-gql-query 
yarn add react-query react-gql-query
```

## Author

👤 **Eren Balcı**

* Github: [@UrduX](https://github.com/UrduX)

## Show your support

Give a ⭐️ if this project helped you!


