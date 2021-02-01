"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGQLMutation = void 0;
const react_query_1 = require("react-query");
const react_1 = require("react");
const GQLQueryClientProvider_1 = require("../providers/GQLQueryClientProvider");
function useGQLMutation(action, config) {
    const { client } = react_1.useContext(GQLQueryClientProvider_1.GQLQueryClientContext);
    const fetchData = async (variables) => {
        return await client?.request(action?.mutation, action?.variables || variables);
    };
    return react_query_1.useMutation((variables) => fetchData(variables), config);
}
exports.useGQLMutation = useGQLMutation;
//# sourceMappingURL=useGQLMutation.js.map