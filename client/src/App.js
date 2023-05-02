import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLogin from './Components/PageLogin';
import Home from './Components/HomePage/Home';
import SignUp from './Components/SignUp'
import PageAuthentification from './Components/PageAuthentification'
import PageChoice from './Components/PageChoice';



function App() {
  return (

    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/Login" element={<PageLogin/>} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Authentification" element={<PageAuthentification />} />
      <Route path="/Choice" element={<PageChoice />} />
    

      
    </Routes>
      

   
       </>
  );
}

export default App;
