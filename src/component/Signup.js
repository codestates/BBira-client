import React, { useState } from "react";
import "./component/toggle.css";

function Signup() {
  const [Owner, setOwner] = useState(false);
  function isOwner(e) {
    if (Owner) {
      setOwner(false);
    } else {
      setOwner(true);
    }
  }
  return (
    <div className="">
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/851263973742739471/852072037240406036/BBira.png"
          alt="BBira"
        />
      </div>
      <div>
        <div className="title">회원 가입</div>
        <div>
          Email : <input id="email" required></input>
        </div>
        <div>
          Password : <input id="password" required></input>
        </div>
        <div>
          Nickname : <input id="nickname" required></input>
        </div>
        <div>
          I`m The Owner
          <label className="switch">
            <input className="toggleBtn" type="checkbox" onClick={isOwner} />
            <span className="slider round"></span>
          </label>
        </div>
        {Owner ? (
          <div>
            <div>
              Storename : <input id="storename" required></input>
            </div>
            <div>
              Phone : <input id="phone" required></input>
            </div>
            <div>
              address : <input id="address" required></input>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <duv><</duv>
    </div>
  );
}

export default Signup;
