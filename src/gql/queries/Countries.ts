// NOTE:
// https://the-guild.dev/graphql/codegen/docs/guides/react-vue#writing-graphql-queries
import { graphql } from "@/gql/generated";

export const GetServerSidePropsCountriesQueryDocument = graphql(`
  query GetServerSidePropsCountries {
    countries {
      code
      name
      emoji
    }
  }
`);

export const GetStaticPropsCountriesQueryDocument = graphql(`
  query GetStaticPropsCountries {
    countries {
      code
      name
      capital
      currency
    }
  }
`);
