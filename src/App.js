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
  }, []);

  const refreshTokenRequest = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/refreshtokenrequest`, {
        withCredentials: true,
      })
      .then((res) => {
        // if (res.data.message !== 'ok') {
        //   const message =
        //     'refresh token이 만료되어 불러올 수 없습니다. 다시 로그인 해주시기 바랍니다.';
        //   return setLoggedIn({isLogin: false, accessToken: ''})
        // }
        setLoggedIn({
          isLogin: true,
          accessToken: res.data.accessToken,
        });
      });
  };

  const getKakaoCode = (authorizationCode) => {
    console.log('카카오에서 받은 코드 : ', authorizationCode);
    axios
      .post(`${process.env.REACT_APP_API_URL}/kakaologin`, {
        authorizationCode,
      })
      .then((res) => {
        console.log('응답!!!!!', res.data);
        setLoggedIn({
          isLogin: true,
          accessToken: res.data.accessToken,
        });
      });
  };

  return (
    <div className="App">
      <Router isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
