import axios from 'axios';
import React, { useState } from 'react';

function EditProfile({ userinfo, setEditModeHandler }) {
  const { name, email, storename, address, phone } = userinfo;

  const [inputUserinfo, setUserinfo] = useState({
    email,
    name,
    storename,
    address,
    phone,
  });

  const setUserinfoHandler = (e) => {
    setUserinfo({
      ...inputUserinfo,
    });
  };

  const editProfileHandler = () => {
    const { email, name, storename, address, phone } = inputUserinfo;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/fixuserinfo`,
        {
          email,
          nickname: name,
          storename,
          address,
          phone,
        },
        {
          'Content-Type': 'application/json',
          withCredentials: true,
        }
      )
      .then(() => {});
  };

  return (
    <div className="mypage container center">
      <div className="subNav">
        <button className="mediumBtn reverse" onClick={setEditModeHandler}>
          마이페이지
        </button>
      </div>
      <h1>프로필 편집</h1>
      <div className="grid userInfo">
        <div className="tag">name</div>
        <input
          className="data"
          name="name"
          value={name}
          required
          onChange={setUserinfoHandler}
        />

        <div className="tag">email</div>
        <div className="data">{email}</div>

        <div className="tag">store name</div>
        <input
          className="data"
          name="storename"
          value={storename}
          required
          onChange={setUserinfoHandler}
        />

        <div className="tag">address</div>
        <input
          className="data"
          name="address"
          value={address}
          required
          onChange={setUserinfoHandler}
        />

        <div className="tag">phone</div>
        <input
          className="data"
          name="phone"
          value={phone}
          required
          onChange={setUserinfoHandler}
        />
        <div>
          <button className="mediumBtn submitBtn" onClick={editProfileHandler}>
            Edit Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
