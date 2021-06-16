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

  useEffect(() => {
    const url = new URL(window.location.href);

    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getKakaoCode(authorizationCode);
    }

    refreshTokenRequest();
    // console.log(document.cookie);
    // // if () {
    // // }
  }, []);

  const refreshTokenRequest = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/refreshtokenrequest`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setLoggedIn({
          isLogin: true,
          accessToken: res.data.accessToken,
        }).catch((err) => console.log(err));
      });
  };

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
          accessToken: res.data.accessToken,
        });
      });
  };
  /*
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
*/
  return (
    <div className="App">
      <Router isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
