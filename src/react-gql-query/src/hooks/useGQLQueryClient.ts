import { useContext } from "react";
import { GQLQueryClientContext } from "../providers/GQLQueryClientProvider";

export function useGQLQueryClient() {
  return useContext(GQLQueryClientContext).client;
}
