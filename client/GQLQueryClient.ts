import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";

interface GQLQueryClientConfig {
  connection: {
    uri: string;
  };
  options?: RequestInit;
}

export class GQLQueryClient extends GraphQLClient {
  constructor(config: GQLQueryClientConfig) {
    super(config.connection.uri, config.options);
  }
}
