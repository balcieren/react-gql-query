"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GQLQueryClientProvider = exports.GQLQueryClientContext = void 0;
const react_1 = require("react");
exports.GQLQueryClientContext = react_1.createContext({
    client: undefined,
    children: undefined,
});
const GQLQueryClientProvider = ({ client, children, }) => {
    return (<exports.GQLQueryClientContext.Provider value={{ client }}>
      {children}
    </exports.GQLQueryClientContext.Provider>);
};
exports.GQLQueryClientProvider = GQLQueryClientProvider;
//# sourceMappingURL=GQLQueryClientProvider.js.map