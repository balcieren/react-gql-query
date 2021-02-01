import { useMutation, UseMutationOptions } from "react-query";
import { useContext } from "react";
import { GQLQueryClientContext } from "../providers/GQLQueryClientProvider";
import { DocumentNode } from "graphql";

export function useGQLMutation<
  TData = any,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  action: { mutation: string | DocumentNode; variables?: TVariables },
  config?: UseMutationOptions<TData, TError, TVariables, TContext>
) {
  const { client } = useContext(GQLQueryClientContext);

  const fetchData = async (variables: TVariables) => {
    return await client?.request(
      action.mutation,
      action.variables || variables
    );
  };

  return useMutation<TData, TError, TVariables, TContext>(
    (variables: TVariables) => fetchData(variables),
    config
  );
}
