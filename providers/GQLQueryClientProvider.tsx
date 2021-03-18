import { GraphQLClient } from "graphql-request";
import { createContext, FC, ReactNode, useMemo } from "react";

export interface GQLQueryClientProviderProps {
  client: GraphQLClient | undefined;
  children?: ReactNode;
}

export const GQLQueryClientContext = createContext<GQLQueryClientProviderProps>(
  {
    client: undefined,
    children: undefined,
  }
);

export const GQLQueryClientProvider: FC<GQLQueryClientProviderProps> = ({
  client,
  children,
}) => {
  const clientMemo = useMemo(() => client, []);
  return (
    <GQLQueryClientContext.Provider value={{ client: clientMemo }}>
      {children}
    </GQLQueryClientContext.Provider>
  );
};
