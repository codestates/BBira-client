import React, { useState, useEffect } from 'react';
import Router from './component/Router';
import axios from 'axios';
import './Style.css';
require('dotenv').config();

function App() {
  const [isLoggedIn, setLoggedIn] = useState({
    isLogin: false,
    accessToken: '',
  });
  const [whichSite, setWhichSite] = useState('');

  useEffect(() => {
    console.log(whichSite);
    if (whichSite === 'KAKAO') {
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      if (authorizationCode) {
        getGitHubCode(authorizationCode);
      }
    } else {
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      if (authorizationCode) {
        getKakaoCode(authorizationCode);
      }
    }
  }, []);

  const getKakaoCode = (authorizationCode) => {
    console.log('카카오에서 받은 코드 : ', authorizationCode);
    axios
      .post(`${process.env.REACT_APP_API_URL}/kakaologin`, {
        authorizationCode,
      })
      .then((res) => {
        console.log('응답11111', res.data);
        setLoggedIn({
          isLogin: true,
          accessToken: res.data.data.accessToken,
        });
        setWhichSite('KAKAO');
      });
  };

  const getGitHubCode = (authorizationCode) => {
    console.log('깃허브에서 받은 코드 : ', authorizationCode);
    axios
      .post(`${process.env.REACT_APP_API_URL}/githublogin`, {
        authorizationCode,
      })
      .then((res) => {
        console.log('응답22222', res.data);
        setLoggedIn({
          isLogin: true,
          accessToken: res.data.data.accessToken,
        });
        setWhichSite('GITHUB');
      });
  };

  return (
    <div className="App">
      <Router isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
