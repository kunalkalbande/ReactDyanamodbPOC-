import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
//import { RestLink } from "apollo-link-rest";

// const restLink = new RestLink({
//     //endpoints: {
//       //uri: "http://localhost:4000/graphql",//"https://api.spacex.land/graphql/",
//       uri: "https://api.spacex.land/graphql/",
//     //},
//   });

export const client = new ApolloClient({
  //uri: "https://beta.pokeapi.co/graphql/v1beta",
  //uri: "http://localhost:4000/graphql",
  uri: "http://localhost:4000/api",
  fetchOptions: {
    mode: 'no-cors',
  },
  cache: new InMemoryCache(),
  //link: ApolloLink.from([restLink]),
});