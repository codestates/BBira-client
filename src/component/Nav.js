import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav({ isLoggedIn }) {
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
          {
            /* 상태에 따라 변하는 오른쪽 버튼들
            1. 로그인 상태가 아닐 때 - 겟 스타트
            2. 로그인일 중 일때 - 마이페이지, 로그아웃
        */
            isLoggedIn ? (
              <>{/* 마이페이지, 로그아웃 버튼 */}</>
            ) : (
              <Link to="/login">
                <button className="mediumBtn reverse">Get start</button>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Nav;
