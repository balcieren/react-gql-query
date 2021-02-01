import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import { GQLQueryClientProvider, GQLQueryClient } from "react-gql-query";

const queryClient = new QueryClient();

const gqlQueryClient = new GQLQueryClient({
  connection: {
    uri: "https://graphqlzero.almansi.me/api",
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <GQLQueryClientProvider client={gqlQueryClient}>
      <App />
    </GQLQueryClientProvider>
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>,
  document.getElementById("root")
);
