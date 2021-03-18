import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "react-query";
import { useContext } from "react";
import { GQLQueryClientContext } from "../providers/GQLQueryClientProvider";
import { DocumentNode } from "graphql";

export function useGQLInfiniteQuery<
  TQueryFnData = any,
  TError = any,
  TVariables = any,
  TData = TQueryFnData
>(
  key: QueryKey,
  action: (
    contex?: QueryFunctionContext<any, any>,
    request?: (
      query: string | DocumentNode,
      variables?: TVariables
    ) => Promise<any>
  ) => Promise<any>,
  config?: UseInfiniteQueryOptions<TQueryFnData, TError, TData>
) {
  const { client } = useContext(GQLQueryClientContext);

  const fetchData = async (
    query: string | DocumentNode,
    variables?: TVariables
  ) => await client?.request(query, variables);
  // action(undefined, fetchData);
  return useInfiniteQuery<TQueryFnData, TError, TData>(
    key,
    (context) => {
      return action(context, (query, variables) => fetchData(query, variables));
    },
    config
  );
}
