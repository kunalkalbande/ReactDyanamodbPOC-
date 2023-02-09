import React, { useState} from "react";
import '../../Login/login.css'
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Create_User } from '../../utils/queries'

const AddUserPage = (props) => {
    const nav = useNavigate();
    const [createUser, setCreateUser] = useMutation(Create_User);
    const [formState, setFormState] = useState({ fname:"",lname:"",username: "", password: "" });
    // update state based on form input changes
    const handleChange = (event) => {
       event.preventDefault()
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        if(formState.username!== null){
            createUser({
    variables: {
      userInput: {
        name: formState.fname + " " + formState.lname,        
        email: formState.username,
        password: formState.password      }
    }
  });
  
        }
      } catch (e) {
        console.error(e);
      }
      nav('/home');
    // clear form values
      setFormState({
        fname: "",
        lname: "",
        username: "",
        password: "",
      });
    };

    return(
        <>
<div className="wrapper fadeInDown">
  <div id="formContent">
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="fname" className="fadeIn second" name="fname" placeholder="First Name" value={formState.fname} onChange={handleChange}/>
      <input type="text" id="lname" className="fadeIn third" name="lname" placeholder="Last Name" value={formState.lname} onChange={handleChange}/>
      <input type="text" id="username" className="fadeIn forth" name="username" placeholder="Email Address" value={formState.username} onChange={handleChange}/>
      <input type="text" id="password" className="fadeIn Fifth" name="password" placeholder="Password" value={formState.password} onChange={handleChange}/>
      <input type="submit" className="fadeIn sixth" value="Submit"/>
    </form>
  </div>
</div>
  </>
    );
}

export default AddUserPage;