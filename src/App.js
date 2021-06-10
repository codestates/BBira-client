import React, { useState, useEffect } from 'react';
import './Style.css';
import Router from './component/Router';
import axios from 'axios';
require('dotenv').config();

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="App">
      {isLoading ? (
        <>
          <div className="loadimg">
            <div className="bouncybox">
              <div className="bouncy"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Router isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        </>
      )}
    </div>
  );
}

export default App;
