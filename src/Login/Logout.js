import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const  LogoutPage = (props) =>  {
    //const nav = useNavigate();
    const { logout } = useAuth0();

    // const handleLogout = async (event) => {
    //     event.preventDefault();
    //     localStorage.setItem("authenticated",false);
    //     nav('/');
    // };

    return(
  //       <div className="App">
  //       <nav className="navbar bg-light">
  // <div className="container-fluid">
  //   <a className="navbar-brand">Home</a>
    // <form className="d-flex" role="search" onSubmit={handleLogout}>
    <>
      <button className="btn btn-outline-success" type="submit" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> 
    {/* <a className="nav-link" href={window.location.origin}>Logout</a> */}
    </>
    // </form>
//   </div>
// </nav>


      //</div>
    );
}

export default LogoutPage;