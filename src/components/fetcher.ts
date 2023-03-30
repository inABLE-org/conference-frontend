import { request, RequestDocument, Variables } from "graphql-request";

export const Fetcher = (
  query: RequestDocument,
  variables?: Variables | undefined
) => {
  return request("/api/graphql", query, variables);
};