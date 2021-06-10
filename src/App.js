import React, { useState, useEffect } from 'react';
import './Style.css';
import Router from './component/Router';
import axios from 'axios';
require('dotenv').config();

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    // axios로 데이터를 정상적으로 받아왔다. ->
  });

  return (
    <div className="App">
      {isLoading ? (
        <h1 className="loader">로딩중...</h1>
      ) : (
        <>
          <Router isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        </>
      )}
    </div>
  );
}

export default App;
