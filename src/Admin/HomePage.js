import React, { useEffect,useState} from "react";
import LogoutPage from '../Login/Logout'
import { useNavigate} from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import {Create_User,QUERY_User,delete_User} from "../utils/queries"
import { usersApi } from "../utils/users"
import { useAuth0 } from '@auth0/auth0-react';

const  HomePage = (props) =>  {
  const nav = useNavigate();
  const [authenticated, setauthenticated] = useState(null);
  const [userdata, setUserData] = useState([]);
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
  const fetchUser = async () => {
    const results = await fetchApi();
    //console.log(results);
    setUserData(results);
  };

  // const { getAccessTokenSilently } = useAuth0();
  //   const [data, setPosts] = useState(null);
  //    const [tokens, setToken] = useState(null);
  //    const use_QUERY = `
  //   {
  //     users {
  //       _id
  //       name
  //       email
  //       password
  //     }
  //   }
  // `;
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const token = await getAccessTokenSilently({
  //         audience: 'http://localhost:4000/api',
  //         scope: "read:current_user read:posts read:users",
  //         client_id:"elDkkwevaKVzAYMVem9GMLwN1TQgRN6C",
  //         //client_secret:"NIak5VTeIyvbbLn_Tx75oGSOohmL67bWDeBpUUTaCbS_T78DpcnyjcAQvQBuZzvz",
  //       });
        
  //       setToken(token);
  //       const response = await fetch('http://localhost:4000/api', {
  //         method: "POST",
  //         headers: { 
  //           "Content-Type": "application/json",
  //           "Authorization": token ? `Bearer ${token}` : null
  //          },
  //         body: JSON.stringify({ query: use_QUERY })
  //         },
  //         // data: {
  //         //   query
  //         //   }
  //       );
  //       console.log(response);
  //       setPosts(await response.json());
  //     } catch (e) {
  //       console.log(e);
  //       console.error(e);
  //     }
  //   })();
  // }, [getAccessTokenSilently]);
 
 
  const { loading, error, data } = useQuery(QUERY_User);
  const [deleteUser] = useMutation(delete_User);
 //console.log('data',data);

//  useEffect(()=>{
//   if(data){
//     setUserData(data);
//   }
//  },[data])

const fetchApi = () => {
  return new Promise((resolve) => {
      setTimeout(async () => {
          var data = await usersApi.getAllUsers();
          //console.log(data);
          resolve(data.users);
      }, 500);
  });
};


const handleAddUser = async (event) => {
  event.preventDefault();
  nav('/adduser');
};

const deleteModalOpen = (_id) => {
  deleteUser({
    variables: {
      id: _id,
      }
  });
 }

// useEffect(() => {
//   const init = async () => {
//       await fetchUser();
//   };
//   init();
// }, []);

//  useEffect(() => {
//   const loggedInUser = localStorage.getItem("authenticated");
//   if (loggedInUser) {
//    setauthenticated(loggedInUser);
//   }
//  }, []);

//  if (!authenticated) {
//   nav('/');
//  } else {
  if (loading) return <p>Loading...</p>;
     if (error) return <p>Error : {error.message}</p>;
  return (
    <>
    <div>
    <form className="d-flex" role="search" onSubmit={handleAddUser}>
      <button className="btn btn-outline-success" type="submit" onSubmit={handleAddUser}>Add User</button>
    </form>
    </div>
    <div>
      <table className="table table-striped">
      <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
     {data.users.map(user => (   
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><a href={"/edit/"+user._id}>Edit</a> || <a href="#" onClick={() => deleteModalOpen(user._id)}>Delete</a></td>
    </tr>
    ))}
    </tbody>
      </table>
      </div>
      </>
  );
 //}
}

export default HomePage;
