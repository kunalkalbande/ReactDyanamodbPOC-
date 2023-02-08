import React, { useEffect,useRef,useState} from "react";
import { useNavigate,useParams } from "react-router-dom";
import { useQuery,useMutation } from "@apollo/client";
import { get_User,QUERY_User, Edit_User } from "../../utils/queries"
import { useAuth0 } from '@auth0/auth0-react';
 
const  EditUserPage = (props) =>  {
  const nav = useNavigate();
  const [formState, setFormState] = useState({ fname:"",lname:"",username: "", password: "" });
  const [user, setUser] = useState({});
  const [editUser] = useMutation(Edit_User);
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const { id } = useParams();
  const { loading, error, data } = useQuery(get_User,{
    variables: {id: id}
  });
  useEffect(() => {
    if (data?.getUser) {
    name.current.value = data.getUser.name;
    email.current.value= data.getUser.email;  
    password.current.value = data.getUser.password;
    }
    //console.log('Edit user data',data);
  },[data])

  
  //const { loading, error, data } = useQuery(QUERY_User);
  //console.log('Edit user data',data);

  // update state based on form input changes
  const handleChange = (event)=> {
    setUser({ ...user, [event.target.name]: event.target.value});
  }

  const handleEditUser = async (event) => {
    //console.log('edit user name',user)
    //editUser({variables: { ...user }});
    editUser({
      variables: {
        id: id,
        userInput: {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value
        }
      }
    });
    event.preventDefault();
    
    nav('/home');

    // clear form values
    setFormState({
      fname: "",
      lname: "",
      username: "",
      password: "",
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={handleEditUser}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                ref={name}
                //onChange={handleChange}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                ref={email}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
            <input
                type="text"
                className="input"
                ref={password}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditUserPage;