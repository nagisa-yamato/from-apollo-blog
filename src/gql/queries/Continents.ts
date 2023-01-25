import { graphql } from "@/gql/generated";

export const ContinentsQueryDocument = graphql(`
  query Continents {
    continents {
      code
      name
    }
  }
`);
