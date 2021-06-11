import React, { useState, useEffect } from 'react';
import './Style.css';
import Router from './component/Router';
import axios from 'axios';
require('dotenv').config();

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [isLoggedIn, setLoggedIn] = useState({
    isLogin: false,
    accessToken: '',
  });

  return (
    <div className="App">
      <Router isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
