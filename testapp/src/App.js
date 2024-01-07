
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './componenets/Signup';
import Login from './componenets/Login';
import Myhome from './componenets/Myhome';

const App = () => {
  
  return (
    <>
    <div>
      <Routes>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/Myhome' element={<Myhome/>}/>
      </Routes>
    </div>

    </>
  );
};

export default App;
