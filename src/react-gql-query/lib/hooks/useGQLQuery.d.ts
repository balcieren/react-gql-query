import { QueryKey, UseQueryOptions } from "react-query";
import { DocumentNode } from "graphql";
export declare function useGQLQuery<TQueryFnData = any, TError = unknown, TVariables = any, TData = TQueryFnData>(key: QueryKey, action: {
    query: string | DocumentNode;
    variables?: TVariables;
}, config?: UseQueryOptions<TQueryFnData, TError, TData>): import("react-query").QueryObserverResult<TData, TError>;
//# sourceMappingURL=useGQLQuery.d.ts.map