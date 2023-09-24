import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Login from '../Login/Login';
import Table from '../Table/Table';

function App() {
  return (
    <Routes>
      <Route path='/login' element ={<Login />} />
      <Route path='/table' element = {<Table />} />

</Routes>
  );
}

export default App;
