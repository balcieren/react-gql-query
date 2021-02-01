"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGQLQuery = void 0;
const react_query_1 = require("react-query");
const react_1 = require("react");
const GQLQueryClientProvider_1 = require("../providers/GQLQueryClientProvider");
function useGQLQuery(key, action, config) {
    const { client } = react_1.useContext(GQLQueryClientProvider_1.GQLQueryClientContext);
    const fetchData = async () => await client?.request(action?.query, action?.variables);
    return react_query_1.useQuery(key, fetchData, config);
}
exports.useGQLQuery = useGQLQuery;
//# sourceMappingURL=useGQLQuery.js.map