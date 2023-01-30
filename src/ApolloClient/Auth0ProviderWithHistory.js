import { Auth0Provider } from "@auth0/auth0-react";
import { Children } from "react";

export const Auth0ProviderWithHistory = ({children}) => {
return(
    <Auth0Provider
    domain="dev-a5viyr1pf4iwkc3f.us.auth0.com"
      clientId="JghPWKqDzTmf8UmtK7LWQlQV7d0cRCRn"
      authorizationParams={{
         redirect_uri: window.location.origin,
         audience: 'http://localhost:4000/api',
      }}
    >{Children}</Auth0Provider>
);
}

//  const Auth0ProviderWithHistory;