import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import HomePage from './Admin/HomePage'
import LoginPage from './Login/Login'
import LogoutPage from './Login/Logout'
import Userpage from './Login/user'
import Home from './Admin/Home'
import SideBarPage from './Menu/SideBar'
import AddUserPage from './component/user/AddUser'
function App() {
  const { isAuthenticated } = useAuth0();
  return (
     <div className="App">
    <>
      {/* <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<LoginPage/>} />
      <Route exact path="/home" element={<HomePage/>} />
    </Routes>
    </BrowserRouter> */}
    
    <BrowserRouter>
    <SideBarPage></SideBarPage>
      <Routes>
    {!isAuthenticated ? (
          <Route exact path="/" element={<LoginPage/>} />
      ) :
      <>
           <Route  path="/user" element={<Userpage/>} />
           <Route  path="/home" element={<HomePage/>} />
           <Route  path="/adduser" element={<AddUserPage/>} />
           <Route  path="/" element={<Home/>} />
           <Route exact path="/" element={<LogoutPage/>} />  
        </>}
        </Routes>
        </BrowserRouter> 
        </>
     </div>
  );
}

export default App;
