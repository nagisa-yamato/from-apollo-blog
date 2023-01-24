// NOTE:
// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default client;
