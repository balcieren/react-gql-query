import { QueryKey, useQuery, UseQueryOptions } from "react-query";
import { useContext } from "react";
import { GQLQueryClientContext } from "../providers/GQLQueryClientProvider";
import { DocumentNode } from "graphql";

export function useGQLQuery<
  TQueryFnData = any,
  TError = unknown,
  TVariables = any,
  TData = TQueryFnData
>(
  key: QueryKey,
  action: { query: string | DocumentNode; variables?: TVariables },
  config?: UseQueryOptions<TQueryFnData, TError, TData>
) {
  const { client } = useContext(GQLQueryClientContext);

  const fetchData = async () =>
    await client?.request(action.query, action.variables);

  return useQuery<TQueryFnData, TError, TData>(key, fetchData, config);
}
