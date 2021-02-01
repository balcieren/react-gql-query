import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
interface GQLQueryClientConfig {
    connection: {
        uri: string;
    };
    options?: RequestInit;
}
export declare class GQLQueryClient extends GraphQLClient {
    constructor(config: GQLQueryClientConfig);
}
export {};
//# sourceMappingURL=GQLQueryClient.d.ts.map