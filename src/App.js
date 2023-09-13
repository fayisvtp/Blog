import React from "react";
import Topbar from "./Topbar";
import Home from "./Pages/Home";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import Seting from "./Pages/setting/Seting";
import Login from "./Pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/register/Register";


function App() {


  const user =false;
    return (

    <div>
      <Topbar/>
      <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/Register' element={user ? <Home/>:<Register/>}/>
      <Route path='/Login' element={user? <Home/>:<Login/>}/>
      <Route path='/Write' element={user ?<Write/>:<Register/>}/>
      <Route path='/Seting' element={user ?<Seting/>:<Register/>}/>
      <Route path='/Post/:postId' element={<Single/>}/>





      </Routes>
    
    {/* <Login/> */}
    {/* <Seting/> */}
    {/* <Home/> */}
    {/* <Single/> */}
    {/* <Write/> */}
   
    </div>
  );
}

export default App;
