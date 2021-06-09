import React, { useState, useEffect } from 'react';
import './Style.css';
import Nav from './component/Nav';
import Login from './pages/Login';
import axios from 'axios';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
    </div>
  );
}

export default App;
