import React from "react";
import { useNavigate } from "react-router-dom";

const  LogoutPage = (props) =>  {
    const nav = useNavigate();

    const handleLogout = async (event) => {
        event.preventDefault();
        localStorage.setItem("authenticated",false);
        nav('/');
    };

    return(
        <div className="App">
        <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Home</a>
    <form className="d-flex" role="search" onSubmit={handleLogout}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Logout</button>
    </form>
  </div>
</nav>
      </div>
    );
}

export default LogoutPage;