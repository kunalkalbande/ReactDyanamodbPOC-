import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import HomePage from './Admin/HomePage'
import LoginPage from './Login/Login'
import LogoutPage from './Login/Logout'
import Userpage from './Login/user'


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<LoginPage/>} />
      <Route exact path="/home" element={<HomePage/>} />
    </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
      <Routes>
    {!isAuthenticated ? (
          <Route exact path="/" element={<LoginPage/>} />
      ) :
      <>
           <Route exact path="/user" element={<Userpage/>} />
           <Route exact path="/home" element={<HomePage/>} />
            <Route exact path="/" element={<LogoutPage/>} />  
        </>}
        </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
