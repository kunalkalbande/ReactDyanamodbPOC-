import { ApolloClient, ApolloLink,HttpLink,ApolloProvider, InMemoryCache } from "@apollo/client";
//import { RestLink } from "apollo-link-rest";
import { setContext } from '@apollo/link-context';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
// const restLink = new RestLink({
//     //endpoints: {
//       //uri: "http://localhost:4000/graphql",//"https://api.spacex.land/graphql/",
//       uri: "https://api.spacex.land/graphql/",
//     //},
//   });



export const client = new ApolloClient({
  //uri: "https://beta.pokeapi.co/graphql/v1beta",
  uri: "http://localhost:4000/api",
  headers: {
    authorization: localStorage.getItem('access_token')
},
  //uri: authLink.concat("http://localhost:4000/api"),
  fetchOptions: {
    mode: 'no-cors',
  },
  cache: new InMemoryCache(),
});