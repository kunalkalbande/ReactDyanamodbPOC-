import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutPage from './Logout'
import {Create_User,QUERY_User} from "../utils/queries"
import { useQuery,useMutation } from "@apollo/client";

export default function User() {
    const { user, isAuthenticated } = useAuth0();
    const use_QUERY = `
    {
      users() {
        _id
        name
      }
    }
  `;
    const { data, isLoading, error } = useQuery("users", () => {
      return fetch("http://localohost:4000/api", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('access_token')}`
         },
        body: JSON.stringify({ query: use_QUERY })
      })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("Error fetching data");
          } else {
            return response.json();
          }
        })
        .then((data) => data.data);
    });
    if (isLoading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
  return (
    isAuthenticated && (
      <div>
         <LogoutPage></LogoutPage>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      
    )
  );
}

