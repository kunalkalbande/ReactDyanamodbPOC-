import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";


import HomePage from './Admin/HomePage'
import LoginPage from './Login/Login'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<LoginPage/>} />
      <Route exact path="/home" element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
