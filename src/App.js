import React, { useState } from 'react';
import './Style.css';
import Router from './component/Router';
require('dotenv').config();

function App() {
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
