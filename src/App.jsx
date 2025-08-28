import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Pages/login';
import Signup from './Pages/Signup';

function App() {
  
  return (
   
    <Routes>
      <Route path='/login' element= {<Login />} />
      <Route path='/signup' element= {<Signup />} />
    </Routes>
     

  )
}

export default App;
