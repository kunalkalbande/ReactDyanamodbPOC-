import React, { useEffect,useState} from "react";
import LogoutPage from '../Login/Logout'
import { useNavigate} from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
//import { QUERY_User } from "../utils/queries";
import { QUERY_GraphqlDynamodb,QUERY_AddEmpGraphqlDynamodb,QUERY_AddEmp_GraphqlDynamodb } from "../utils/queries";
//import { QUERY_Mock,GET_GEN_3  } from "../utils/queries";

const  HomePage = (props) =>  {
  const nav = useNavigate();
  const [authenticated, setauthenticated] = useState(null);

  // const { loading, error, data } = useQuery(QUERY_User, {
  //   variables: { id: 0 }
  // });

  const [createUser, ] = useMutation(QUERY_AddEmp_GraphqlDynamodb);
  
  createUser({
    variables: {
      employee: {
        id: 1,
        name: "Test user",
        type: "testing",
        description: "testing purpose"
      }
    }
  });

  const { loading, error, data } = useQuery(QUERY_GraphqlDynamodb);
  
//  try {
//   const  data  = useQuery(QUERY_User,
//        { variables: { id: 0 } }
//        );
//       console.log(data);
//  } catch (e) {
//    console.error(e);
//    alert(e.message);
//  }

//  try {
//  const  data  = useQuery(GET_GEN_3);
//   console.log(data.data.pokemon_v2_pokemonspecies);
// } catch (e) {
//   console.error(e);
//   alert(e.message);
// }

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
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
    </tr>
    </thead>
    <tbody>
     {data.Employees.map(user => (   //data.users.map(user => ( 
    <tr key={user.id}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.type}</td>
    </tr>
    ))}
    </tbody>
      </table>
     </div>
  );
 }
}

export default HomePage;
