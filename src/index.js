import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { apolloclients } from './ApolloClient/Auth'
import { client } from "./ApolloClient/client";
import { Auth0ProviderWithHistory } from "./ApolloClient/Auth0ProviderWithHistory";
import { Auth0Provider } from "@auth0/auth0-react";
import Apollowrapper from './Apollowrapper';
import { Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <ApolloProvider client={client}>
//     <React.StrictMode>
//   <Auth0Provider
//     domain="dev-a5viyr1pf4iwkc3f.us.auth0.com"
//     clientId="JghPWKqDzTmf8UmtK7LWQlQV7d0cRCRn"
//     authorizationParams={{
//        redirect_uri: window.location.origin,
//        audience: 'http://localhost:4000/api',
//        //audience: "https://dev-a5viyr1pf4iwkc3f.us.auth0.com/api/v2/",
//        //scope: "read:current_user update:current_user_metadata"
//     }}
//   >
//     <App />
//   </Auth0Provider>
//   </React.StrictMode>
//  </ApolloProvider>
// );

const onRedirectCallback= (appstate) => {
  Navigate(appstate?.targetUrl || window.location.pathname)
}

root.render(
    <React.StrictMode>
       <Auth0Provider
  domain="dev-a5viyr1pf4iwkc3f.us.auth0.com"
      clientId="JghPWKqDzTmf8UmtK7LWQlQV7d0cRCRn"
      authorizationParams={{
         redirect_uri: window.location.origin,
         audience: 'http://localhost:4000/api',
      }}
     // onRedirectCallback={onRedirectCallback}
      >
      <Apollowrapper>
  </Apollowrapper>
 </Auth0Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
