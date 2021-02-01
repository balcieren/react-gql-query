"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GQLQueryClientProvider = exports.GQLQueryClientContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.GQLQueryClientContext = react_1.createContext({
    client: undefined,
    children: undefined,
});
const GQLQueryClientProvider = ({ client, children, }) => {
    return (jsx_runtime_1.jsx(exports.GQLQueryClientContext.Provider, Object.assign({ value: { client } }, { children: children }), void 0));
};
exports.GQLQueryClientProvider = GQLQueryClientProvider;
//# sourceMappingURL=GQLQueryClientProvider.js.map