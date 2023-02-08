import { ApolloClient, ApolloLink,HttpLink,ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { useEffect,useState} from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from "@apollo/link-context";
import App from './App';
import SideBarPage from './Menu/SideBar'
function Apollowrapper({children}){
    const {isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [bearerToken, setBearerToken ] = useState(null);

    useEffect(() => {
const getToken = async() => {
    const token = isAuthenticated ? await getAccessTokenSilently() : "";
    setBearerToken(token);
    //localStorage.setItem('access_token',bearerToken)
};
getToken();
    },[getAccessTokenSilently,isAuthenticated]);

    const httpLink = new HttpLink({
        uri:'http://localhost:4000/api'
      });
      

      const authLink = setContext((request, { headers, ...rest }) => {
       if(!bearerToken) return {headers,...rest};
       return{
           ...rest,
           headers:{
            ...headers,
            authorization:  `Bearer: ${bearerToken}`,
           }
       };
      });
      console.log('token',bearerToken);
   

     const client = new ApolloClient({
        //uri: authLink.concat(httpLink),
        uri: "http://localhost:4000/api",
        headers: {
          authorization: `Bearer ${bearerToken}`,
      },
        fetchOptions: {
          mode: 'no-cors',
        },
        cache: new InMemoryCache(),
      });
      console.log("bearerToken:",children);
      return <ApolloProvider client={client}>
        <SideBarPage></SideBarPage>
        <App/>
        
        </ApolloProvider>
}
export default Apollowrapper