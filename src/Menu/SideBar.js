import React, { useState } from "react";
import { menuitems } from "../data/MenuItem"
import LogoutPage from '../Login/Logout'
const SideBarPage = () =>{
    const [window, setWindow] = useState(false);

    let openClose = () => {
      if (window === false) {
        setWindow(true);
      } else {
        setWindow(false);
      }
    };
    return(
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    {menuitems.map(i =>   
        <li className="nav-item" key={i.id}>
        <a className="nav-link" href={i.url}>{i.name}</a>
      </li>
      )}
    </ul>
  </div>
  <div><LogoutPage/></div>
</nav>
    // <div className="container-fluid">
    // <div className="row flex-nowrap">
    //     <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
    //         <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
    //             <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-blue text-decoration-none">
    //                 <span className="fs-5 d-none d-sm-inline">Menu</span>
    //             </a>
    //             <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
    //                 {menuitems.map(i => 
    //                 <li className="nav-item" key={i.id}>
    //                     <a href={i.url} className="nav-link align-middle px-0">
    //                         <i className="bi bi-speedometer"></i> 
    //                         <span className="ms-1 d-none d-sm-inline">{i.name}</span>
    //                     </a>
    //                 </li>
    //                 )}
    //             </ul>
    //         </div>
    //     </div>
    // </div>
    // </div>
    );
}

export default SideBarPage;