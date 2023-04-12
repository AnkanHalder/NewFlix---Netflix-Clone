import Login from './Login.jsx';
import Home from './Home.jsx';
import Main from './Main.jsx';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
//import './static/css/App.css';
import React,{useState} from 'react';
import { LoginContext } from './context.js';
import PlayVideo from './PlayVideo.jsx';

function App() {
  const [loggedIn , setLogin]= useState(false);
  if (!loggedIn){
    return(
      <LoginContext.Provider value = {{loggedIn , setLogin}}>
        <Login />
      </LoginContext.Provider>
    )
  }
  return (
    <LoginContext.Provider value = {{loggedIn , setLogin}}>
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/verifyEmail' element={<Home/>} />
    <Route path='/main' element={<Main/>} />
    <Route path='/playVideo/:videoId*' element={<PlayVideo />} />
    </Routes>
 </LoginContext.Provider> 
  );
}

export default App;
