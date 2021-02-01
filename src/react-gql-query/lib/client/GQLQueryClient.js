"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GQLQueryClient = void 0;
const graphql_request_1 = require("graphql-request");
class GQLQueryClient extends graphql_request_1.GraphQLClient {
    constructor(config) {
        super(config.connection.uri, config.options);
    }
}
exports.GQLQueryClient = GQLQueryClient;
//# sourceMappingURL=GQLQueryClient.js.map