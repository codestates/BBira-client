import React, { useState } from "react";

export default function Signup() {
  const [Owner, setOwner] = useState(false);
  return (
    <div className="nav">
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/851263973742739471/852072037240406036/BBira.png"
          alt="BBira"
        />
      </div>
      <div>
        <div className="title">회원 가입</div>
        <div>
          Email : <input id="email"></input>
        </div>
        <div>
          Password : <input id="password"></input>
        </div>
        <div>
          Nickname : <input id="nickname"></input>
        </div>
        <div>
          I`m The Owner
          <label className="switch">
            <input type="checkbox" onClick={setOwner} />
            <span className="slider round"></span>
          </label>
        </div>
        {Owner ? (
          <div></div>
        ) : (
          <div>
            <div>
              Storename : <input id="storename"></input>
            </div>
            <div>
              Phone : <input id="phone"></input>
            </div>
            <div>
              address : <input id="address"></input>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
