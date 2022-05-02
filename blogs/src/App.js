
import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import { Context } from "./context/Context";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Settings from './Pages/Settings/Settings';
import Signup from './Pages/Signup/Signup';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';

function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/login"  element={ user ? <Home/> : <Login/>} />
      <Route path="/signup"  element={ user ? <Home/> : <Signup/>} />
      <Route path="/settings"  element={ user ? <Settings/> : <Signup/>} />
      <Route path="/write"  element={ user ? <Write/> : <Signup/>}/>
      <Route path="/post/:postId"  element={<Single/>} />
    </Routes>
  </Router>
  );
}

export default App;
