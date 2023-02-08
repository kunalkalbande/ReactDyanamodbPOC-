import React, { useEffect,useState} from "react";
import LogoutPage from '../Login/Logout'
import { useNavigate} from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import {Create_User,QUERY_User} from "../utils/queries"
import {Outlet} from 'react-router-dom'
import SideBarPage from '../Menu/SideBar'
const  Home = (props) =>  {

  const { loading, error, data } = useQuery(QUERY_User);

  if (loading) return <p>Loading...</p>;
      if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
     {/* <SideBarPage> </SideBarPage> */}
   <h1>This is the Dashboard Component</h1>
   {/* <Outlet /> */}
  
     </div>
  );
 }

export default Home;
