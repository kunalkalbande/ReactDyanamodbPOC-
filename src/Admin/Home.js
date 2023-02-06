import React, { useEffect,useState} from "react";
import LogoutPage from '../Login/Logout'
import { useNavigate} from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import {Create_User,QUERY_User} from "../utils/queries"
const  Home = (props) =>  {

  const { loading, error, data } = useQuery(QUERY_User);

  if (loading) return <p>Loading...</p>;
      if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      {/* <LogoutPage/> */}
      {/* <table className="table table-striped">
      <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
    </thead>
    <tbody>
     {data.users.map(user => (   
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
    ))}
    </tbody>
      </table> */}
   <h1>This is the Dashboard Component</h1>
     </div>
  );
 }

export default Home;
