//how to pass token Apollo server using Auth0 in react Js??
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { useAuth0 } from '@auth0/auth0-react';

const ApolloProviderWithAuth0 = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
  });

  const authLink = setContext(async (_, { headers, ...rest }) => {
    let token;
    try {
      token = await getAccessTokenSilently();
    } catch (error) {
      //console.log(error);
    }

    if (!token) return { headers, ...rest };

    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const client = React.useRef();

  if (!client.current) {
    client.current = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }

  return (
    <ApolloProvider client={client.current}>
      {children}
    </ApolloProvider>
  );
};

export { ApolloProviderWithAuth0 };




//Source: https://stackoverflow.com/questions/65884597






    