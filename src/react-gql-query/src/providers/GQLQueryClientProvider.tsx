import { GraphQLClient } from "graphql-request";
import { createContext, FC, ReactNode } from "react";

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
  return (
    <GQLQueryClientContext.Provider value={{ client }}>
      {children}
    </GQLQueryClientContext.Provider>
  );
};
