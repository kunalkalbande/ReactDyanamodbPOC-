import React, { useState} from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = (props) => {
    const nav = useNavigate();
    const [formState, setFormState] = useState({ username: "", password: "" });
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const { loginWithRedirect } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();

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
        if(formState.username==='test' && formState.password==='1234'){
          setauthenticated(true)
          localStorage.setItem("authenticated", true);
          nav('/home');
        }
      } catch (e) {
        console.error(e);
      }
      
    // clear form values
      setFormState({
        username: "",
        password: "",
      });
    };

    return(
        <>
        <div className="wrapper fadeInDown">
  {/* <div id="formContent"> */}
    {/* <form onSubmit={handleFormSubmit}>
      <input type="text" id="username" className="fadeIn second" name="username" placeholder="username" value={formState.username} onChange={handleChange}/>
      <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" value={formState.password} onChange={handleChange}/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form> */}

 <button onClick={() => loginWithRedirect({ appState: { targetUrl: "home" } })}>Log In</button>
  {/* </div> */}
</div>
  </>
    );
}

export default LoginPage;