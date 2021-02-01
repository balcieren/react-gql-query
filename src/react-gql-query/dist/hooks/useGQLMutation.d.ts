import { UseMutationOptions } from "react-query";
import { DocumentNode } from "graphql";
export declare function useGQLMutation<TData = any, TError = any, TVariables = any, TContext = any>(action: {
    mutation: string | DocumentNode;
    variables?: TVariables;
}, config?: UseMutationOptions<TData, TError, TVariables, TContext>): import("react-query").UseMutationResult<TData, TError, TVariables, TContext>;
//# sourceMappingURL=useGQLMutation.d.ts.map