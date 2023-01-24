import React, { useEffect,useState} from "react";
import LogoutPage from '../Login/Logout'
import { useNavigate} from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import {Create_User,QUERY_User} from "../utils/queries"


const  HomePage = (props) =>  {
  const nav = useNavigate();
  const [authenticated, setauthenticated] = useState(null);
  //  const [createUser, ] = useMutation(Create_User);
  
  // createUser({
  //   variables: {
  //     userInput: {
  //       name: "Test user",
  //       email: "test@gmail.com",
  //       password: "test"
  //     }
  //   }
  // });

    const { loading, error, data } = useQuery(QUERY_User);

 useEffect(() => {
  const loggedInUser = localStorage.getItem("authenticated");
  if (loggedInUser) {
   setauthenticated(loggedInUser);
  }
 }, []);

 if (!authenticated) {
  nav('/');
 } else {
  if (loading) return <p>Loading...</p>;
      if (error) return <p>Error : {error.message}</p>;
  return (
     <div className="App">
      <LogoutPage/>
      <table className="table table-striped">
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
      </table>
     </div>
  );
 }
}

export default HomePage;
