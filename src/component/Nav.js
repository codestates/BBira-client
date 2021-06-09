import React, { useState, useEffect } from 'react';

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <img
          src="https://cdn.discordapp.com/attachments/851263973742739471/852072037240406036/BBira.png"
          alt="BBira"
        />

        {/* 상태에 따라 변하는 오른쪽 버튼들 */}
        <button className="mediumBtn reverse">Get start</button>
      </div>
    </div>
  );
}

export default Nav;
