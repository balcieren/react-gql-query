"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGQLQueryClient = void 0;
const react_1 = require("react");
const GQLQueryClientProvider_1 = require("../providers/GQLQueryClientProvider");
function useGQLQueryClient() {
    return react_1.useContext(GQLQueryClientProvider_1.GQLQueryClientContext).client;
}
exports.useGQLQueryClient = useGQLQueryClient;
//# sourceMappingURL=useGQLQueryClient.js.map