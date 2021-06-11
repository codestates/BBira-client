import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Nav({ isLoggedIn, setLoggedIn }) {
  const logOutHandler = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/logout`).then(() => {
      setLoggedIn({
        isLogin: false,
        accessToken: '',
      });
    });
  };

  return (
    <div className="nav">
      <div className="container">
        <Link to="/">
          <img
            src="https://cdn.discordapp.com/attachments/851263973742739471/852072037240406036/BBira.png"
            alt="BBira"
          />
        </Link>

        <div className="dynamicLink">
          {isLoggedIn.isLogin ? (
            <>
              <Link to="/mypage">
                <button className="mediumBtn reverse marginR">My page</button>
              </Link>
              <Link to="/">
                <button className="mediumBtn reverse" onClick={logOutHandler}>
                  Sign out
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin">
                <button className="mediumBtn reverse">Get start</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
