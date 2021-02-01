import { GraphQLClient } from "graphql-request";
import { FC, ReactNode } from "react";
export interface GQLQueryClientProviderProps {
    client: GraphQLClient | undefined;
    children?: ReactNode;
}
export declare const GQLQueryClientContext: import("react").Context<GQLQueryClientProviderProps>;
export declare const GQLQueryClientProvider: FC<GQLQueryClientProviderProps>;
//# sourceMappingURL=GQLQueryClientProvider.d.ts.map