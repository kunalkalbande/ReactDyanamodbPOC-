import { ApolloClient, ApolloLink,HttpLink,ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/link-context';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

 /* Set URI for all Apollo GraphQL requests (backend api) */
 const httpLink = new HttpLink({
    uri:'http://localhost:4000/api',
    fetchOptions: { credentials: 'same-origin' },
  });

/* Set in-memory token to reduce async requests */
let token;

/* Create Apollo Link to supply token with either
 * in-memory ref or auth0 req'ed token or redirect (built into
 * getTokenSilently
*/
const withTokenLink = setContext(async () => {
   // const { getAccessTokenSilently } = useAuth0()
  // return token if there
  if (token) return { auth0Token: token };

//   // else check if valid token exists with client already and set if so
//   const newToken = await useAuth0.getAccessTokenSilently();
//   console.log('test call',newToken);
//   token = newToken;
//   return { auth0Token: newToken };

  try{
    const newToken = await useAuth0().getAccessTokenSilently({
      audience: 'http://localhost:4000/api',
      scope: "read:current_user read:posts read:users",
      client_id:"elDkkwevaKVzAYMVem9GMLwN1TQgRN6C",
    });
    console.log('test call',newToken);
     return newToken;
  }catch(ex){
    console.log(ex);
    return ex;
  }
  
});

 /* Create Apollo Link to supply token in auth header with every gql request */
 const authLink = setContext((_, { headers, auth0Token }) => ({
    headers: {
      ...headers,
      ...(auth0Token ? { authorization: `Bearer ${auth0Token}` } : {}),
    },
  }));

   /* Create Apollo Link array to pass to Apollo Client */
   const link = ApolloLink.from([withTokenLink, authLink, httpLink]);

   /* Set up local cache */
   const cache = new InMemoryCache();
 
   /* Create Apollo Client */
   export  const apolloclients = new ApolloClient({
     link,
     cache,
   });

// export const client = new ApolloClient({
//   uri: "http://localhost:4000/api",
//   headers: {
//     authorization: localStorage.getItem('access_token')
// },
//   fetchOptions: {
//     mode: 'no-cors',
//   },
//   cache: new InMemoryCache(),
// });