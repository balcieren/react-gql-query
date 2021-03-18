import { useMutation, UseMutationOptions } from "react-query";
import { useContext } from "react";
import { GQLQueryClientContext } from "../providers/GQLQueryClientProvider";
import { DocumentNode, GraphQLError } from "graphql";

export function useGQLMutation<
  TData = any,
  TError = GraphQLError[],
  TVariables = any,
  TContext = any
>(
  document: string | DocumentNode,
  documentVariables?: { variables?: TVariables },
  config?: UseMutationOptions<TData, TError, TVariables, TContext>
) {
  const { client } = useContext(GQLQueryClientContext);

  const fetchData = async (variables: TVariables) => {
    return await client?.request(
      document,
      documentVariables?.variables || variables
    );
  };

  return useMutation<TData, TError, TVariables, TContext>(
    (variables: TVariables) => fetchData(variables),
    config
  );
}
