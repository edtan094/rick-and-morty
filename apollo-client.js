import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  //   uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  uri: "https://main--edwin-tans-team-v0c26.apollographos.net/graphql",
  cache: new InMemoryCache(),
});

export default client;
